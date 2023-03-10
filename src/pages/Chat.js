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
`;
