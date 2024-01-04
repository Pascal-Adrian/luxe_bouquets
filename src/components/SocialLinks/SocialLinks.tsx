import InstagramIcon from "/src/assets/icons/Brands/Instagram.svg?react";
import PinterestIcon from "/src/assets/icons/Brands/Pinterest.svg?react";
import FacebookIcon from "/src/assets/icons/Brands/Facebook.svg?react";
import TwitterIcon from "/src/assets/icons/Brands/Twitter.svg?react";
import TelegramIcon from "/src/assets/icons/Brands/Telegram.svg?react";

interface SocialLinksProps {
  className?: string;
}

function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={`social-links ${className || ""}`}>
      <li>
        <a href="https://www.instagram.com/tomashuk01/" target="_black">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="" target="_black">
          <PinterestIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/people/Том-Томащук/pfbid02hMSJJJPZiZLcnLWdpRL7V3Y3DAxusyyzripEEKxkbBD2ciWSUjeAKwcbcoX1dgBjl/"
          target="_black"
        >
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/tomtomashcuk" target="_black">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="https://t.me/Tomashshuk" target="_black">
          <TelegramIcon />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
