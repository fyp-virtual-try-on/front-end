import React from "react";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import { useDispatch } from "react-redux";

import { cartItem } from "../store/cartItem/cartItemSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Intro />
      <Services />
    </>
  );
};

export default Home;
