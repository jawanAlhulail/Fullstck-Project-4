import React from "react";
import heroBackground from "../img/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="image__div">
          <img src={heroBackground}></img>
        </div>
        <div className="hero__desc">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <button>our products</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
