import React, { useState } from "react";
import { calculateCurrentPrice } from "../utils/priceUtils";
import "../assets/css/scss/components/_card.scss";
import CardHeader from "./CardHeader";

import CardFooter from "./CardFooter";

const ProductCard = ({
  item: {
    name,
    description,
    display_img,
    hovered_image,
    original_price,
    discount,
    isEMIAvailable,
    available_size,
    likes,
  },
}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const currentPrice = calculateCurrentPrice(original_price, discount);
  
  return (

    
    <>
      <div className="card">
        <CardHeader />
        <div className="card-body my-4" onMouseLeave={() => setIsHovered(false)}>
          <div className="card-img">
            <img
              src={hoveredImage === null ? display_img : hovered_image}
              alt={name}
              className="product-image"
              onMouseEnter={() => setHoveredImage(hovered_image)}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>
          <div
            className="product-details-container mt-3 mb-6"
          >
            {isHovered ? (
              <div
                className="available-sizes"
                onMouseLeave={() => setIsHovered(false)}
              >
                <p>Available In</p>
                <p className="sizes">{available_size.join(", ")}</p>
              </div>
            ) : (
              <div
                className="product-details "
                onMouseEnter={() => setIsHovered(true)}
              >
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="current-price">
                  <span>&#8377;</span> {currentPrice}{" "}
                  <span className="discount">{discount} % Off</span>
                </p>
                <p className="original-price">
                  <span>&#8377;</span>
                  {original_price}
                </p>
              </div>
            )}
            <p className="emi mt-4">
              {isEMIAvailable ? "EMI Available" : "EMI Not Available"}
            </p>
          </div>
        </div>
        <CardFooter likes={likes}/>
      </div>
    </>
  );
};

export default ProductCard;
