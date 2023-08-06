import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Star = ({ stars, reviews }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalf />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center">
      {starRating}
      <p>{reviews} customer reviews</p>
    </div>
  );
};

export default Star;
