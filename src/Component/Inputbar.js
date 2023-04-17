import React, { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { TiAttachment } from "react-icons/ti";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../utilities/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { Container, Share } from "../style/input.styled";

export default function Inputbar() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentuser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (text.trim()) {
      const timestamp = Timestamp.now();

      if (img) {
        const storageRef = ref(storage, `images/${uuid()}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle progress here if desired
          },
          (error) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateDoc(doc(db, "chats", data.chatId), {
                  messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentuser.uid,
                    date: timestamp,
                    img: downloadURL,
                  }),
                });
              }
            );
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentuser.uid,
            date: timestamp,
          }),
        });
      }

      await updateDoc(doc(db, "userChat", currentuser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
          time: formatDistanceToNow(new Date(timestamp.toMillis()), {
            addSuffix: true,
          }),
        },
        [data.chatId + ".data"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChat", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
          time: formatDistanceToNow(new Date(timestamp.toMillis()), {
            addSuffix: true,
          }),
        },
        [data.chatId + ".data"]: serverTimestamp(),
      });

      setText("");
      setImg(null);
    } else {
      // cursor postion  start case
      setText("");
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };

  return (
    <Container>
      <input
        type="text"
        className="input"
        placeholder="Type a message"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKey}
        onClick={handleSend}
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
            style={{ fontSize: "30px", color: "#8696a0", cursor: "pointer" }}
          />
        </label>
      </Share>
    </Container>
  );
}
