import "./SignUp.css";
import React from "react";
import profile from "../../images/profile.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <div className="su-main">
      <div className="su-sub-main">
        <div>
          <div className="su-imgs">
            <div className="su-container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>SignUp Page</h1>
            <div style={{ paddingTop: "20px" }}>
              <img src={pass} alt="pass" className="su-email" />
              <input
                type="text"
                placeholder="Firstname"
                className="su-name input-field-style"
              />
            </div>

            <div style={{ paddingTop: "20px" }}>
              <img src={email} alt="email" className="su-email" />
              <input
                type="text"
                placeholder="user name or email"
                className="su-name input-field-style"
              />
            </div>

            <div className="su-second-input">
              <img src={pass} alt="pass" className="su-email" />
              <input
                type="password"
                placeholder="user name"
                className="su-name input-field-style"
              />
            </div>
            <div className="su-login-button">
              <button className="button signup-button">SignUp</button>
            </div>

            <p className="su-link">
              <a href="#">Forgot password ?</a> Or
              <NavLink to="/SignIn">
                <a href="#">Sign In</a>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;