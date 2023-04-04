import React, { useContext, useEffect } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import Myimg from "../images/1.jpg";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import { useRef } from "react";

export default function MainMessageComponent({ message }) {
  const { currentuser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Messagess
      ref={ref}
      className={`Messagess ${
        message?.senderId === currentuser.uid && "owner"
      }`}
    >
      <MessageInfo>
        <img
          src={
            message?.senderId === currentuser.uid
              ? Myimg
              : data.user.uid && Myimg
          }
          alt=""
          height={30}
        />
        <span style={{ marginTop: "10px" }}>
          {format(new Date(message.date.toMillis()), "h:mm a")}
        </span>
      </MessageInfo>
      <MessageContent>
        <p>{message?.text}</p>
        {message?.img && <img src={message?.img} alt="" />}
      </MessageContent>
    </Messagess>
  );
}

const Messagess = styled.div`
  display: flex;

  &.owner {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 10px;

    p {
      background-color: #005c4b;
      color: whitesmoke;
      border-radius: 10px 0 10px 10px;
      gap: 10px;
      padding: 10px 20px;
      max-width: max-content;
    }

    img {
      border-radius: 50%;
    }
  }
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  p {
    background-color: #202c33;
    color: whitesmoke;
    border-radius: 0px 10px 10px 10px;
    padding: 10px 20px;
    max-width: max-content;
  }

  img {
    max-width: 40%;
    border-radius: 15px;
  }
`;
