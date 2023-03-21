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
  padding: 11px;
  background-color: blue;
  /* z-index: 1; */
  /* position: sticky; */
  height: 100%;
`;
