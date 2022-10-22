import React from "react";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
    </>
  );
};

export default Home;
