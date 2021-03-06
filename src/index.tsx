import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestPage from "./pages/testPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);