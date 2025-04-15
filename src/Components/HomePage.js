import "../Css-Code/HomePageCSS.css";
import Milk from "../Assets/MilkAndDairy.jpg";
import Vegetables from "../Assets/vegetables.jpg";
import Fruits from "../Assets/MixFruits.jpg";
import Bread from "../Assets/bakery.jpg";
import Colddrink from "../Assets/JuiceBottels.jpeg";
import Maggie from "../Assets/Maggie.webp";
import Pluces from "../Assets/PlucesAndGrain.webp";
import Patato from "../Assets/Patato.jpg";
import Spinach from "../Assets/Spinach.jpg";
import Tamato from "../Assets/Tamato.jpg";
import Onion from "../Assets/Onion.jpg";
import Carrote from "../Assets/Carrote.jpg";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import HomepageSlideImages from "./HomepageSlideImages";
import Footer from "./Footer";
import HappyFamilyImage from "../Assets/HappyFresh_ecommerce_TEM1332_theedgemarkets.webp";

function HomePage() {
  const Images = [Vegetables, Fruits, Colddrink, Maggie, Bread, Milk, Pluces];

  const veggies = [
    {
      id: 1,
      name: "Potato 500g",
      image: Patato,
      category: "Vegetables",
      rating: 4,
      price: 35,
      originalPrice: 40,
    },
    {
      id: 2,
      name: "Tomato 1kg",
      image: Tamato,
      category: "Vegetables",
      rating: 5,
      price: 28,
      originalPrice: 30,
    },
    {
      id: 3,
      name: "Carrot 500g",
      image: Carrote,
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
  ];

  return (
    <div className="HomePageMainDiv">
      <HomePageNavbar />
      <div>
        <HomepageSlideImages />

        <div className="Categories-text-wrapper">
          <h1 className="Categories-text">Categories</h1>
        </div>

        <div className="Images-SectionDiv">
          {Images.map((image, index) => (
            <img className="Images" key={index} src={image} />
          ))}
        </div>

        <div className="veggie-section">
          <h2>ORGANIC VEGGIES</h2>
          <div className="veggie-grid">
            {veggies.map((veg) => (
              <div className="veggie-card" key={veg.id}>
                <img src={veg.image} alt={veg.name} />
                <p className="category">{veg.category}</p>
                <h3>{veg.name}</h3>
                <div className="stars">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                  <span className="count">(4)</span>
                </div>
                <div className="price">
                  <span className="new">${veg.price}</span>
                  <span className="old">${veg.originalPrice}</span>
                </div>
                <button className="add-btn">🛒 Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="happyFamilyImageDiv">
        <img src={HappyFamilyImage} className="HappyFamilyImage" />
      </div>

      <div className="newsletter-container">
        <h2 className="newsletter-title">Never Miss a Deal!</h2>
        <p className="newsletter-subtitle">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <div className="newsletter-input-group">
          <input
            type="email"
            placeholder="Enter your email id"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
