import React, { useState, useEffect, useContext } from "react";
import Myimg from "../images/1.jpg";
import styled from "styled-components";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utilities/firebase";
import { AuthContext } from "../Context/AuthContext";

export default function Chat() {
  const [chat, setChat] = useState([]);
  const { currentuser } = useContext(AuthContext);

  useEffect(() => {
    const GetChats = () => {
      const unsub = onSnapshot(doc(db, "chats", currentuser.uid), (doc) => {
        setChat();
      });
      return () => {
        unsub();
      };
    };
    currentuser.uid && GetChats();
  }, [currentuser]);
  return (
    <>
      <ChatInfo>
        <Chats>
          <img src={Myimg} height={40} />
          <span>sdc</span>
        </Chats>
      </ChatInfo>
    </>
  );
}

const ChatInfo = styled.div``;
const Chats = styled.div`
  padding: 9px;
  display: flex;
  border-bottom: 1px solid gray;
  cursor: pointer;
  width: 100%;

  img {
    border-radius: 50%;
  }

  span {
    margin-left: 15px;
  }

  :hover {
    background-color: #0b141a;
  }
`;
