import React from "react";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";

const Rating = ({ star }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <li key={index}>
        {star >= index + 1 ? (
          <FaStar className="ratting" />
        ) : star >= number ? (
          <FaStarHalfAlt className="ratting" />
        ) : (
          <IoMdStarOutline className="ratting" />
        )}
      </li>
    );
  });
  return (
    <ul className="d-flex mb-40 align-items-center gap-2">{starRating}</ul>
  );
};

export default Rating;
