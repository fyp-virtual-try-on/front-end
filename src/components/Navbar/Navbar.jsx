import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Virtual TryOn</div>
        <span>toogle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
          <Link to="/">
              {" "}
              <li>Home </li>{" "}
            </Link>
            <Link to="virtualTry">
              {" "}
              <li>VirtualTry </li>{" "}
            </Link>
            <li>Portfolio</li>
            <li>Testimonals</li>
          </ul>
        </div>
        <button className="button">Signin</button>
      </div>
    </div>
  );
}

export default Navbar;
