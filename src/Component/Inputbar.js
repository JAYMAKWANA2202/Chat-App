import React from "react";
import styled from "styled-components";

import Form from "react-bootstrap/Form";
import { TiAttachment, TiArrowForward } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";

export default function Inputbar() {
  return (
    <Container>
      <input type="text" className="input" placeholder="Type Something....." />
      <Share>
        <TiAttachment style={{ fontSize: "30px", color: "white" }} />

        <button>Send</button>
      </Share>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  padding: 10px;
  color: black;
  background-color: #202c33;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    color: whitesmoke;
    background-color: #182229;
    border-radius: 5px;
  }
`;

const Share = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    border-radius: 5px;
    /* background-color: gr; */
    border: none;
    outline: none;
  }
`;
