import "../Css-Code/AllProductsUICSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllProductsUI() {
  const Navigator = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/getAllProductsDetails/getAllProducts`,
          { withCredentials: true }
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <div>
      <HomePageNavbar />
      <div className="veggie-section">
        <h2>ALL PRODUCTS</h2>
        <div className="veggie-grid">
          {products.map((product) => (
            <div
              onClick={() => Navigator("/singleproductsui", { state: { product } })}
              className="veggie-card"
              key={product._id}
            >
              <img src={product.productImages} alt={product.productName} />
              <p className="category">{product.category}</p>
              <h3>{product.productName}</h3>
              <div className="stars">
                {"★".repeat(4)}
                {"☆".repeat(1)}
                <span className="count">(4)</span>
              </div>
              <div className="price">
                <span className="new">₹{product.productprice}</span>
                <span className="old">₹{parseInt(product.productprice) + 10}</span>
              </div>
              <button
                className="add-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                🛒 Add
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProductsUI;
