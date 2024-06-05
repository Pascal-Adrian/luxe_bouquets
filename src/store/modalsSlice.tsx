import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    cart: false,
  },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openCart: (state) => {
      state.modals.cart = true;
    },
    closeCart: (state) => {
      state.modals.cart = false;
    },
  },
});

export const { openCart, closeCart } = modalsSlice.actions;

export default modalsSlice.reducer;
