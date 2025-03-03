import { Link } from "react-router-dom";
import ShopNavigator from "../../components/ShopNavigator/ShopNavigator";
import PhoneIcon from "/src/assets/icons/icons-400/call.svg?react";
import PinDrop from "/src/assets/icons/icons-400/pin_drop.svg?react";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import GoogleLogo from "/src/assets/icons/icons-300/Brands/Google.svg?react";
import RightChevron from "/src/assets/icons/icons-400/chevron-right.svg?react";
import LeftChevron from "/src/assets/icons/icons-400/chevron-left.svg?react";
import { reviewData } from "../../test/responce_emulations/reviews";
import { useEffect, useState } from "react";
import ScrollDots from "../../components/ScrollDots";
import { review } from "../../types/review_type";
import Mascot from "../../components/Mascot/Mascot";

function HomePage() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviews, setReviews] = useState<review[]>([]);

  useEffect(() => {
    setReviews(reviewData);
  }, []);

  const handleRightChevronClick = () => {
    setReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleLeftChevronClick = () => {
    setReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setReviewIndex(index);
  };

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
                src="/images/Secondary_Images/home_page_description_image.webp"
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
          <h2>About us</h2>
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
          <h2>Why choose us?</h2>
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
      <section className="home-page-talk">
        <div className="home-page-talk-left-side">
          <div className="home-page-talk-left-side-top">
            <h2>Let's Talk</h2>
            <p>
              Enter your number and we'll call you back ASAP to help you with
              any questions or to place an order
            </p>
            <div>
              <input type="tel" placeholder="+380 XX XXX XX XX" />
              <button>Book a call</button>
            </div>
          </div>
          <div className="home-page-talk-left-side-bottom">
            <div className="home-page-talk-left-side-bottom-section">
              <h3>Phone</h3>
              <div className="home-page-talk-left-side-bottom-section-sub">
                <div>
                  <PhoneIcon />
                  <a href="tel:+380980099777">+380980099777</a>
                </div>
                <div>
                  <PhoneIcon />
                  <a href="tel:+380980099111">+380980099111</a>
                </div>
              </div>
            </div>
            <div className="home-page-talk-left-side-bottom-section">
              <h3>Address</h3>
              <div className="home-page-talk-left-side-bottom-section-sub">
                <p>OPENING HOURS: 8 TO 11 P.M.</p>
                <div>
                  <PinDrop />
                  <a
                    href="https://maps.app.goo.gl/ik39pitBLAHtpHYW9"
                    target="_blank"
                  >
                    15/4 Khreshchatyk Street, Kyiv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-talk-right-side">
          <img
            src="/images/Secondary_Images/KLB_virtual_design.webp"
            alt="Shop image"
          />
          <div>
            <h3>Follow us</h3>
            <SocialLinks className="home-page-talk-right-side-socials" />
          </div>
        </div>
      </section>
      <section className="home-page-service">
        <h2 className="home-page-service-title">Our Service</h2>
        <div className="home-page-service-subscription">
          <img
            src="/images/Secondary_Images/service_image.webp"
            alt="Girl enjoying flowers"
          />
          <div className="home-page-service-section">
            <p className="home-page-service-overline">SERVICE</p>
            <h2 className="home-page-service-subtitle">Flower Subscribtion</h2>
            <p>
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </p>
            <Link to="/subscribtion" className="button">
              subscribe
            </Link>
          </div>
        </div>
        <div className="home-page-service-events">
          <div className="home-page-service-section">
            <p className="home-page-service-overline">service</p>
            <h2 className="home-page-service-subtitle">
              Wedding & Event Decor
            </h2>
            <p>
              Let our team of expert florists and designers create stunning,
              <br />
              on-trend floral décor for your special day. Trust us to bring your
              vision to life.
            </p>
            <Link to="/" className="button">
              Learn more
            </Link>
          </div>
        </div>
        <div className="home-page-service-section">
          <GoogleLogo className="home-page-service-logo" />
          <p className="home-page-service-overline">REVIEWS</p>
          <h2 className="home-page-service-subtitle">Our Clients Say</h2>
          <div className="home-page-service-review">
            <button
              onClick={handleLeftChevronClick}
              className="home-page-service-chevron"
            >
              <LeftChevron />
            </button>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(${
                    (-reviewIndex * 100) / reviews.length
                  }%)`,
                  width: `${reviews.length * 100}%`,
                }}
              >
                {reviews.map((review) => (
                  <div
                    className="home-page-service-review-element"
                    key={review.name}
                  >
                    <h3>"{review.text}"</h3>
                    <h6>&ndash; {review.name}</h6>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleRightChevronClick}
              className="home-page-service-chevron"
            >
              <RightChevron />
            </button>
          </div>
          <ScrollDots
            numberOfDots={reviews.length}
            activeDot={reviewIndex}
            onClick={handleDotClick}
          />
          <Link to="/" className="button">
            read our reviews
          </Link>
        </div>
      </section>
      <Mascot />
    </div>
  );
}

export default HomePage;
