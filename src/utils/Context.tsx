import { createContext, useContext } from "react";
import { AppData } from "../types/appData_type";

export const AppContext = createContext<AppData | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("App data used outside the scope or is null");
  }
  return context;
};
