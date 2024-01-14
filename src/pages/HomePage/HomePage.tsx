import { Link } from "react-router-dom";
import ShopNavigator from "../../components/ShopNavigator/ShopNavigator";

function HomePage() {
  return (
    <div id="home-page">
      <section className="home-page-first-section">
        <div className="home-page-first-section-left-side">
          <div className="home-page-first-section-left-side-top">
            <h1>
              Kyiv
              <br />
              LuxeBouquets<sup>®</sup>
            </h1>
            <p>
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className="home-page-first-section-left-side-bottom">
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
        <ShopNavigator className="home-page-first-section-right-side" />
      </section>
      <section className="home-page-about-section">
        <div className="home-page-about-section-left-side">
          <h1>About us</h1>
        </div>
        <div className="home-page-about-section-right-side">
          <p className="home-page-about-section-right-side-overline">
            Our Story
          </p>
          <h3>Kyiv LuxeBouquets</h3>
          <p className="home-page-about-section-right-side-body">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </p>
          <Link to="/shop" style={{ width: "min-content" }}>
            <button>Learn more</button>
          </Link>
        </div>
      </section>
      <section className="home-page-why-us">
        <div className="home-page-why-us-left-side">
          <h1>Why choose us?</h1>
        </div>
        <div className="home-page-why-us-right-side">
          <div className="home-page-why-us-right-side-section">
            <h3>Stylish bouquets by florists</h3>
            <p>
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>
          <div className="home-page-why-us-right-side-section">
            <h3>On-time delivery</h3>
            <p>
              Never miss a moment with our on-time flower delivery service. Our
              couriers will deliver your bouquet personally, without boxes, to
              ensure it arrives in perfect condition. Trust us to deliver your
              thoughtful gift reliably.
            </p>
          </div>
          <div className="home-page-why-us-right-side-section">
            <h3>Safe payment</h3>
            <p>
              You can feel secure when placing an order with us, as we use
              industry-standard security measures to protect your payment
              information. Your transaction will be safe and hassle-free, so you
              can shop with confidence.
            </p>
          </div>
          <div className="home-page-why-us-right-side-section">
            <h3>Subscription by your needs</h3>
            <p>
              With our subscription service tailored to your specific needs, you
              can enjoy the convenience of having beautiful bouquets delivered
              straight to your door at regular intervals. Our flexible service
              is perfect for busy individuals or those who want to ensure they
              always have fresh flowers on hand. You'll save time and money with
              this hassle-free solution to your floral needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
