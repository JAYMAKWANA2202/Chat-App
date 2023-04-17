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
import { db } from "../utilities/firebase";
import { AuthContext } from "../Context/AuthContext";
import SidbarChatList from "./SidbarChatList";
import {
  Chats,
  Search,
  SearchInput,
  UserChat,
} from "../style/searchMain-styled";

export default function SearchMain() {
  const { currentuser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

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
