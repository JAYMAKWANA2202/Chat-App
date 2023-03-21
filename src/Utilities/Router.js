import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Component/Navbar/Header";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Error from "../pages/Error";

function Router() {
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
