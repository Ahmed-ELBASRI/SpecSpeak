// import React from "react";
import Banner from "../Components/Banner/Banner";
import Feature from "../Components/Feature/Feature";
import Services from "../Components/Services/Services";
import WorkProcess from "../Components/WorkProcess/WorkProcess";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Services />
      <WorkProcess />
      <ScrollRestoration />
    </>
  );
};

export default Home;
