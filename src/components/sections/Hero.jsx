import React from "react";
import HeroImg from "../../assets/illustration/illustration3.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
          </div>

          <div className="hero__text text-center">
            <h1>
              <span>Mindmesh</span> Creative
            </h1>
            <h4 className="motto1">
              Creative Digital & Technology Solution Provider
            </h4>
            <h5 className="motto2">
              Innovating ideas, Crafting digital reality, and shaping the
              future.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
