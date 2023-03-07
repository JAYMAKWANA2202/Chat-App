import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Router;
