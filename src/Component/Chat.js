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
      const unsub = onSnapshot(doc(db, "userChat", currentuser.uid), (doc) => {
        setChat(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentuser.uid && GetChats();
  }, [currentuser]);
  console.log(Object.entries(chat));
  return (
    <>
      {Object.entries(chat)?.map((chat) => (
        <Chats key={chat[0]}>
          <img src={Myimg} height={40} />
          <span>{chat[1].userInfo.displayName} </span>
          <p>{chat[1].userInfo.lastmessage?.text}hjdh</p>
        </Chats>
      ))}
    </>
  );
}

const Chats = styled.div`
  padding: 10px;
  height: 80px;
  border-bottom: 1px solid gray;
  cursor: pointer;
  width: 100%;

  img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  span {
    margin-left: 15px;
    font-size: 18px;
  }
  p {
    display: flex;
    flex-direction: column;
    margin-left: 65px;
    margin-top: -10px;
  }

  :hover {
    background-color: #0b141a;
  }
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
      margin-top: -5px;
      font-size: 10px;
    }
  }
`;
