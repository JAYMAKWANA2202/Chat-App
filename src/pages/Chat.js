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
  background-color: #111b21;
  z-index: 1;
  position: sticky;
  height: 100vh;
`;
