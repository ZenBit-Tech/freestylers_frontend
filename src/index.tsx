import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestPage from "./pages/testPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/testPage/signUp";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);