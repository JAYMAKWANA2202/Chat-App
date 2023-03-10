import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route element={"/chat"} />
    </Routes>
  );
}

export default Router;
