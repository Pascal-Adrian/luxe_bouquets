import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

function AboutPage() {
  return (
    <div id="about-page">
      <section className="about-page-first-section">
        <div className="about-page-first-section-right">
          <h2>Our Story</h2>
          <h3 className="about-page-zapfino">About</h3>
          <h2>Kiyv LuxeBouquets</h2>
          <p>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            <br />
            Spread Joy with Our Online Flower Delivery Service
          </p>
          <SocialLinks className="about-page-socials" />
        </div>
        <img
          src="/images/Secondary_Images/our_story_main_image.png"
          alt="Our Story"
        />
      </section>
      <section className="about-page-section-type-1">
        <p className="about-page-overline">Our story</p>
        <h3>Our Founder's Passion</h3>
        <p className="about-page-body">
          Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
          goal of bringing unique and exquisite bouquets to the people of Kyiv.
          Natalia has always had a passion for flowers and design, and his
          vision was to create a local floral studio that would specialize in
          the creation and delivery of fresh, beautiful, and distinctive
          bouquets.
        </p>
      </section>
      <section className="about-page-section-type-2">
        <img
          src="/images/Secondary_Images/our_story_bouquets.png"
          alt="About bouquets"
        />
        <div className="about-page-section-type-2-text-wrapper">
          <div>
            <h3>Expertly Crafted Bouquets</h3>
            <p>
              At Kyiv LuxeBouquets, we take pride in our team of talented and
              experienced florists who carefully select each bloom, ensuring
              that only the freshest and most stunning flowers make it into our
              bouquets. We work directly with farms to source the highest
              quality flowers, and our skilled florists expertly craft each
              bouquet to perfection.
            </p>
          </div>
        </div>
      </section>
      <section className="about-page-section-type-2">
        <div className="about-page-section-type-2-text-wrapper">
          <div>
            <h3>Bouquets, Gifts & Ambiance</h3>
            <p>
              In addition to our stunning bouquets, we also offer a collection
              of dried bouquets, house plants, and fragrant candles from luxury
              brands to create the perfect ambiance. We believe that sending
              flowers, plants, and gifts should be easy and stress-free, which
              is why we offer same or next-day delivery throughout Kyiv.
            </p>
          </div>
        </div>
        <img
          src="/images/Secondary_Images/our_story_ambiance.png"
          alt="About ambiance"
        />
      </section>
      <section className="about-page-section-type-2">
        <img
          src="/images/Secondary_Images/our_story_special.webp"
          alt="About bouquets"
        />
        <div className="about-page-section-type-2-text-wrapper">
          <div>
            <h3>Making Every Day Special</h3>
            <p>
              Our mission is simple: to make every day special and memorable for
              our customers. We are dedicated to providing the highest quality
              flowers, exceptional customer service, and a seamless online
              experience that will make you feel confident and satisfied with
              your purchase.Thank you for choosing Kyiv LuxeBouquets. We look
              forward to bringing joy and happiness to your life with our
              beautiful bouquets and gifts.
            </p>
          </div>
        </div>
      </section>
      <section className="about-page-section-type-1">
        <h2>Discover Our Beautiful Bouquets</h2>
        <p>
          Explore our collection of exquisite bouquets and surprise your loved
          ones with the perfect gift.
          <br />
          Click the button below to start shopping
        </p>
        <Link to="/shop" className="button">
          Shop now
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
