import React from "react";
import Myimg1 from "../images/5.png";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../utilities/firebase";
import SidbarChatList from "./SidbarChatList";
import {
    collection,
    query,
    where,
    getDocs,
    getDoc,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../src/Context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import { FaEllipsisV } from "react-icons/fa";
import ProfilePhoto from "./ProfilePhoto";
import {
    Container,
    Search,
    Header,
    IconButton,
    UserChat,
    Chats,
    ButtonContainer,
    Image,
} from "../style/sidbar-styled";

export default function Sidbar() {
    const { currentuser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(null);
    const Navigate = useNavigate();
    const [click, setClick] = useState(true);

    const handelLogout = () => {
        console.log("handelLogout: ", handelLogout);
        signOut(auth);
        Navigate("/");
    };

    const handelSearch = async () => {
        const q = query(
            collection(db, "user"),
            where("displayName", "==", username)
        );
        try {
            const querySnapshot = await getDocs(q);
            console.log("querySnapshot: ", querySnapshot);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
                console.log("setUser: ", setUser);
            });
        } catch (err) {
            setErr("user not found!");
        }
    };

    const handelKey = (e) => {
        e.code === "Enter" && handelSearch();
    };

    const handleSelect = async () => {
        if (currentuser.uid !== user.uid) {
            //check whether the group(chats in firestore) exists, if not create
            const combinedId =
        currentuser.uid > user.uid
            ? currentuser.uid + user.uid
            : user.uid + currentuser.uid;
            try {
                const res = await getDoc(doc(db, "chats", combinedId));
                if (!res.exists()) {
                    //create a chat in chats collection
                    await setDoc(doc(db, "chats", combinedId), { messages: [] });
                    //create user chats
                    await updateDoc(doc(db, "userChat", currentuser.uid), {
                        [combinedId + ".userInfo"]: {
                            uid: user.uid,
                            displayName: user.displayName,
                            email: user.email,
                            photoURL: user.photoURL,
                        },
                        [combinedId + ".date"]: serverTimestamp(),
                    });
                    await updateDoc(doc(db, "userChat", user.uid), {
                        [combinedId + ".userInfo"]: {
                            uid: currentuser.uid,
                            displayName: currentuser.displayName,
                            email: currentuser.email,
                            photoURL: currentuser.photoURL,
                        },
                        [combinedId + ".date"]: serverTimestamp(),
                    });
                }
                setUser(null);
                setUsername("");
            } catch (err) {}
        }

        setUser(null);
        setUsername("");
    };

    const handleProfile = () => {
        setClick(false);
    };

    return (
        <Container>
            <Header>
                <Image>
                    <img src={currentuser.photoURL || Myimg1} height={40} alt="" />
                    <span>{currentuser.displayName}</span>
                </Image>
                <IconButton>
                    <Dropdown className="jay" style={{ backgroundColor: "#202c33" }}>
                        <Dropdown.Toggle variant="secondary">
                            <FaEllipsisV />
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item onClick={handleProfile}>
                Upadte Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handelLogout}> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </IconButton>
            </Header>

            {click ? (
                <>
                    <Search>
                        <input
                            placeholder="Search or start new chat"
                            onKeyDown={handelKey}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </Search>

                    <UserChat>
                        {user && (
                            <>
                                <Chats
                                    className="userChat"
                                    style={{ borderBottom: "1px solid lightgray" }}
                                    onClick={handleSelect}
                                >
                                    <Image>
                                        <img src={user?.photoURL} height={40} width={40} alt="" />
                                        <span>{user?.displayName}</span>
                                    </Image>
                                    <ButtonContainer>
                                        <button onClick={handleSelect}>Add</button>
                                    </ButtonContainer>
                                </Chats>
                            </>
                        )}
                        {err && <span>User not found!</span>}
                        <SidbarChatList />
                    </UserChat>
                </>
            ) : (
                <ProfilePhoto />
            )}
        </Container>
    );
}
