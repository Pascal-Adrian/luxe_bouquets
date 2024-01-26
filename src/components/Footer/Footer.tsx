import { Link } from "react-router-dom";
import LegalInfo from "../LegalInfo/LegalInfo";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  return (
    <footer>
      <div className="footer-reminder footer-cell">
        <p>
          Remember to offer beautiful flowers from Kyiv Florist Studio
          Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
          No spam or sharing your address
        </p>
        <input type="email" placeholder="Placeholder" />
        <button className="footer-button">Remind</button>
      </div>
      <div className="footer-contact footer-cell">
        <h5>Contact Us</h5>
        <ul>
          <li>
            <p>Address</p>
            <a href="https://maps.app.goo.gl/ik39pitBLAHtpHYW9" target="_blank">
              15/4 Khreshchatyk Street, Kyiv
            </a>
          </li>
          <li>
            <p>Phone</p>
            <a href="tel:+380980099777">+380980099777</a>
          </li>
          <li className="footer-contact-inquiry">
            <p>General Enquiry:</p>
            <a href="mailto:Kiev.Florist.Studio@gmail.com">
              Kiev.Florist.Studio@gmail.com
            </a>
          </li>
        </ul>
        <div>
          <h5>Follow us</h5>
          <SocialLinks />
        </div>
      </div>
      <div className="footer-shop-services footer-cell">
        <div>
          <h5>Shop</h5>
          <ul>
            <li>
              <Link to="/shop">All Products</Link>
            </li>
            <li>
              <Link to="/shop/fresh_flowers">Fresh Flowers</Link>
            </li>
            <li>
              <Link to="/shop/dried_flowers">Dried Flowers</Link>
            </li>
            <li>
              <Link to="/shop/live_plants">Live Plants</Link>
            </li>
            <li>
              <Link to="/shop/aroma_candles">Aroma Candles</Link>
            </li>
            <li>
              <Link to="/shop">Designer Vases</Link>
            </li>
            <li>
              <Link to="/shop/fresheners">Freshener Diffuser</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li>
              <Link to="/">Flower Subscribtion</Link>
            </li>
            <li>
              <Link to="/">Wedding & Event Decor</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-about-legal footer-cell">
        <h5>About us</h5>
        <ul>
          <li>
            <Link to="/">Our story</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
        <LegalInfo />
      </div>
    </footer>
  );
}

export default Footer;
