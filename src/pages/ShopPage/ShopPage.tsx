import ShopNavigator from "../../components/ShopNavigator/ShopNavigator";

function ShopPage() {
  return (
    <div id="shop-page">
      <div className="shop-page-left-side">
        <div className="shop-page-left-side-container">
          <h1>
            Choose a<br />
            Сategory
          </h1>
        </div>
      </div>
      <ShopNavigator className="shop-page-right-side" />
    </div>
  );
}

export default ShopPage;
