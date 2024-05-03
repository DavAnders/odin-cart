import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import "/src/styles/HomePage.css";

function HomePage({ cartCount, onCheckout }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        const randomIndexes = Array.from({ length: 2 }, () =>
          Math.floor(Math.random() * products.length)
        );
        const randomImages = randomIndexes.map(
          (index) => products[index].image
        );
        setImages(randomImages);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <div>
      <NavBar cartCount={cartCount} onCheckout={onCheckout} />
      <main className="homepage">
        <h1>Welcome to Our Store</h1>
        <p>Find the best products at unbeatable prices!</p>
        <div className="feature-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt="Random Product" />
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
