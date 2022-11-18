import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

// const initialState = {
//   product: [],
//   loading: false,
//   stock: JSON.parse(localStorage.getItem('stock')) || 20,
// }
const localData = localStorage.getItem("stocks");
console.log('local-data: ', localData);

const initialState = {
  products: [],
  loading: false,
  stocks: localData,
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
  reducers: {
    setStock: (state, action) => {
      state.products = action.payload;
      if (!localData) {
        const dataStocks = [];
        state.products.forEach((data) => {
          dataStocks.push({
            id: data.id,
            qty: 20,
          });
        });
        localStorage.setItem('stocks', JSON.stringify(state.products));
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    //   if (localData === null) {
    //     const dataStocks = [];
    //     state.products.forEach((data) => {
    //       dataStocks.push({
    //         id: data.id,
    //         qty: 20,
    //       });
    //     });
    //   }
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const { setStock } = productsSlice.actions;
export default productsSlice.reducer;
