import ShopNavigator from "../../components/ShopNavigator/ShopNavigator";

function HomePage() {
  return (
    <div id="home-page">
      <section className="home-page-first-section">
        <div className="home-page-first-section-right-side">
          <div className="home-page-first-section-right-side-container">
            <div className="home-page-first-section-right-side-top">
              <h1>
                Kyiv
                <br />
                LuxeBouquet<sup>®</sup>
              </h1>
              <p>
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread Joy with Our Online Flower Delivery Service
              </p>
            </div>
            <div className="home-page-first-section-right-side-bottom">
              <div>
                <img
                  src="src/assets/images/Secondary_Images/64a03d676a877d080695084a_ewddewd 1.webp"
                  alt=""
                />
              </div>
              <div>
                <p>
                  Experience the joy of giving with our modern floral studio.
                  Order online and send fresh flowers, plants and gifts today.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ShopNavigator />
      </section>
    </div>
  );
}

export default HomePage;
