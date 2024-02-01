import { item } from "./item_type";

export type appData = {
  cart: { item: item; quantity: number }[];
};
