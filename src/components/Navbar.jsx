import { Link } from "react-router-dom";
import "/src/styles/NavBar.css";

function NavBar({ cartCount, onCheckout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/shop" className="nav-link">
        Shop
      </Link>
      <div className="cart-info">
        <span className="cart-count">Cart: {cartCount} items</span>
        <button onClick={onCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
