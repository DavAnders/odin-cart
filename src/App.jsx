import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/Homepage";
import ShopPage from "./components/ShopPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const nav = useNavigate();

  const handleCheckout = () => {
    // not implementing actual checkout logic
    nav("/checkout");
  };

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex >= 0) {
        // Update the existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...prevItems[existingItemIndex],
          quantity: prevItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage cartCount={cartItems.length} onCheckout={handleCheckout} />
        }
      />
      <Route
        path="/shop"
        element={
          <ShopPage
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onCheckout={handleCheckout}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage cartItems={cartItems} onCheckout={handleCheckout} />
        }
      />
    </Routes>
  );
}

export default App;
