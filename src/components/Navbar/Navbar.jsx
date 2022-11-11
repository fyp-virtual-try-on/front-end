import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  let activeStyle = {
    color: "blue",
  };
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Virtual TryOn</div>
        <span>toogle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
              end
            >
              {" "}
              <li>Home </li>{" "}
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="virtualTry"
            >
              {" "}
              <li>VirtualTry </li>{" "}
            </NavLink>
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
