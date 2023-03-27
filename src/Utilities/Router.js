import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Component/Navbar/Header";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Error from "../pages/Error";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Router() {
  const { currentuser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (currentuser) {
      return <Navigate to="/" />;
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
