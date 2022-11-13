import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SignIn  from "../../pages/SignIn/SignIn"
import SignUp  from "../../pages/SignUp/SignUp"
import About  from "../../pages/About/About"

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
            <NavLink to="/Cart"> <li>Cart</li></NavLink>
            <NavLink to="/About"> <li>AboutUs</li></NavLink>
          </ul>
          
        </div>
        <NavLink to="/SignUp"  style={{paddingRight:"26px"}}><button className="button navLink">SignUp</button></NavLink>
        <NavLink to="/SignIn"><button className="button navLink">Signin</button></NavLink>
      </div>
    </div>
  );
}

export default Navbar;
