import React from "react";
import styled from "styled-components";

export default function Chatbar() {
  return (
    <Container>
      <h1>this is the chatbar</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: #202c33;
  border: 1px solid white;
  color: whitesmoke;
  width: 75%;

  text-align: center;
`;
