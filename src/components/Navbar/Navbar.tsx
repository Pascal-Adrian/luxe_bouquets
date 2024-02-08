import { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "/src/assets/icons/icons-300/menu_FILL0_wght300_GRAD0_opsz24.svg?react";
import CartIcon from "/src/assets/icons/icons-300/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg?react";
import Cart from "../Cart/Cart";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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

  return (
    <>
      <div className="nav-bumper"></div>
      <nav>
        {/* desktop */}
        <ul className="desktop-nav">
          {navbarState.homeShop ? home : shop}
          <li>
            <Link onClick={handleHomeShopReset} to="/about">
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
        {navbarState.burgerMenu && (
          <BurgerMenu closeBurgerMenu={handleBurgerMenu} />
        )}
        {navbarState.cart && <Cart turnOffCart={handleCart} />}
      </nav>
    </>
  );
}

export default Navbar;
