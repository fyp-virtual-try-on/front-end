import React from "react";
import "./Services.css";
import heartemoji from "../../images/heartemoji.png";
import glasses from "../../images/glasses.png";
import humble from "../../images/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";

function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services">
      {/* left div */}
      <div className="awesom">
        <span>METAWEAR</span>
        <span>Services Include</span>
        <span>
          {" "}
          Mapping your favourite outfits on your 2d images  so <br /> you can visualize yourself in that outfit and make you buying decision more quickly.{" "}
        </span>
        <button className="button s-button">About Us</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right div */}
      <div className="cards">
      <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
        <Card
            emoji={heartemoji}
            heading={"styled outfits "}
            detail={"Western style clothing is finally Here!!! of your favourite Brands"}
          />
        </motion.div>
        {/* second div */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        <Card
            emoji={glasses}
            heading={"Mapping"}
            detail={" Gives you best visualization experience of your favourite outfit"}
          />
        
          
        </motion.div>
          {/* third div */}
          <motion.div  initial={{ top: "20rem", left: "17rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
          >
        <Card
            emoji={humble}
            heading={"online purchase"}
            detail={"Purchase your styled outfit with more ease"}
          />
        
          
        </motion.div>
        
        <div className="blur s-blur1" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur s-blur2" style={{background:'#c1f5ff'}}></div>
      </div>
    </div>
  );
}

export default Services;
