import React from "react";
import Offers from "./Offers";
import NewProducts from "./NewProducts";
import DemandProducts from "./DemandProducts";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <DemandProducts />
      <Offers />
      <NewProducts />
    </>
  );
};

export default Home;
