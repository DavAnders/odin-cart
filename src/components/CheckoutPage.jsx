import ShoppingCart from "./ShoppingCart";

function CheckoutPage({ cartItems, onCheckout }) {
  return (
    <div>
      <h1>Checkout</h1>
      <ShoppingCart cartItems={cartItems} onCheckout={onCheckout} />
    </div>
  );
}

export default CheckoutPage;
