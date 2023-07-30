import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    img: "https://img.freepik.com/free-photo/portrait-cheerful-woman-holding-shopping-bags_171337-3676.jpg?w=996&t=st=1690742172~exp=1690742772~hmac=9733c00f919a716ab767bd34b4860fc47b40c5fb71ea0b89d8e7b6e10ef3ef91",
  };
  return <HeroSection myData={data} />;
};

export default About;
