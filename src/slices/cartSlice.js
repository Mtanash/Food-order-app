import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAdd = action.payload;

      // if item is already in cart
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === itemToAdd.data.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].amount += itemToAdd.amount;
      } else {
        state.items.push(itemToAdd);
      }
    },
    increaseItemCount: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === itemId
      );
      state.items[itemIndex].amount++;
    },
    decreaseItemCount: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === itemId
      );
      if (state.items[itemIndex].amount < 2) {
        // removeItemFromCart
        state.items = state.items.filter((item, index) => index !== itemIndex);
      } else {
        state.items[itemIndex].amount--;
      }
    },
    resetCartItems: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  decreaseItemCount,
  increaseItemCount,
  resetCartItems,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
