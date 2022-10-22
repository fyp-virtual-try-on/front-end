import React from "react";
import "./Services.css";
import heartemoji from "../../images/heartemoji.png";
import glasses from "../../images/glasses.png";
import humble from "../../images/humble.png";
import Card from "../Card/Card";
function Services() {
  return (
    <div className="services">
      {/* left div */}
      <div className="awesom">
        <span>Virtual TryOn</span>
        <span>Services Include</span>
        <span>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          voluptate quis <br /> cum eius velit vel voluptatibus? Incidunt
          reprehenderit ad natus enim rem corporis impedit{" "}
        </span>
        <button className="button s-button">ABout Us</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right div */}
      <div className="cards">
        <div>
            <Card
            emoji={heartemoji}
            heading={'Design'}
            detail={"jdfgjsdgfsgjdfgsgfdsgfsfjhsgfsgdfg"}
            />
        </div>
      </div>
    </div>
  );
}

export default Services;
