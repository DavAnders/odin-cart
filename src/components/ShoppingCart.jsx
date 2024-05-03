import { useNavigate } from "react-router-dom";
import "/src/styles/ShoppingCart.css";

function ShoppingCart({ cartItems, onCheckout }) {
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="shopping-cart">
      <div className="title">
        <h2>Your Shopping Cart</h2>
      </div>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-title">
              <h3>{item.title}</h3>
            </div>
            <div className="details">
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice}</p>
        <div className="buttons">
          <button onClick={handleBack}>Back</button>
          <button onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
