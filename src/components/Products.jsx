import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../assets/css/scss/pages/_product-list.scss";
import { useSearch } from "../context/SearchContext";
import bannerImg from "../assets/images/banner.jpg";
import bannerImg2 from "../assets/images/banner2.jpg";
import SortComponent from "./SortComponent";


const Products = ({ products, handleSort }) => {
  const { searchTerm } = useSearch();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProductsAndAds = () => {
    const productsWithAds = [];
    for (let i = 0; i < filteredProducts.length; i++) {
      productsWithAds.push(filteredProducts[i]);
      // Insert ad banner after every 6th product
      if ((i + 1) % 6 === 0 && i !== filteredProducts.length - 1) {
        productsWithAds.push({ id: `ad-${i}`, isAd: true });
      }
    }
    return productsWithAds;
  };


  return (
    <>
      <div className="hero-banner">
        <img src={bannerImg} alt="banner" />
      </div>
      <SortComponent onSort={handleSort} />
      <div className="product-list">
        
        {renderProductsAndAds().map((item) => (
          item.isAd ? (
            <div key={item.id} className="ad-banner">
              <img  src={bannerImg2} alt="Ad Banner" />
            </div>
          ) : (
            <ProductCard key={item.id} item={item} />
          )
        ))}
      </div>
    </>
  );
};

export default Products;
