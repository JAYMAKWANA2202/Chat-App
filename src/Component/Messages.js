import React from "react";
import Message from "./Message";
import styled from "styled-components";

export default function Messages() {
  return (
    <Container>
      <Message />
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  color: black;
`;
