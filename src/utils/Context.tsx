import { createContext, useContext } from "react";
import { AppData } from "../types/appData_type";
import { cart } from "../types/cart_type";

export const AppContext = createContext<AppData>({
  cart: [] as cart,
  setCart: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("App data used outside the scope or is null");
  }
  return context;
};
