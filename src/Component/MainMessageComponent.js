import React, { useContext, useEffect } from "react";
import { format } from "date-fns";
import Myimg from "../images/5.png";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import { useRef } from "react";
import {
    MessageContent,
    MessageInfo,
    Messagess,
} from "../style/MainMessageComponent-styled";

export default function MainMessageComponent({ message }) {
    const { currentuser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const isOwner = message?.senderId === currentuser.uid;

    return (
        <>
            <Messagess ref={ref} className={`Messagess ${isOwner ? "owner" : ""}`}>
                <MessageInfo>
                    <img
                        src={
                            isOwner
                                ? currentuser.photoURL || Myimg
                                : data.user.uid && (data.user.photoURL || Myimg)
                        }
                        alt=""
                        height={30}
                    />
                    <span style={{ marginTop: "10px", color: "white" }}>
                        {format(new Date(message.date.toMillis()), "h:mm a")}
                    </span>
                </MessageInfo>

                <MessageContent isOwner={isOwner}>
                    {message?.img && <img src={message?.img} alt="" />}
                    <p>{message?.text}</p>
                </MessageContent>
            </Messagess>
        </>
    );
}
