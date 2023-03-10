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

        <IconButton>
          <BsChatLeftTextFill style={{ marginRight: "10px" }} />
          <CiMenuKebab style={{ marginBottom: "5px" }} />
        </IconButton>
      </Header>

      <Search>
        <SearchButton>
          <BsSearch color="white" />
        </SearchButton>
        <SearchInput placeholder="search chat" />
      </Search>

      <UserChat>hsdshhcschcw</UserChat>

      {/* List of chats */}
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid white; */
  width: 25%;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 17px;

  background-color: #111b21;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: #202c33;
  color: whitesmoke;
  border-radius: 5px;
  margin-left: 8px;
  align-items: center;
`;

const SearchButton = styled.div`
  cursor: pointer;
  margin-left: -5px;
  margin-bottom: 4px;
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
`;

const IconButton = styled.div`
  cursor: pointer;
  color: #aebac1;
  font-size: 25px;
`;

const UserAvatar = styled(FaRegUserCircle)`
  margin: 10px;
  cursor: pointer;
  color: #aebac1;
  font-size: 31px;
`;

const UserChat = styled.div`
  background-color: #111b21;
  color: white;
  height: 547px;
`;
