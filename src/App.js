import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import VirtualTry from "./pages/VirtualTry/VirtualTry";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";

import Checkout from "./pages/CheckOut/Checkout";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOut" element={<Checkout />} />

        <Route path="/" element={<Home />} />
        <Route path="/VirtualTry" element={<VirtualTry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
