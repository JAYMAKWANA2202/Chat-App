import { onAuthStateChanged } from "firebase/auth";
import { createContext, useCallback, useContext, useReducer } from "react";
import { auth } from "../utilities/firebase";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentuser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentuser.uid > action.payload.uid
              ? currentuser.uid + action.payload.uid
              : action.payload.uid + currentuser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state }}>
      {children}
    </ChatContext.Provider>
  );
};
