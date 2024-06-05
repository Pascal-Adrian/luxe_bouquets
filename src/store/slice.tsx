import { createSlice } from "@reduxjs/toolkit";
import { cart } from "../types/cart_type";

const initialState = {
  cart: [] as cart,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const itemIndex = state.cart.findIndex(
        (position) => position.item.id === item.id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += quantity;
      } else {
        state.cart.push({ item: item, quantity: quantity });
      }
    },
    addSubscriptionToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const index = state.cart.findIndex(
        (position) =>
          position.item.id === item.id &&
          position.item.category === item.category
      );
      if (index !== -1) {
        state.cart[index].quantity += quantity;
      } else {
        state.cart.push({ item: item, quantity: quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { id, category } = action.payload;
      state.cart = state.cart.filter(
        (item) => item.item.id !== id || item.item.category !== category
      );
    },
  },
});

export const { addItemToCart, addSubscriptionToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
