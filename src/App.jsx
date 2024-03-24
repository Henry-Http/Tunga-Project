import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <div className="App"></div>
    </BrowserRouter>
  );
};

export default App;
