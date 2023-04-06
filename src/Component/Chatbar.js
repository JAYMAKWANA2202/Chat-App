import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";
import Myimg from "../images/1.jpg";
import Inputbar from "./Inputbar";
import MessagesContainer from "./MessagesContainer";
import { ChatContext } from "../Context/ChatContext";
import { useState } from "react";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../utilities/firebase";
import BackGroundImg from "../../src/images/4.jpg";
import _ from "lodash";
import Dropdown from "react-bootstrap/Dropdown";
import { updateCurrentUser } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";

export default function Chatbar() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const { CurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  const handleDelete = async (uid) => {
    await deleteDoc(doc(db, "chats", data.chatId));
    // await deleteDoc(doc(db, "userChat", CurrentUser.uid, data.uid));
    // const chatRef = doc(db, "chats", data.chatId);
    // await updateDoc(chatRef, {
    //   date: deleteField(),
    //   id: deleteField(),
    //   senderId: deleteField(),
    //   text: deleteField(),
    //   img: deleteField(),
    // });
  };
  return (
    <Container>
      <Detail>
        <UserLogo>
          <img src={Myimg} height={40} alt="" />
          <span>{_.startCase(data.user?.displayName)}</span>
        </UserLogo>

        <Right>
          <Dropdown className="jay" style={{ backgroundColor: "#202c33" }}>
            <Dropdown.Toggle variant="secondary">
              <FaEllipsisV />
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={handleDelete}>Delete Chat</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
  height: 60px;
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
  .jay {
    .dropdown-toggle::after {
      display: none;
      background-color: #202c33;
      border: none;
      font-size: smaller;
    }

    button {
      background-color: #202c33;
      border: none;
      font-size: smaller;
    }
    button:hover {
      background-color: #353739;
      border-radius: 50%;
    }

    .dropdown-menu {
      background-color: #202c33;
    }
    .dropdown-menu:hover {
      background-color: #0b141a;
    }
  }
`;

const ChatBox = styled.div`
  height: 570px;
  background-color: #0b141a;
  background-image: url(${BackGroundImg});
  overflow-y: scroll;
`;
