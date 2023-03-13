import React from "react";
import Navbar from "../components/sub_components/Navbar";
import Hero from "../components/Sections/Hero";
import Services_card from "../components/sub_components/Services_card";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Services_card />
    </div>
  );
};

export default Home;
