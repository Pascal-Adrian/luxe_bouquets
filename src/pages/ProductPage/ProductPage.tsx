import { RouterProps } from "react-router-dom";
import { item } from "../../types/item_type";

interface ProductPageProps {
  item: item;
  match: RouterProps;
}

function ProductPage() {
  return <div>Product Page</div>;
}

export default ProductPage;
