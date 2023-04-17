import React, { useContext, useEffect, useState } from "react";
import MyProfile from "../../src/images/5.png";
import { AuthContext } from "../Context/AuthContext";
import { db, storage } from "../utilities/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { BiArrowBack } from "react-icons/bi";
import SearchMain from "./SearchMain";
import { updateProfile } from "firebase/auth";
import {
  Back,
  Container,
  Photo,
  Profile,
  Status,
} from "../style/profilephoto-styled";

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
