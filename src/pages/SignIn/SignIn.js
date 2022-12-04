import "./SignIn.css";
import React from "react";
import profile from "../../images/profile.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import SignUp from "../SignUp/SignUp";

import { NavLink } from "react-router-dom";
function SignIn() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1 style={{color:" white" , fontSize: "1.4rem" }}>SignIn </h1>

            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="user name"
                className="name input-field-style"
              />
            </div>

            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="user name"
                className="name input-field-style"
              />
            </div>
            <div className="login-button">
              <button className="button sign-button">Signin</button>
            </div>

            <p className="link">
              <NavLink to="/SignUp">
                {" "}
                <a href="#" style={{color:"white"}}>Forgot password ?</a>
              </NavLink>
              Or
              <NavLink to="/SignUp">
                <a href="#"style={{color:"white"}}>Sign Up</a>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
