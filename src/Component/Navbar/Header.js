import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Lower from "./Lower";

const Headerpart = styled.div`
  background-color: #00a884;
  height: 150px;
`;

const Navbar_Brand = styled.p`
  color: white;
  font-size: 37px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
`;

export default function Header() {
  return (
    <>
      <Headerpart>
        <Navbar>
          <Container>
            <Navbar_Brand>Chat-App</Navbar_Brand>
          </Container>
        </Navbar>
      </Headerpart>
      <Lower />
    </>
  );
}
