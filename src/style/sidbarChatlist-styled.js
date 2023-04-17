import styled from "styled-components";

export const Chats = styled.div`
  padding: 10px 12px;
  height: 80px;
  border-bottom: 1px solid #222d34;

  cursor: pointer;
  width: 100%;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  span {
    margin-left: 15px;
    font-size: 18px;
  }
  p {
    display: flex;
    flex-direction: column;
    margin-left: 65px;
    margin-top: -10px;
    font-weight: 300;
  }

  :hover {
    background-color: #0b141a;
  }

  @media (max-width: 768px) {
    height: 60px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      margin-left: 10px;
      font-size: 10px;
    }

    p {
      margin-left: 45px;
      margin-top: -3px;
      font-size: 9px;
    }
  }
`;
