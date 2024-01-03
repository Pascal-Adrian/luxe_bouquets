import { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "/src/assets/icons/menu_FILL0_wght300_GRAD0_opsz24.svg?react";
import CartIcon from "/src/assets/icons/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg?react";
import InstagramIcon from "/src/assets/icons/Brands/Instagram.svg?react";
import PinterestIcon from "/src/assets/icons/Brands/Pinterest.svg?react";
import FacebookIcon from "/src/assets/icons/Brands/Facebook.svg?react";
import TwitterIcon from "/src/assets/icons/Brands/Twitter.svg?react";
import TelegramIcon from "/src/assets/icons/Brands/Telegram.svg?react";
import CloseIcon from "/src/assets/icons/close_FILL0_wght300_GRAD0_opsz24.svg?react";

function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [homeShop, setHomeShop] = useState<boolean>(false);

  const handleHomeShop = () => {
    setHomeShop(!homeShop);
  };

  const handleHomeShopReset = () => {
    if (homeShop) {
      setHomeShop(false);
    }
  };

  const handleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  const home = (
    <li>
      <Link onClick={handleHomeShop} to="/">
        Home
      </Link>
    </li>
  );

  const shop = (
    <li>
      <Link onClick={handleHomeShop} to="/shop">
        Shop
      </Link>
    </li>
  );

  const burger = (
    <div className="burger-menu-container">
      <div className="burger-menu">
        <div className="burger-menu-close">
          <CloseIcon onClick={handleBurgerMenu} />
        </div>
        <ul>
          <li>
            <Link to="/">Sign in</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Shipping & returns</Link>
          </li>
          <li>
            <Link to="/">Terms & conditions</Link>
          </li>
          <li>
            <Link to="/">Privacy policy</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="">
              <PinterestIcon />
            </a>
          </li>
          <li>
            <a href="">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="">
              <TelegramIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <nav className="navbar">
        {/* desktop */}
        <ul className="desktop-nav">
          {homeShop ? home : shop}
          <li>
            <Link onClick={handleHomeShopReset} to="/">
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleHomeShopReset} to="/">
              Sign in
            </Link>
          </li>
          <li>
            <Link onClick={handleHomeShopReset} to="/">
              Cart
            </Link>
          </li>
        </ul>

        {/* mobile */}

        <div className="mobile-nav">
          <div className="navbar-icon">
            <NavIcon className="focusable" onClick={handleBurgerMenu} />
          </div>
          <div className="navbar-icon">
            <Link to="/">
              <CartIcon />
            </Link>
          </div>
        </div>
        {burgerMenu && burger}
      </nav>
    </>
  );
}

export default Navbar;
