import React from "react";
import HeroSection from "./components/HeroSection";
import aboutImg from "./assets/about.jpg";

const About = () => {
  const data = {
    img: aboutImg,
  };
  return (
    <>
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
