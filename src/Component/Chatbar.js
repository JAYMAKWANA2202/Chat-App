import React, { useContext, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Inputbar from "./Inputbar";
import MessagesContainer from "./MessagesContainer";
import { ChatContext } from "../Context/ChatContext";
import { useState } from "react";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../utilities/firebase";
import _ from "lodash";
import Dropdown from "react-bootstrap/Dropdown";
import {
    Container,
    Detail,
    UserLogo,
    Right,
    ChatBox,
} from "../style/chatbar-styled";
import Myimg from "../images/5.png";

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

    const handleDelete = async () => {
        console.log("handleDelete: ", handleDelete);
        await deleteDoc(doc(db, "chats", data.chatId));
        await deleteDoc(doc(db, "userChat", data.userId));
        setMessages([]);
    };

    return (
        <Container>
            <Detail>
                <UserLogo>
                    <img src={data.user?.photoURL || Myimg} height={40} alt="" />
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
