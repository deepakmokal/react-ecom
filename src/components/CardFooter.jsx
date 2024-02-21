import React, { useState } from "react";
import rocketIcon from '../assets/images/rocket.svg';
import likeIcon from '../assets/images/heart.svg';
import likeFilledIcon from '../assets/images/heart-filled.svg';

const CardFooter = ({likes}) => {
    const [isLiked, setIsLike] = useState(false)
  return (
    <div className="card-footer">
      <div>
        <a href="#">
          <img src={rocketIcon} alt="rocket" />
        </a>
      </div>
      <div className="like-section">
        <a onClick={() => setIsLike(!isLiked)}>
          {isLiked ? (
            <img src={likeFilledIcon} alt="likefilled" />
          ): (
            <img src={likeIcon} alt="likeicon" />
          )}
          <span>{likes}</span>
        </a>
      </div>
    </div>
  );
};

export default CardFooter;
