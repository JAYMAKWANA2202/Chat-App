import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
import Myimg from "../images/1.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../utilities/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Sidbar() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

  const Navigate = useNavigate();

  const handelLogout = () => {
    console.log("handelLogout: ", handelLogout);
    signOut(auth);
    Navigate("/");
  };

  const handelSearch = async () => {
    const q = query(collection(db, "user"), where("fullname", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(toast.error);
    }
  };

  const handelKey = (e) => {
    e.code === "Enter" && handelSearch();
  };
  return (
    <Container>
      <Header>
        <img src={Myimg} height={30} />
        <IconButton>
          <Button onClick={handelLogout}>Logout</Button>
        </IconButton>
      </Header>

      <Search>
        <SearchInput
          placeholder="search chat"
          onKeyDown={handelKey}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* <ChatInfo>
          {user && (
            <Chats>
              <img src={Myimg} height={40} />
              <span>{user.fullname}</span>
            </Chats>
          )}
        </ChatInfo> */}
      </Search>

      <UserChat>
        {user && (
          <Chats>
            <img src={Myimg} height={40} />
            <span>{user.fullname}</span>
          </Chats>
        )}
        <Chats>
          <img src={Myimg} height={40} />
          <span>raj nariya </span>
        </Chats>
        <Chats>
          <img src={Myimg} height={40} />
          <span>kunj kaneriya</span>
        </Chats>
        <Chats>
          <img src={Myimg} height={40} />
          <span>het makwana</span>
        </Chats>
      </UserChat>
    </Container>
  );
}

const Container = styled.div`
  border-right: 1px solid grey;
  width: 25%;
`;
const Search = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px;
  z-index: 2;
  background-color: #111b21;
  position: sticky;
  overflow: hidden;
  top: 80px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: #202c33;
  color: whitesmoke;
  border-radius: 5px;
  margin-left: 8px;
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

  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

const IconButton = styled.div`
  cursor: pointer;
  color: #aebac1;
  font-size: 25px;

  Button {
    background-color: lightgray;
    color: black;
    border: none;

    :hover {
      background-color: darkgray;
      color: whitesmoke;
    }
  }
`;

const UserChat = styled.div`
  background-color: #111b21;
  color: white;
  height: 547px;
  overflow: scroll;
  /* display: flex; */

  img {
    border-radius: 50%;
  }
`;

const Chats = styled.div`
  padding: 9px;
  display: flex;
  /* margin-top: 15px; */
  /* border-bottom: 1px solid gray; */
  cursor: pointer;
  width: 100%;

  img {
    border-radius: 50%;
  }

  span {
    margin-left: 15px;
  }

  :hover {
    background-color: #0b141a;
  }
`;

const ChatInfo = styled.div`
  display: flex;
  padding: 9px;
  display: flex;
  /* margin-top: 15px; */
  border-bottom: 1px solid gray;
  cursor: pointer;
  color: whitesmoke;

  span {
    margin-left: 15px;
  }

  :hover {
    background-color: #0b141a;
  }
`;
