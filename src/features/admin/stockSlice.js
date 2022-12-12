import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

const localData = localStorage.getItem("stock");
console.log("local-data: ", localData);

const initialState = {
  dataStocks: [],
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
      const existingStock = state.dataStocks.find(
        (item) => item.id === product.id
      );

      if (!existingStock) {
        // setStockData(
        //   state.stocks.map((dataStocks) => dataStocks),
        //   // console.log("stock = ", stocks)
        // );
        state.dataStocks.push({
          id: product.id,
          qty: 20,
        });
      } else {
        existingStock.stock = action.payload.stock
      }
      localStorage.setItem("stock", JSON.stringify(state.dataStocks));
    },
  },
  extraReducers: {
    [getProductsStock.pending]: (state) => {
      state.loading = true;
    },
    [getProductsStock.fulfilled]: (state, { payload }) => {
      state.dataStocks = payload;
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
