import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/baseApi";

const productData = localStorage.getItem("product") !== null
    ? JSON.parse(localStorage.getItem("product"))
    : [];


const initialState = {
  product: productData,
  loading: false,
};

export const getDetail = createAsyncThunk(
  "product/getDetail",
  async (productId) => {
    try {
      const res = await axios.get(`${API}/products/${productId}`);
      return res.data;
    } catch (err) {
      console.log("error ===> ", err);
    }
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
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
