import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const checkout = localStorage.getItem("checkoutData") !== null
    ? JSON.parse(localStorage.getItem("checkoutData"))
    : [];


const stock = JSON.parse(localStorage.getItem("stock"))

const setItemFunc = (item, totalAmount, totalQuantity, remainingStock ) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("stock", JSON.stringify(remainingStock));
  localStorage.setItem("checkout", JSON.stringify(item));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
  checkoutData: checkout
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // add item to cart
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          category:newItem.category,
          image: newItem.image,
          price: newItem.price,
          itemQuantity: 1,
          priceCount: newItem.price,
        });
      } else {
        existingItem.itemQuantity++;
        existingItem.priceCount =
          Number(existingItem.priceCount) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.itemQuantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // decrease quantity
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.itemQuantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.itemQuantity--;
        existingItem.priceCount =
          Number(existingItem.priceCount) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.itemQuantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    //remove one item
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.itemQuantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.itemQuantity),
        0
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    checkoutCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      const checkoutItems = state.checkoutData.find((item) => item.id === newItem.id);
      const remainingStock = []
      const stocks = stock.find((item) => item.id === newItem.id)
      if (existingItem.itemQuantity > stocks.qty) {
        state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id);
        state.totalQuantity = state.totalQuantity - existingItem.itemQuantity;
      }else if (!checkoutItems) {
        state.checkoutData.push({
          id: newItem.id,
          title: newItem.title,
          category:newItem.category,
          image: newItem.image,
          price: newItem.price,
          itemQuantity: newItem.itemQuantity,
          priceCount: newItem.priceCount,
        });
        remainingStock = stocks.qty -= checkoutItems.itemQuantity;
      } else {
        checkoutItems.itemQuantity = 
           Number(checkoutItems.itemQuantity) + Number(newItem.itemQuantity);
        ;
        checkoutItems.priceCount =
          Number(checkoutItems.priceCount) + Number(newItem.priceCount);

        remainingStock = stocks.qty -= checkoutItems.itemQuantity;
      }
      setItemFunc(
        state.cartItems.map((item) => item),
        state.checkout.map((item) => item),
        state.stock.map((remainingStock) => remainingStock)
      );
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
