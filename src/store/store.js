import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import productDetailReducer from "../features/products/productDetailSlice"
import cartReducer from "../features/cart/cartSlice"
import stockReducer from "../features/admin/stockSlice"

const store =  configureStore({
    reducer: {
        products: productsReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
        stock: stockReducer,
    },
});

export default store;