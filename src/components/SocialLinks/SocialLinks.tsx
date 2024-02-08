import InstagramIcon from "/src/assets/icons/icons-300/Brands/Instagram.svg?react";
import PinterestIcon from "/src/assets/icons/icons-300/Brands/Pinterest.svg?react";
import FacebookIcon from "/src/assets/icons/icons-300/Brands/Facebook.svg?react";
import TwitterIcon from "/src/assets/icons/icons-300/Brands/Twitter.svg?react";
import TelegramIcon from "/src/assets/icons/icons-300/Brands/Telegram.svg?react";

interface SocialLinksProps {
  className?: string;
}

function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <li>
        <a href="https://www.instagram.com/tomashuk01/" target="_blank">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="www.linkedin.com/in/adrian-pascal" target="_blank">
          <PinterestIcon />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/adrian.pascal.921" target="_black">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="www.linkedin.com/in/adrian-pascal" target="_blank">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="https://t.me/pascal_77777" target="_blank">
          <TelegramIcon />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
