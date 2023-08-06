import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SingleProductImages = ({ imgs = [{ url: "" }] }) => {
  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  };

  return (
    <>
      <OwlCarousel className="owl-theme" {...carouselOptions}>
        {imgs.map((curElem, index) => {
          return <img src={curElem.url} key={index} alt={curElem.filename} />;
        })}
      </OwlCarousel>
    </>
  );
};

export default SingleProductImages;
