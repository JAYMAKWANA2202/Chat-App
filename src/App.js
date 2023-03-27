import React from "react";
import { AuthContext } from "./Context/AuthContext";
import "./style/App.css";
import Router from "./utilities/Router";
import { useContext } from "react";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
