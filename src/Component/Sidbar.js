import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
import Myimg from "../images/1.jpg";
import Myimg1 from "../images/3.png";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../utilities/firebase";
import SidbarChatList from "./SidbarChatList";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../src/Context/AuthContext";
import BackGroundImg from "../../src/images/4.jpg";

export default function Sidbar() {
  const { currentuser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);
  const Navigate = useNavigate();

  const handelLogout = () => {
    console.log("handelLogout: ", handelLogout);
    signOut(auth);
    Navigate("/");
  };

  const handelSearch = async () => {
    const q = query(
      collection(db, "user"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      console.log("querySnapshot: ", querySnapshot);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log("setUser: ", setUser);
      });
    } catch (err) {
      setErr("user not found!");
    }
  };

  const handelKey = (e) => {
    e.code === "Enter" && handelSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentuser.uid > user.uid
        ? currentuser.uid + user.uid
        : user.uid + currentuser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create user chats
        await updateDoc(doc(db, "userChat", currentuser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChat", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentuser.uid,
            displayName: currentuser.displayName,
            email: currentuser.email,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <Container>
      <Header>
        <img src={Myimg1} height={30} alt="" />
        <span>{currentuser.email}</span>
        <IconButton>
          <Button onClick={handelLogout} className=" w-100 ">
            Logout
          </Button>
          {/* <label htmlFor="button">
            <CiMenuKebab style={{ cursor: "pointer" }} />
          </label> */}
        </IconButton>
      </Header>

      <Search>
        <SearchInput
          placeholder="Search or start new chat"
          onKeyDown={handelKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </Search>

      <UserChat>
        {user && (
          <Chats
            className="userChat"
            style={{ borderBottom: "1px solid lightgray" }}
            onClick={handleSelect}
          >
            <img src={Myimg} height={40} alt="" />
            <span>{user?.displayName}</span>
          </Chats>
        )}
        {err && <span>User not found!</span>}

        <SidbarChatList />
      </UserChat>
    </Container>
  );
}

const Container = styled.div`
  border-right: 1px solid grey;
  width: 30%;
  /* background-image: url(${BackGroundImg}); */

  @media (max-width: 768px) {
    height: 60px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 10px;
      font-size: 10px;
    }

    p {
      margin-left: 45px;
      margin-top: -3px;
      font-size: 9px;
    }
    button {
      font-size: 9px;
    }
  }
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  z-index: 2;
  background-color: #111b21;
  position: sticky;
  overflow: hidden;
  top: 60px;
  height: 60px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: #202c33;
  color: whitesmoke;
  border-radius: 5px;

  ::placeholder {
    padding: 9px 12px;
    color: #8696a0;
  }
`;

const SearchButton = styled.div`
  cursor: pointer;
  margin-left: -5px;
  margin-bottom: 4px;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  background-color: #202c33;
  color: white;
  z-index: 1;
  align-items: center;
  padding: 15px;
  height: 60px;

  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

const IconButton = styled.div`
  cursor: pointer;
  color: #aebac1;
  font-size: 25px;

  Button {
    background-color: lightgray;
    color: black;
    border: none;

    :hover {
      background-color: darkgray;
      color: whitesmoke;
    }
  }
`;

const UserChat = styled.div`
  background-color: #111b21;
  color: white;
  height: 570px;
  overflow: scroll;

  img {
    border-radius: 50%;
  }
`;

const Chats = styled.div`
  padding: 9px;
  /* display: flex; */
  /* margin-top: 10px; */
  height: 80px;
  border-bottom: 1px solid gray;
  cursor: pointer;
  width: 100%;

  img {
    border-radius: 50%;
  }

  span {
    margin-left: 15px;
    font-size: 18px;
  }
  p {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    margin-top: -7px;
    font-size: 15px;
  }

  :hover {
    background-color: #0b141a;
  }
`;

const ChatInfo = styled.div`
  display: flex;
  padding: 9px;
  display: flex;
  /* margin-top: 15px; */
  border-bottom: 1px solid gray;
  cursor: pointer;
  color: whitesmoke;

  span {
    margin-left: 15px;
  }

  :hover {
    background-color: #0b141a;
  }
`;
