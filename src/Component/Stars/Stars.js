import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const BaseStars = ({ rating }) => {

  function setStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i+"fill"} size={20} color="#FFE141" />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<AiOutlineStar key={i+"out"} size={20} color="#FFE141" />);
    }
    return stars;
  }
  
  return (
    <div className="mt-2">
        {/* Rating */}
        <div className="flex items-center my-2">
          {setStars(rating)}
          <p className="ml-2 text-sm font-bold">({rating})</p>
        </div>
    </div>
  );
};

export const Stars = (props) => {
  return <BaseStars {...props} />;
};