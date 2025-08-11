import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const RoutesApp = () => {
  return (
    <Routes>
      {
        <Route path="/" element={<Home />} />
        /*
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */
      }
    </Routes>
  );
};

export default RoutesApp;
