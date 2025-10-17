import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Glitter Bottles</h1>
      <nav className="header__nav">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/shop" className="nav__link">
          Shop
        </Link>
        <Link to="/custom-order" className="nav__link">
          Custom Order
        </Link>
        <Link to="/contact" className="nav__link">
          Contact
        </Link>
        <Link to="/about" className="nav__link">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
