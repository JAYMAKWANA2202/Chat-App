import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Lower from "./Lower";
import { Whatsapp } from "react-bootstrap-icons";

const Headerpart = styled.div`
  background-color: #00a884;
  height: 150px;
`;

const Navbar_Brand = styled.div`
  margin: 25px 0 0 0;
  color: white;
  font-size: 35px;
`;

const New = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Logo = styled.span`
  margin: 30px 10px 0 0;
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
                  <Whatsapp size={40} color="white" />
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
