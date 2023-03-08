import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Gear, ThreeDotsVertical } from "react-bootstrap-icons";

const Containers = styled.div`
  background-color: #111b21;
  color: white;
  font-size: 25px;
  justify-content: center;
  height: 490px;
`;

const Center = styled.h1`
  text-align: center;
  color: grey;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin: 0 153px;
  position: relative;
  top: -129px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const FormContainer = styled(Form)`
  display: flex;
  justify-content: space-between;
  height: 444px;
  width: 100%;
  margin-top: 15px;
  padding: 34px 34px 34px;
`;

const Left = styled.div`
  font-size: 20px;
  width: 50%;
  list-style: none;

  h3 {
    font-weight: 300;
    line-height: normal;
    color: #41525d;
    margin-right: 30px;
  }
`;

const List = styled.ul`
  margin-top: 45px;
  padding: 0;
  list-style: none;

  li {
    padding: 0 0 0 0;
    font-size: 18px;
    text-align: left;
    margin-top: 18px;
  }
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
            <FormContainer>
              <Left>
                <h3>Use WhatsApp on your computer</h3>
                <List>
                  <ol>
                    <li>Open WhatsApp on your phone </li>
                    <li>
                      Tap <strong>Menu</strong> <ThreeDotsVertical />
                      or <strong>Setting </strong> <Gear />
                      and <strong>Linked Devices</strong>
                    </li>
                    <li>
                      Tap on <strong>Link a Device</strong>
                    </li>
                    <li>Point your phone to this screen to capture the code</li>
                  </ol>
                </List>
              </Left>
              <Right></Right>
            </FormContainer>
          </Center>
        </Container>
      </Containers>
    </>
  );
}
