import { useEffect, useState } from "react";
import GetInventoryByCategory from "../../test/utils/GetInventoryByCategory";
import { inventory } from "../../types/inventory_type";
import { useParams } from "react-router-dom";

// interface CategoryPageProps {
//   category: string;
// }

function CategoryPage() {
  const { category } = useParams();
  const [inventory, setInventory] = useState<inventory | null>(null);

  useEffect(() => {
    console.log(category);
    if (category) {
      setInventory(GetInventoryByCategory(category));
      console.log(inventory);
    }
  }, [category]);

  return (
    <section id="category-page">
      <div
        className="category-page-left"
        style={{ backgroundImage: `url("${inventory?.image_link}")` }}
      >
        <div>
          <h1>{inventory?.name}</h1>
        </div>
      </div>
      <div className="category-page-right">
        {inventory?.items.map((item) => (
          <div
            className="category-page-card"
            key={item.id}
            style={{
              backgroundImage: `url("${item.image_link}")`,
            }}
          >
            <h6>{item.name}</h6>
            <p>price {item.price}$</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
