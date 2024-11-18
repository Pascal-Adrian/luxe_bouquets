import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalsReducer from "./modalsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modals: modalsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
