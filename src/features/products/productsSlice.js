import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

const localData = localStorage.getItem("stocks");
console.log('local-data: ', localData);

const initialState = {
  products: [],
  loading: false,
  stocks: localData
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await axios.get(`${API}/products`);
      return res.data;
    } catch (err) {
      console.log("error ===> ", err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, {payload}) => {
      state.products = payload;
      state.loading = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
