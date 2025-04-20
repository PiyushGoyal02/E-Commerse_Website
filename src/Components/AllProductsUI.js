import "../Css-Code/AllProductsUICSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";
import axios from "axios";

function AllProductsUI() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/getAllProductsDetails/getAllProducts`,
          { withCredentials: true }
        );
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <HomePageNavbar />
      <div className="veggie-section">
        <h2>ALL PRODUCTS</h2>
        <div className="veggie-grid">
          {products.map((product, index) => (
            <div className="veggie-card" key={product._id}>
              <img
                src={product.productImages}
                alt={product.productName}
              />
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
              <button className="add-btn">🛒 Add</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProductsUI;