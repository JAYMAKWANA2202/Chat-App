import React from "react";
import MainMessageComponent from "./MainMessageComponent";
import styled from "styled-components";

export default function MessagesContainer({ messages }) {
    return (
        <Container>
            <MainMessageComponent message={messages} />
        </Container>
    );
}

const Container = styled.div`
  padding: 10px;
  color: black;
`;
