import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const Headerpart = styled.div`
  background-color: #00a884;
`;

const Navbar_Brand = styled.p`
  color: white;
  font-size: 39px;
  height: 100%;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  min-height: 39px;
`;

export default function Header() {
  return (
    <>
      <Headerpart>
        <Navbar>
          <Container>
            <Navbar_Brand>
              <span>
                <img src="" alt="" />
              </span>
              Chat-App
            </Navbar_Brand>
          </Container>
        </Navbar>
      </Headerpart>
      <br />
    </>
  );
}
