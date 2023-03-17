import React from "react";
import styled from "styled-components";

import Form from "react-bootstrap/Form";
import { TiAttachment, TiArrowForward } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";

export default function Inputbar() {
  return (
    <Container>
      <TalkBar>
        <Form1>
          <Share>
            <TiAttachment />
          </Share>
          <Form className="input ">
            <Form.Control type="text" placeholder="Type a Message" />
          </Form>
          <Arrow>
            <TiArrowForward />
          </Arrow>
        </Form1>
      </TalkBar>
    </Container>
  );
}

const Container = styled.div``;
const TalkBar = styled.div`
  background-color: #202c33;
  height: 60px;
  margin-top: 525px;
  color: white;
  z-index: 1;
`;

const Form1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 545px;
  z-index: 1;

  .input {
    margin: 10px auto;
    width: 85%;
  }
`;

const Arrow = styled.div`
  font-size: 23px;
  margin: 0 0px 5px 30px;
  font-size: large;

  cursor: pointer;
`;

const Share = styled.div`
  cursor: pointer;
  margin: 0 30px 5px 0;
`;
