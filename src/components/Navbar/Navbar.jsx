import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import About from "../../pages/About/About";
import logo from "../../images/logo.png"
function Navbar() {
  let activeStyle = {
    color: "black",
    textDecoration: "underLine",
  };
  return (
    <div className="n-wrapper">
      <div className="n-left">
      <img src={logo}alt="" />
        {/* <div className="n-name">TryOn couture</div> */}
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul className="nav-ul" style={{ listStyleType: "none" }}>
            <NavLink className="navlink"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
              end
            >
              {" "}
              <li className="nav-li">Home </li>{" "}
            </NavLink >
            <NavLink className="navlink" 
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="virtualTry"
            >
              {" "}
              <li className="nav-li">TryOn</li>{" "}
            </NavLink>
           
            <NavLink to="/About" className="navlink" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {" "}
              <li className="nav-li">AboutUs</li>
            </NavLink>
          </ul>
        </div>
        <NavLink to="/SignUp" style={{ paddingRight: "26px", paddingTop:"16px" }}>
          <button className="button navLink">SignUp</button>
        </NavLink>
        <NavLink to="/SignIn" style={{ paddingRight: "26px", paddingTop:"16px" }}>
          <button className="button navLink">Signin</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
