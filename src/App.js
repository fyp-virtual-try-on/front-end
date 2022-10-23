import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import VirtualTryOn from "./pages/VirtualTryOn";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="VirtualTryOn" element={<VirtualTryOn />} />
      </Routes>
    </div>
  );
}

export default App;
