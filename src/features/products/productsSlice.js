import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    debugger
    const response = await axios.get(
       "http://localhost:5000/watches"
    );
    return response.data;
  }
);


export const fetchProductsByTerm = createAsyncThunk(
  "products/fetchProductsByTerm",
  async (term) => {
    debugger;
    const response = await axios.get(
       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
      
    );
    return response.data.drinks;
  }
);

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      

      // Fetch by TERM
      .addCase(fetchProductsByTerm.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProductsByTerm.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProductsByTerm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});

export default productsSlice.reducer;
