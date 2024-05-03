import NavBar from "/src/components/Navbar.jsx";
import ProductList from "../components/ProductList";

function ShopPage({ cartItems, onAddToCart, onCheckout }) {
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <NavBar cartCount={totalCartItems} onCheckout={onCheckout} />
      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
}

export default ShopPage;
