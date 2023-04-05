import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CiMenuKebab } from "react-icons/ci";
import Myimg from "../images/1.jpg";
import Inputbar from "./Inputbar";
import MessagesContainer from "./MessagesContainer";
import { ChatContext } from "../Context/ChatContext";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utilities/firebase";
import BackGroundImg from "../../src/images/4.jpg";

export default function Chatbar() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <Container>
      <Detail>
        <UserLogo>
          <img src={Myimg} height={40} alt="" />
          <span>{data.user?.displayName}</span>
        </UserLogo>
        <Right>
          <CiMenuKebab />
        </Right>
      </Detail>

      <ChatBox>
        {messages &&
          messages?.map((m, i) => (
            <React.Fragment key={i}>
              <MessagesContainer messages={m} key={m?.id} />
            </React.Fragment>
          ))}
      </ChatBox>

      <Inputbar />
    </Container>
  );
}

const Container = styled.div`
  background-color: #0b141a;
  color: white;
  width: 75%;
`;

const Detail = styled.div`
  height: 80px;
  background-color: #202c33;
  display: flex;
  align-items: center;
  padding: 17px;
  position: sticky;
  top: 0px;
  z-index: 1;
  justify-content: space-between;
  font-size: 27px;
`;

const UserLogo = styled.div`
  font-size: 30px;
  cursor: pointer;

  span {
    font-size: 20px;
    margin-left: 5px;
  }

  img {
    border-radius: 50%;
  }
`;

const Right = styled.div`
  cursor: pointer;
`;

const ChatBox = styled.div`
  height: 547px;
  background-color: #0b141a;
  background-image: url(${BackGroundImg});
  overflow-y: scroll;
`;
