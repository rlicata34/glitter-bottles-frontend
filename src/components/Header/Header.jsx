import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart-icon.png";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header__container">
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
          <Link to="/cart" className="nav__link">
            <img src={cartIcon} alt="Cart Icon" className="nav__icon" />
            {cartCount > 0 && <span className="nav__badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
