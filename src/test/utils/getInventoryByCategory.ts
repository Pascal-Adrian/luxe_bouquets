import { aroma_candles } from "../responce_emulations/aroma_candles";
import { dried_flowers } from "../responce_emulations/dried_flowers";
import { fresh_flowers } from "../responce_emulations/fresh_flowers";
import { fresheners } from "../responce_emulations/fresheners";
import { live_plants } from "../responce_emulations/live_plants";

export const getInventoryByCategory = (category: string) => {
  switch (category) {
    case "fresh_flowers":
      return fresh_flowers;
    case "dried_flowers":
      return dried_flowers;
    case "live_plants":
      return live_plants;
    case "aroma_candles":
      return aroma_candles;
    case "fresheners":
      return fresheners;
    default:
      return null;
  }
};
