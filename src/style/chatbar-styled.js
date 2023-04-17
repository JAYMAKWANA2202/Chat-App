import styled from "styled-components";
import BackGroundImg from "../../src/images/4.jpg";

export const Container = styled.div`
  background-color: #0b141a;
  color: white;
  width: 75%;
`;

export const Detail = styled.div`
  height: 60px;
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

export const UserLogo = styled.div`
  font-size: 30px;
  cursor: pointer;

  span {
    font-size: 20px;
    margin-left: 5px;
  }

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;

export const Right = styled.div`
  cursor: pointer;
  .jay {
    .dropdown-toggle::after {
      display: none;
      background-color: #202c33;
      border: none;
      font-size: smaller;
    }

    button {
      background-color: #202c33;
      border: none;
      font-size: smaller;
    }
    button:hover {
      background-color: #353739;
      border-radius: 50%;
    }

    .dropdown-menu {
      background-color: #202c33;
    }
    .dropdown-menu:hover {
      background-color: #0b141a;
    }
  }
`;

export const ChatBox = styled.div`
  height: 592px;
  background-color: #0b141a;
  background-image: url(${BackGroundImg});
  overflow-y: scroll;
`;
