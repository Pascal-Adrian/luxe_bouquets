import { Link } from "react-router-dom";

interface LegalInfoProps {
  className?: string;
}

function LegalInfo({ className }: LegalInfoProps) {
  return (
    <ul className={className}>
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
  );
}

export default LegalInfo;
