import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact us" element={<ContactUs />} />
    </Routes>
  );
}

export default Router;
