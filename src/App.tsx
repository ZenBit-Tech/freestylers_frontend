import React from "react";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/index";
import TestPage from "../src/pages/testPage/index";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div>
      {/* <Link to="/test">Test Page</Link> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default App;
