import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../utilities/firebase";
import { useState, useEffect } from "react";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentuser(user);
      console.log("user: ", user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <ChatContext.Provider value={{ currentuser }}>
      {children}
    </ChatContext.Provider>
  );
};
