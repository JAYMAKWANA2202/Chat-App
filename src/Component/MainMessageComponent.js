import React, { useContext, useEffect } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import Myimg from "../images/5.png";
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

  const isOwner = message?.senderId === currentuser.uid;

  return (
    <>
      <Messagess ref={ref} className={`Messagess ${isOwner ? "owner" : ""}`}>
        <MessageInfo>
          <img
            src={
              isOwner
                ? currentuser.PhotoURL || Myimg
                : data.user.uid && (currentuser.PhotoURL || Myimg)
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
      border-radius: 15px;
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
  align-items: ${(props) => (props.isOwner ? "flex-end" : "flex-start")};

  p {
    background-color: ${(props) => (props.isOwner ? "#005c4b" : "#202c33")};
    color: whitesmoke;
    border-radius: ${(props) =>
      props.isOwner ? "10px 0 10px 10px" : "0 10px 10px 10px"};
    gap: 10px;
    padding: 10px 20px;
    max-width: max-content;
  }

  img {
    max-width: ${(props) => (props.isOwner ? "30%" : "30%")};
    max-height: ${(props) => (props.isOwner ? "60%" : "60%")};
    border-radius: ${(props) =>
      props.isOwner ? "15px 0 15px 15px" : "0 15px 15px 15px"};
  }
`;
