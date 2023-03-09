import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { BsChatLeftTextFill, BsSearch } from "react-icons/bs";

export default function Sidbar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
          <IconButton>
            <BsChatLeftTextFill />
            <CiMenuKebab />
          </IconButton>
        </IconContainer>
      </Header>

      <Search>
        <BsSearch />
        <SearchInput placeholder="search chat" />
      </Search>

      {/* List of chats */}
    </Container>
  );
}

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
  background-color: #111b21;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: #202c33;
  color: whitesmoke;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  background-color: #202c33;
  color: white;
  z-index: 1;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const IconButton = styled.div`
  cursor: pointer;
  color: #aebac1;
`;

const UserAvatar = styled(FaRegUserCircle)`
  margin: 10px;
  cursor: pointer;
  color: #aebac1;
`;

const IconContainer = styled.div``;
