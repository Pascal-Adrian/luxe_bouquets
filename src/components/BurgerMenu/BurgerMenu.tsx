import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";
import LegalInfo from "../LegalInfo/LegalInfo";
import CloseIcon from "/src/assets/icons/icons-300/close_FILL0_wght300_GRAD0_opsz24.svg?react";

interface BurgerMenuProps {
  closeBurgerMenu: () => void;
}

function BurgerMenu({ closeBurgerMenu }: BurgerMenuProps) {
  return (
    <div id="burger-menu">
      <div className="burger-menu-usefull">
        <div className="burger-menu-close">
          <CloseIcon
            onClick={closeBurgerMenu}
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
            <Link to="/about">
              <h5>About</h5>
            </Link>
          </li>
        </ul>
        <LegalInfo className="burger-menu-legals" />
        <SocialLinks className="burger-menu-socials" />
      </div>
    </div>
  );
}

export default BurgerMenu;
