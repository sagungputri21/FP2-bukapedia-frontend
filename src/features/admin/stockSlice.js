import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

const localData = JSON.parse(localStorage.getItem("stock"));
console.log("local-data: ", localData);

const initialState = {
  products: [],
  loading: false,
  stock: localData,
};

// const setItemData = (item) => {
//   localStorage.setItem("products", JSON.stringify(item));
// };

export const getProductsStock = createAsyncThunk(
  "stock/getProductsStock",
  async () => {
    try {
      const res = await axios.get(`${API}/products`);
      return res.data;
    } catch (err) {
      console.log("error ===> ", err);
    }
  }
);

console.log("product => ", getProductsStock);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStock(state, action) {
      // const product = action.payload
      state.stock = action.payload;
    },
    updateStock(state, action) {
      const product = action.payload;
      const existingStock = state.products.find(
        (item) => item.id === product.id
      );

      if (!existingStock) {
        const dataStocks = [];
        state.products.forEach((data) => {
          dataStocks.push({
            id: data.id,
            qty: 20,
          });
        })
        localStorage.setItem("stock", JSON.stringify(dataStocks));
        console.log('dataStock =>', dataStocks)
      } else {
        state.products[existingStock].stock = action.payload.stock
        localStorage.setItem("stock", JSON.stringify(state.stock));
      }
    },
  },
  extraReducers: {
    [getProductsStock.pending]: (state) => {
      state.loading = true;
    },
    [getProductsStock.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    },
    [getProductsStock.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const { setStock, updateStock } = stockSlice.actions;
export default stockSlice.reducer;
