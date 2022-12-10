import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

const productData = localStorage.getItem("product") !== null
    ? JSON.parse(localStorage.getItem("product"))
    : [];

const localData = JSON.parse(localStorage.getItem("stocks"));
console.log('local-data: ', localData);

const initialState = {
  product: productData,
  loading: false,
  stocks: localData,
};

export const getDetail = createAsyncThunk(
  "product/getDetail",
  async (id) => {
    try {
      const res = await axios.get(`${API}/products/${id}`);
      return res.data;
    } catch (err) {
      console.log("error ===> ", err);
    }
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  // reducers: {
  //   setData: (state, action) => {
  //     state.product = action.payload;
  //     if (!localData) {
  //       const dataStocks = [];
  //       state.product.forEach((data) => {
  //         dataStocks.push({
  //           id: data.id,
  //           qty: 20,
  //         });
  //       });
  //       localStorage.setItem('stocks', JSON.stringify(state.product));
  //     }
  //   },
  // },
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.loading = true;
    },
    [getDetail.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
    },
    [getDetail.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const productActions = productDetailSlice.actions;
export default productDetailSlice.reducer;
