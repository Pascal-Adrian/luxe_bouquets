import { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "/src/assets/icons/icons-300/menu_FILL0_wght300_GRAD0_opsz24.svg?react";
import CartIcon from "/src/assets/icons/icons-300/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg?react";
import CloseIcon from "/src/assets/icons/icons-300/close_FILL0_wght300_GRAD0_opsz24.svg?react";
import SocialLinks from "../SocialLinks/SocialLinks";
import LegalInfo from "../LegalInfo/LegalInfo";
import Cart from "../Cart/Cart";

function Navbar() {
  const [navbarState, setNavbarState] = useState<{
    burgerMenu: boolean;
    homeShop: boolean;
    cart: boolean;
  }>({ burgerMenu: false, homeShop: false, cart: false });

  const handleHomeShop = () => {
    setNavbarState({ ...navbarState, homeShop: !navbarState.homeShop });
  };

  const handleHomeShopReset = () => {
    if (navbarState.homeShop) {
      setNavbarState({ ...navbarState, homeShop: false });
    }
  };

  const handleBurgerMenu = () => {
    setNavbarState({ ...navbarState, burgerMenu: !navbarState.burgerMenu });
  };

  const handleCart = () => {
    setNavbarState({ ...navbarState, cart: !navbarState.cart });
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
          <CloseIcon
            onClick={handleBurgerMenu}
            className="burger-menu-close-icon"
          />
        </div>
        <ul className="burger-menu-main">
          <li>
            <Link to="/">
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h5>Sign in</h5>
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <h5>Shop</h5>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h5>Services</h5>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h5>Contact</h5>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h5>About</h5>
            </Link>
          </li>
        </ul>
        <LegalInfo className="burger-menu-legals" />
        <SocialLinks className="burger-menu-socials" />
      </div>
    </div>
  );

  return (
    <>
      <div className="nav-bumper"></div>
      <nav>
        {/* desktop */}
        <ul className="desktop-nav">
          {navbarState.homeShop ? home : shop}
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
            <div onClick={handleCart} style={{ cursor: "pointer" }}>
              Cart
            </div>
          </li>
        </ul>

        {/* mobile */}

        <div className="mobile-nav">
          <div className="navbar-icon" onClick={handleBurgerMenu}>
            <NavIcon className="focusable" />
          </div>
          <div className="navbar-icon">
            <div onClick={handleCart}>
              <CartIcon />
            </div>
          </div>
        </div>
        {navbarState.burgerMenu && burger}
        {navbarState.cart && <Cart turnOffCart={handleCart} />}
      </nav>
    </>
  );
}

export default Navbar;
