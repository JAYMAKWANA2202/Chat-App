import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../utilities/firebase";
import { useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentuser(user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentuser }}>
      {children}
    </AuthContext.Provider>
  );
};
