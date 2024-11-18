import { useEffect, useState } from "react";
import { inventory } from "../../types/inventory_type";
import { Link, useParams } from "react-router-dom";
import { getInventoryByCategory } from "../../test/utils/getInventoryByCategory";

function CategoryPage() {
  const { category } = useParams();
  const [inventory, setInventory] = useState<inventory | null>(null);

  useEffect(() => {
    if (category) {
      setInventory(getInventoryByCategory(category));
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
          <Link
            to={`/shop/${category}/${item.id}`}
            className="category-page-card"
            key={item.id}
            style={{
              backgroundImage: `url("${item.image_link}")`,
            }}
          >
            <h6>{item.name}</h6>
            <p>price {item.price}$</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
