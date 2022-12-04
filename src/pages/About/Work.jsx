import React, { useContext } from "react";
import "./Work.css";
import gen from "../../images/gen.jpg";
import limelight from "../../images/limelight.png";
import gulahmed from "../../images/gulahmed.png";
import khadi from "../../images/khadi.png";
import Jun from "../../images/Jun.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {Link} from 'react-scroll'
const Works = () => {
  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <NavLink to="/SignUp" >
            <button className="button s-button">SignUp</button>
          </NavLink>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img  style={{transform:"scale(0.5)"}} src={gen} alt="" />
          </div>
          <div className="w-secCircle">
            <img  style={{transform:"scale(0.18)"}} src={limelight} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={gulahmed} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img  style={{transform:"scale(0.4)"}} src={khadi} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jun} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;