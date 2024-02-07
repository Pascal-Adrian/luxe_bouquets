import { cart } from "./cart_type";

export type AppData = {
  cart: cart;
  setCart: React.Dispatch<React.SetStateAction<cart>>;
};
