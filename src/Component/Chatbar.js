import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { TiAttachment, TiArrowForward } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";
import Myimg from "../images/1.jpg";
import Inputbar from "./Inputbar";
import Messages from "./Messages";

export default function Chatbar() {
  return (
    <Container>
      <Detail>
        <UserLogo>
          <img src={Myimg} height={30} />
          <span>Jay makwana</span>
        </UserLogo>
        <Right>
          <CiMenuKebab />
        </Right>
      </Detail>

      <ChatBox>{/* <Messages /> */}</ChatBox>

      <Inputbar />
    </Container>
  );
}

const Container = styled.div`
  background-color: #0b141a;
  color: white;
  width: 75%;
  text-align: center;
  height: auto;
`;

const Detail = styled.div`
  height: 80px;
  background-color: #202c33;
  display: flex;
  align-items: center;
  padding: 17px;
  position: sticky;
  top: 0px;
  z-index: 1;
  justify-content: space-between;
  font-size: 27px;
`;

const UserLogo = styled.div`
  font-size: 30px;
  cursor: pointer;

  span {
    font-size: 20px;
    margin-left: 5px;
  }

  img {
    border-radius: 50%;
  }
`;

const Right = styled.div`
  cursor: pointer;
`;

const ChatBox = styled.div`
  color: white;
`;
