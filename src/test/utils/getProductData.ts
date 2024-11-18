import { getInventoryByCategory } from "./getInventoryByCategory";

export const getProductData = (category: string, id: string) => {
  const idInt = parseInt(id);
  const productData = getInventoryByCategory(category)?.items.filter(
    (item) => item.id === idInt
  );
  if (productData && productData.length > 0) {
    return productData[0];
  }
  return null;
};
