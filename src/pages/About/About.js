import React from "react";
import "./About.css";
import "./Work.css";
import Testimonial from "../About/Testimonial";
import Contact from "../About/Contact";
import Experience from "../About/Experience";
import Work from "../About/Work";

function Intro() {
  return (
    <>
      <div className="About">
        <div className="About-name">
          <span>AboutUs</span>
          <span>
           Bring Real World Shopping experience online
          </span>
          <span>
          The leading virtual fitting and styling solution for businesses of all sizes

Try on items, get accurate size visualization experience and style outfits 
 all from within your elevated online store. Benefit from increased conversions, enhanced engagement, and significantly lower product returns.
          </span>

          <button className=" button About-button">SignUp </button>
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "30rem",
            height: "13rem",
            left: "-9rem",
          }}
        ></div>

        <div className="ex">
          <Experience />
        </div>
        <div className="ex">
          <Work />
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Intro;
