import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/index";
import TestPage from "pages/testPage/index";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default App;
