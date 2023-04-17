import React, { useState, useEffect, useContext } from "react";
import Myimg from "../images/5.png";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utilities/firebase";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import { Chats } from "../style/sidbarChatlist-styled";

export default function SidbarChatList() {
    const [chat, setChat] = useState([]);
    const { currentuser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    const [selectedChat, setSelectedChat] = useState(null);

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

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
        setSelectedChat(u.uid);
    };

    return (
        <>
            {Object.entries(chat)
                ?.sort((a, b) => b[1].date - a[1].date)
                .map((chat) => (
                    <>
                        <Chats
                            className="user"
                            key={chat[0]}
                            onClick={() => handleSelect(chat[1].userInfo)}
                            style={{
                                backgroundColor:
                  selectedChat === chat[1].userInfo.uid ? "#2a3942" : "",
                            }}
                        >
                            <img
                                src={chat[1].userInfo?.photoURL || Myimg}
                                height={40}
                                alt=""
                            />
                            <span>{chat[1].userInfo?.displayName} </span>
                            <p>
                                {chat[1].lastMessage?.text
                                    ? chat[1].lastMessage.text.split(" ").slice(0, 5).join(" ")
                                    : ""}
                            </p>
                        </Chats>
                    </>
                ))}
        </>
    );
}
