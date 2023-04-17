import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid grey;
  width: 30%;

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
    button {
      font-size: 9px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  z-index: 2;
  background-color: #111b21;
  /* position: sticky; */
  overflow: hidden;
  top: 60px;
  height: 60px;

  input {
    outline-width: 0;
    border: none;
    flex: 1;
    background-color: #202c33;
    color: whitesmoke;
    border-radius: 5px;
    padding-left: 10px;

    ::placeholder {
      color: #8696a0;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  background-color: #202c33;
  color: white;
  z-index: 1;
  align-items: center;
  padding: 15px;
  height: 60px;

  img {
    border-radius: 50%;
    cursor: pointer;
    width: 10%;
  }
`;

export const IconButton = styled.div`
  cursor: pointer;
  color: #aebac1;
  font-size: 25px;

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
      z-index: 100;
    }
    .dropdown-menu:hover {
      background-color: #0b141a;
      z-index: 100;
    }
  }
`;

export const UserChat = styled.div`
  background-color: #111b21;
  color: white;
  height: 592px;
  overflow: scroll;

  img {
    border-radius: 50%;
  }
`;

export const Chats = styled.div`
  padding: 9px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid gray;
  cursor: pointer;
  width: 100%;

  img {
    border-radius: 50%;
  }

  span {
    margin-left: 15px;
    font-size: 18px;
  }
  p {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    margin-top: -7px;
    font-size: 15px;
  }

  :hover {
    background-color: #0b141a;
  }
`;
export const ButtonContainer = styled.div`
  button {
    border-radius: 15px;
    background-color: #202c33;
    color: #fff;
    border: none;
    margin-top: 15px;
  }
`;
export const Image = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  span {
    margin-left: 10px;
  }
`;
