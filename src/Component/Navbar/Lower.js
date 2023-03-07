import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

const Containers = styled.div`
  background-color: #111b21;
  color: white;
  font-size: 25px;
  justify-content: center;
  height: 600px;
`;

const Center = styled.h1`
  text-align: center;
  color: grey;
  background-color: #fff;
  padding: 15px;
`;

const FormContainer = styled(Form)`
  display: flex;
  justify-content: space-between;
  height: 400px;
  width: 100%;
  margin-top: 15px;
`;

const Left = styled.div`
  font-size: 20px;
  width: 50%;
  list-style: none;
`;

const Right = styled.div`
  font-size: 20px;
  width: 50%;
`;

export default function Lower() {
  return (
    <>
      <Containers>
        <Container>
          <Center>
            <h1>Welcome to the chat-app </h1>
            <FormContainer>
              <Left>
                <h3>this is the chat app</h3>
                <ol>
                  <li>This is the app to use for chating </li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ol>
              </Left>
              <Right>
                <h3>hi</h3>
                <ol>
                  <li>This is the app to use for chating </li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ol>
              </Right>
            </FormContainer>
          </Center>
        </Container>
      </Containers>
    </>
  );
}
