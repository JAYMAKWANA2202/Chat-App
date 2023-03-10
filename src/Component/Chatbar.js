import React from "react";
import styled from "styled-components";

export default function Chatbar() {
  return (
    <Container>
      <h1>this is the chatbar</h1>
      <ChatBox>this is the chats</ChatBox>
      <TalkBar>this is talkbar</TalkBar>
    </Container>
  );
}

const Container = styled.div`
  background-color: #202c33;
  color: white;
  width: 75%;
  text-align: center;

  h1 {
    height: 80px;
    background-color: #111b21;
  }
`;

const ChatBox = styled.div`
  color: white;
`;

const TalkBar = styled.div`
  background-color: #111b21;
  height: 60px;
  margin-top: 517px;
  color: white;
`;
