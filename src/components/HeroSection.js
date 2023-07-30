import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/heroSection.css";

const HeroSection = (props) => {
  const { img } = props.myData;
  return (
    <div className="hero-main">
      <div className="hero-intro">
        <span>Welcome to</span>
        <h1>Mendy's Mart</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          possimus sapiente magni sunt nulla numquam similique aut totam quod
          quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Sequi, accusantium.
        </p>
        <NavLink to="/products">
          <button>SHOP NOW</button>
        </NavLink>
      </div>
      <div className="hero-img">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default HeroSection;
