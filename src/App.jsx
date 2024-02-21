import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Products from "./components/Products";
import { fetchProducts } from "./features/products/productsSlice";
import Header from "./components/Header";
import { SearchProvider } from "./context/SearchContext";

function App() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts("classic"));
  }, []);

  return (
    <>
      <SearchProvider>
        <Header />
        <div className="products mx-3 my-2">
          <Products products={products} />
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
