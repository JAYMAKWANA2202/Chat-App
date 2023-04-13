import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MyProfile from "../../src/images/5.png";
import { AuthContext } from "../Context/AuthContext";
import { db, storage } from "../utilities/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { BiArrowBack } from "react-icons/bi";
import SearchMain from "./SearchMain";
import { updateProfile } from "firebase/auth";

export default function ProfilePhoto() {
  const [img, setImg] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [click, setClick] = useState(true);
  const [uploading, setUploading] = useState(false);
  const { currentuser } = useContext(AuthContext);

  const handleBack = () => {
    setClick(false);
  };

  useEffect(() => {
    // Set initial value of imageUrl with photoURL from currentuser
    if (currentuser && currentuser.photoURL) {
      setImageUrl(currentuser.photoURL);
    }
  }, [currentuser]);

  const handleImageUpload = () => {
    if (img) {
      setUploading(true);
      const storageRef = ref(storage, `profilePhotos/${uuid()}`);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        () => {
          // Handle progress here if desired
        },
        (error) => {
          // Handle error here
          console.error(error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              console.log("downloadURL: ", downloadURL);

              await updateDoc(doc(db, "user", currentuser.uid), {
                photoURL: downloadURL,
              });

              // don't use the currentuser.uid here below
              await updateProfile(currentuser, {
                photoURL: downloadURL,
              });

              setImageUrl(downloadURL);

              setUploading(false);
            })
            .catch((error) => {
              console.error(error);
              setUploading(false);
            });
        }
      );
    }
  };

  return (
    <>
      {click ? (
        <Container>
          <Back>
            <BiArrowBack onClick={handleBack} />
          </Back>
          <span>Profile</span>
          <Profile>
            <Photo>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setImg(e.target.files[0])}
              />
              <label htmlFor="file">
                <img src={imageUrl || MyProfile} alt="" />
                {/* Use imageUrl state for src */}
              </label>
            </Photo>
          </Profile>

          <Status>
            <label>Your Name</label>
            <span>{currentuser?.displayName}</span>
            <label>Your Email</label>
            <span>{currentuser?.email}</span>
          </Status>
          {/* Call handleImageUpload only when img state is not null */}
          {img && (
            <button onClick={handleImageUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          )}
        </Container>
      ) : (
        <>
          <SearchMain />
        </>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    flex-direction: row;
    color: #d9dee0;
    font-size: 25px;
  }
`;

const Profile = styled.div`
  margin-bottom: 20px;
`;

const Photo = styled.div`
  margin: 30px 0;

  img {
    width: 175px;
    height: 175px;
    object-fit: cover;
    border-radius: 50%;
  }

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Back = styled.div`
  background-color: #081116;
  font-size: 30px;
  margin-right: 380px;
  cursor: pointer;
  margin-top: 15px;

  svg {
    display: flex;
    color: #fff;
  }
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: green;
    font-size: 19px;
    margin-left: 20px;
  }

  span {
    margin: 10px 20px;
    font-size: 22px;
    font-weight: 300;
    color: whitesmoke;
  }

  @media (max-width: 768px) {
    label {
      font-size: 12px;
      margin-left: 0;
      text-align: center;
    }

    span {
      margin: 10px 0;
      font-size: 15px;
      text-align: center;
    }
  }
`;
