import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { db } from "../utilities/firebase";
import { AuthContext } from "../Context/AuthContext";

import { useNavigate } from "react-router-dom";
import SidbarChatList from "./SidbarChatList";

export default function SearchMain() {
  const { currentuser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);
  const [click, setClick] = useState(true);

  const Navigate = useNavigate();

  const handelSearch = async () => {
    if (currentuser !== user) {
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
      setUser(null);
      setUsername("");
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <>
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
            <img src={user?.photoURL} height={40} alt="" />
            <span>{user?.displayName}</span>
          </Chats>
        )}
        {err && <span>User not found!</span>}
        <SidbarChatList />
      </UserChat>
    </>
  );
}

const Search = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  z-index: 2;
  background-color: #111b21;
  /* position: sticky; */
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

const UserChat = styled.div`
  background-color: #111b21;
  color: white;
  height: 592px;
  overflow: scroll;

  img {
    border-radius: 50%;
  }
`;

const Chats = styled.div`
  padding: 9px;

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
