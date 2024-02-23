import React, { useEffect, useState, lazy } from "react";
const FilterSection = lazy(() => import("../FilterSection"));
const Products = lazy(() => import("../Products"));
const MobileFooter = lazy(() => import("../MobileFooter"));


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import "../../assets/css/scss/pages/_product-wrapper.scss";
import "../../assets/css/scss/pages/_mb-footer.scss";
import { Suspense } from "react";

const Watches = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
    setSortedProducts(products);
  }, [products]);

  // Handle filter change
  const handleFilterChange = (filters) => {
    let filtered = [...products];

    Object.keys(filters).forEach((category) => {
      if (filters[category].length > 0) {
        filtered = filtered.filter((product) =>
          filters[category].includes(product[category])
        );
      }
    });

    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const handleSort = (option) => {
    let sorted = [...filteredProducts]; // Sort filtered products
    switch (option) {
      case "lowToHigh":
        sorted.sort((a, b) => a.original_price - b.original_price);
        break;
      case "highToLow":
        sorted.sort((a, b) => b.original_price - a.original_price);
        break;
      default:
        // No sorting for other options
        break;
    }
    setSortedProducts(sorted);
  };

  return (
    <>
      <div className="products product-wrapper mx-3 my-2">
        <div className="filter-section">
          <Suspense fallback={<h3>Loading...</h3>}>
            <FilterSection
              products={products}
              onFilterChange={handleFilterChange}
            />
          </Suspense>
          
        </div>
        <div className="product-section">
          <Suspense fallback={<h3>Loading...</h3>}>
            <Products handleSort={handleSort} products={sortedProducts} />
          </Suspense>
          
        </div>
      </div>
      <div className=""></div>
      <div className="footer-wrapper">
        <Suspense fallback={<h3>Loading...</h3>}>
          <MobileFooter
            products={products}
            onFilterChange={handleFilterChange}
            onSort={handleSort}
          />
        </Suspense>
        
      </div>
    </>
  );
};

export default Watches;
