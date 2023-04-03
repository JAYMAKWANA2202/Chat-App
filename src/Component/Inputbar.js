import React, { useContext } from "react";
import styled from "styled-components";
import { TiAttachment } from "react-icons/ti";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../utilities/firebase";

export default function Inputbar() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentuser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id:
        })
      });
    }
  };

  return (
    <Container>
      <input
        type="text"
        className="input"
        placeholder="Type Something....."
        onChange={(e) => setText(e.target.value)}
      />
      <Share>
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <TiAttachment
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          />
        </label>

        <button onClick={handleSend}>Send</button>
      </Share>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  padding: 10px;
  color: black;
  background-color: #202c33;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    color: whitesmoke;
    background-color: #182229;
    border-radius: 5px;
  }
`;

const Share = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    border-radius: 5px;
    /* background-color: gr; */
    border: none;
    outline: none;
  }
`;
