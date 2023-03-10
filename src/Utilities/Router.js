import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Component/Navbar/Header";
import Chat from "../pages/Chat";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default Router;
