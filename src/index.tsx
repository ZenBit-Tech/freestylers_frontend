import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import TestPage from "./pages/testPage";
import RegisterStepTwoPage from "./components/register_step2";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/register" element={<RegisterStepTwoPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
