import { item } from "./item_type";

export type AppData = {
  cart: { item: item; quantity: number }[];
};
