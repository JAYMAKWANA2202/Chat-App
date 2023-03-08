import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Lower from "./Lower";
import { Whatsapp } from "react-bootstrap-icons";

const Headerpart = styled.div`
  background-color: #00a884;
  height: 223px;
`;

const Navbar_Brand = styled.div`
  margin: 12px 0 0 0;
  color: white;
  font-size: 25px;
`;

const New = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  min-height: 39px;
  margin: 0 54px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`;

const Logo = styled.span`
  margin: 18px 8px 0 0;
  margin-left: 10%;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

export default function Header() {
  return (
    <>
      <Headerpart>
        <Navbar>
          <Container>
            <New>
              <Logo>
                <span>
                  <Whatsapp size={39} color="white" />
                </span>
              </Logo>
              <Navbar_Brand>Chat-App</Navbar_Brand>
            </New>
          </Container>
        </Navbar>
      </Headerpart>
      <Lower />
    </>
  );
}
