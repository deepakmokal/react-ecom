import React from "react";
import ProductCard from "./ProductCard";
import "../assets/css/scss/pages/_product-list.scss";
import { useSearch } from "../context/SearchContext";

const Products = ({ products }) => {
  const { searchTerm } = useSearch();

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
