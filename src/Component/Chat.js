import React from "react";
import Myimg from "../images/1.jpg";
import styled from "styled-components";

export default function Chat() {
  return (
    <>
      <Chats>
        <img src={Myimg} height={40} />
        <span>jay makwana</span>
      </Chats>
      <Chats>
        <img src={Myimg} height={40} />
        <span>jay makwana</span>
      </Chats>
      <Chats>
        <img src={Myimg} height={40} />
        <span>jay makwana</span>
      </Chats>
    </>
  );
}

const Chats = styled.div`
  padding: 9px;
  display: flex;
  /* margin-top: 15px; */
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
