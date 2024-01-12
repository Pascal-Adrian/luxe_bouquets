import { Link } from "react-router-dom";
import RightArrow from "/src/assets/icons/icons-400/arrow-right.svg?react";
import LeftArrow from "/src/assets/icons/icons-400/arrow-left.svg?react";

interface ShopNavigatorProps {
  className?: string;
}

function ShopNavigator({ className }: ShopNavigatorProps) {
  return (
    <ul id="shop-navigator" className={className}>
      <li className="shop-navigator-card-right">
        <div>
          <h3>Fresh Flowers</h3>
          <Link to="/" className="shop-navigator-link">
            Shop now <RightArrow className="shop-navigator-arrow" />
          </Link>
        </div>
        <div className="shop-navigator-image-container">
          <img
            src="src/assets/images/Main_Images/Fresh_Flowers.webp"
            alt="Fresh_Flowers"
          />
        </div>
      </li>
      <li className="shop-navigator-card-left">
        <div className="shop-navigator-image-container">
          <img
            src="src/assets/images/Main_Images/Dried_Flowers.webp"
            alt="Fresh_Flowers"
          />
        </div>
        <div>
          <h3>Dried Flowers</h3>
          <Link to="/" className="shop-navigator-link">
            <LeftArrow className="shop-navigator-arrow" /> Shop now
          </Link>
        </div>
      </li>
      <li className="shop-navigator-card-right">
        <div>
          <h3>Live Plants</h3>
          <Link to="/" className="shop-navigator-link">
            Shop now <RightArrow className="shop-navigator-arrow" />
          </Link>
        </div>
        <div className="shop-navigator-image-container">
          <img
            src="src/assets/images/Main_Images/Live_Plants.webp"
            alt="Fresh_Flowers"
          />
        </div>
      </li>
      <li className="shop-navigator-card-left">
        <div className="shop-navigator-image-container">
          <img
            src="src/assets/images/Main_Images/Aroma_Candles.webp"
            alt="Fresh_Flowers"
          />
        </div>
        <div>
          <h3>Aroma Candles</h3>
          <Link to="/" className="shop-navigator-link">
            <LeftArrow className="shop-navigator-arrow" /> Shop now
          </Link>
        </div>
      </li>
      <li className="shop-navigator-card-right">
        <div>
          <h3>Fresheners</h3>
          <Link to="/" className="shop-navigator-link">
            Shop now <RightArrow className="shop-navigator-arrow" />
          </Link>
        </div>
        <div className="shop-navigator-image-container">
          <img
            src="src/assets/images/Main_Images/Freshners.webp"
            alt="Fresh_Flowers"
          />
        </div>
      </li>
    </ul>
  );
}

export default ShopNavigator;
