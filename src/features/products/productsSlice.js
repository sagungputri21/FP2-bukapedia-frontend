import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

const localData = JSON.parse(localStorage.getItem("stocks"));
console.log('local-data: ', localData);

const initialState = {
  products: [],
  loading: false,
  stocks: localData
};

// const setItemData = (item) => {
//   localStorage.setItem("products", JSON.stringify(item));
// };

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

const setStockData = (dataStocks) => {
  dataStocks = [];
    getProducts.foreach((data) => {
      dataStocks.push({
        id: data.id,
        qty: 20,
      });
    });
    localStorage.setItem('stocks', JSON.stringify(dataStocks));
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setStock: (state, action) => {
      // const 
      state.products = action.payload;
      if (localData === null) {
        setStockData(
          state.products.map((data) => data),
        );
      }
    },
  },
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

export const { setStock } = productsSlice.actions;
export default productsSlice.reducer;
