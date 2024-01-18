import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Working from "./Working";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
