import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import VirtualTry from "./pages/VirtualTry/VirtualTry";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="VirtualTry" element={<VirtualTry />} />
      </Routes>
    </div>
  );
}

export default App;
