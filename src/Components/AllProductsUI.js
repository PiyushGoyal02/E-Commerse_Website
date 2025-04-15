import "../Css-Code/AllProductsUICSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import Footer from "./Footer.js"

// Importing Product Images
import Maggie from "../Assets/Maggie2min.webp";
import Potato from "../Assets/Patato.jpg";
import Spinach from "../Assets/Spinach.jpg";
import Tomato from "../Assets/Tamato.jpg";
import Onion from "../Assets/Onion.jpg";
import Carrot from "../Assets/Carrote.jpg";
import AmulMilk from "../Assets/AmulMilk.webp";
import Butter from "../Assets/Butter.jpg";
import Mango from "../Assets/Mango.jpg";
import CocaCola from "../Assets/CocaCola.jpg";
import BasmatiRice from "../Assets/0243551_pran-basmati-rice-1-kg.jpeg";
import Guava from "../Assets/Guava.avif";
import Apple from "../Assets/Apple.jpg";
import TomatoSauce from "../Assets/TomatoSous.avif";
import Dragonfruit from "../Assets/DrangenFruite.jpg";
import Kiwi from "../Assets/Kiwi.jpg";
import Lemon from "../Assets/Lemon.avif";
import Mint from "../Assets/Mint.jpg";
import Orange from "../Assets/orange.jpg";

function AllProductsUI() {
  const products = [
    {
      id: 1,
      name: "Potato 500g",
      image: Potato,
      category: "Vegetables",
      rating: 4,
      price: 35,
      originalPrice: 40,
    },
    {
      id: 2,
      name: "Tomato 1kg",
      image: Tomato,
      category: "Vegetables",
      rating: 5,
      price: 28,
      originalPrice: 30,
    },
    {
      id: 3,
      name: "Carrot 500g",
      image: Carrot,
      category: "Vegetables",
      rating: 4,
      price: 44,
      originalPrice: 50,
    },
    {
      id: 4,
      name: "Spinach 500g",
      image: Spinach,
      category: "Vegetables",
      rating: 4,
      price: 15,
      originalPrice: 18,
    },
    {
      id: 5,
      name: "Onion 500g",
      image: Onion,
      category: "Vegetables",
      rating: 5,
      price: 45,
      originalPrice: 50,
    },
    {
      id: 6,
      name: "Coca-Cola 1.5L",
      image: CocaCola,
      category: "Grocery",
      rating: 4,
      price: 65,
      originalPrice: 70,
    },
    {
      id: 7,
      name: "Basmati Rice 5kg",
      image: BasmatiRice,
      category: "Grocery",
      rating: 5,
      price: 420,
      originalPrice: 450,
    },
    {
      id: 8,
      name: "Maggie Noodles 280g",
      image: Maggie,
      category: "Grocery",
      rating: 4,
      price: 48,
      originalPrice: 55,
    },
    {
      id: 9,
      name: "Apple 1kg",
      image: Apple,
      category: "Fruits",
      rating: 5,
      price: 180,
      originalPrice: 200,
    },
    {
      id: 10,
      name: "Mango 1kg",
      image: Mango,
      category: "Fruits",
      rating: 5,
      price: 100,
      originalPrice: 120,
    },
    {
      id: 11,
      name: "Guava 1kg",
      image: Guava,
      category: "Fruits",
      rating: 4,
      price: 70,
      originalPrice: 80,
    },
    {
      id: 12,
      name: "Amul Milk 1L",
      image: AmulMilk,
      category: "Grocery",
      rating: 5,
      price: 64,
      originalPrice: 70,
    },
    {
      id: 13,
      name: "Lemon 250g",
      image: Lemon,
      category: "Vegetables",
      rating: 4,
      price: 20,
      originalPrice: 25,
    },
    {
      id: 14,
      name: "Butter 150g",
      image: Butter,
      category: "Grocery",
      rating: 5,
      price: 75,
      originalPrice: 80,
    },
    {
      id: 15,
      name: "Tomato Sauce 500g",
      image: TomatoSauce,
      category: "Grocery",
      rating: 4,
      price: 55,
      originalPrice: 60,
    },
    {
      id: 16,
      name: "Dragon Fruit 1kg",
      image: Dragonfruit,
      category: "Fruits",
      rating: 4,
      price: 150,
      originalPrice: 170,
    },
    {
      id: 17,
      name: "Kiwi 500g",
      image: Kiwi,
      category: "Fruits",
      rating: 4,
      price: 95,
      originalPrice: 110,
    },
    {
      id: 18,
      name: "Mint 100g",
      image: Mint,
      category: "Vegetables",
      rating: 3,
      price: 15,
      originalPrice: 20,
    },
    {
      id: 19,
      name: "Orange 1kg",
      image: Orange,
      category: "Fruits",
      rating: 4,
      price: 90,
      originalPrice: 100,
    },
  ];

  return (
    <div>
      <HomePageNavbar />
      <div className="veggie-section">
        <h2>ALL PRODUCTS</h2>
        <div className="veggie-grid">
          {products.map((product) => (
            <div className="veggie-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="category">{product.category}</p>
              <h3>{product.name}</h3>
              <div className="stars">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
                <span className="count">({product.rating})</span>
              </div>
              <div className="price">
                <span className="new">₹{product.price}</span>
                <span className="old">₹{product.originalPrice}</span>
              </div>
              <button className="add-btn">🛒 Add</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AllProductsUI;
