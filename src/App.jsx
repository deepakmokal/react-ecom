import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";
import Products from "./components/Products";
import { SearchProvider } from "./context/SearchContext";
import { fetchProducts } from "./features/products/productsSlice";

import './assets/css/scss/pages/_product-wrapper.scss'
import './assets/css/scss/pages/_mb-footer.scss'
import MobileFooter from "./components/MobileFooter";

import Modal from 'react-modal';

Modal.setAppElement('#root');



function App() {
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
      <SearchProvider>
        <Header />
        <div className="products product-wrapper mx-3 my-2">
          <div className="filter-section">
            <FilterSection
              products={products}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="product-section">
            <Products handleSort={handleSort} products={sortedProducts} />
          </div>
          
          
        </div>
        <div className=""></div>
        <div className="footer-wrapper">
          <MobileFooter products={products} onFilterChange={handleFilterChange}
          onSort={handleSort} />
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
