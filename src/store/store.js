import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import productDetailReducer from "../features/products/productDetailSlice"
import cartReducer from "../features/cart/cartSlice"
import cartSlice from "../features/cart/cartSlice";

const store =  configureStore({
    reducer: {
        products: productsReducer,
        productDetail: productDetailReducer,
        cart: cartSlice.reducer,
    },
});

export default store;