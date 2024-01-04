import { Link } from "react-router-dom";
import LegalInfo from "../LegalInfo/LegalInfo";

function Footer() {
  return (
    <footer>
      <div className="footer-reminder">
        <p>
          Remember to offer beautiful flowers from Kyiv Florist Studio
          Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
          No spam or sharing your address
        </p>
        <input type="email" placeholder="Placeholder" />
        <button className="footer-button">Remind</button>
      </div>
      <div className="footer-contact">
        <h5>Contact Us</h5>
        <ul>
          <li>
            Address
            <a href="https://maps.app.goo.gl/ik39pitBLAHtpHYW9" target="_blank">
              15/4 Khreshchatyk Street, Kyiv
            </a>
          </li>
          <li>
            {" "}
            Phone
            <a href="tel:+380980099777">+380980099777</a>
          </li>
          <li>
            General Enquiry:
            <a href="mailto:Kiev.Florist.Studio@gmail.com">
              Kiev.Florist.Studio@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-shop-services">
        <div className="footer-shop">
          <h5>Shop</h5>
          <ul>
            <li>
              <Link to="/">All Products</Link>
            </li>
            <li>
              <Link to="/">Fresh Flowers</Link>
            </li>
            <li>
              <Link to="/">Dried Flowers</Link>
            </li>
            <li>
              <Link to="/">Live Plants</Link>
            </li>
            <li>
              <Link to="/">Aroma Candles</Link>
            </li>
            <li>
              <Link to="/">Designer Vases</Link>
            </li>
            <li>
              <Link to="/">Freshener Diffuser</Link>
            </li>
          </ul>
        </div>
        <div className="footer-services">
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
        <LegalInfo className="footer-legals" />
      </div>
    </footer>
  );
}

export default Footer;
