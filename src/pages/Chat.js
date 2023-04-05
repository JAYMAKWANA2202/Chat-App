import React from "react";
import styled from "styled-components";
import Sidbar from "../Component/Sidbar";
import Chatbar from "../Component/Chatbar";

export default function Chat() {
  return (
    <Container>
      <Sidbar />
      <Chatbar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 15px;
  /* background-color: #202c33; */
  background-color: pink;
  height: 100%;
`;
