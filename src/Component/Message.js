import React from "react";
import styled from "styled-components";
import Myimg from "../images/1.jpg";
export default function Message() {
  return (
    <Container className="owner">
      <MessageInfo>
        <img src={Myimg} height={30} />
        <span>just now</span>
      </MessageInfo>
      <MessageContent>
        <p>hello</p>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </MessageContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  &.owner {
    flex-direction: row-reverse;

    p {
      background-color: aqua;
      color: black;
      border-radius: 10px 0 10px 10px;
      gap: 10px;
      padding: 10px 20px;
      max-width: max-content;
    }

    img {
      border-radius: 15px;
    }
  }
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  p {
    background-color: black;
    color: whitesmoke;
    border-radius: 0px 10px 10px 10px;
    padding: 10px 20px;
    max-width: max-content;
  }

  img {
    max-width: 40%;
    border-radius: 15px;
  }
`;
