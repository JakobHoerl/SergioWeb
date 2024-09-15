import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"; // Adjust path as necessary
import Request from "./Pages/Request"; // Adjust path as necessary
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/preis-anfrage" element={<Request />} />
      </Routes>
    </>
  );
};

export default App;
