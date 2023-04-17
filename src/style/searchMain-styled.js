import styled from "styled-components";

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
`;

export const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: #202c33;
  color: whitesmoke;
  border-radius: 5px;

  ::placeholder {
    padding: 9px 12px;
    color: #8696a0;
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
