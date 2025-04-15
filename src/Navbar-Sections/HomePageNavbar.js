import "../Css-Code/HomePageNavbarCSS.css";
import ECommersImage from "../Assets/E-CommersShooping.png";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";
import PersonImage from "../Assets/1724930.png";
import { useNavigate } from "react-router-dom";

function HomePageNavbar() {

    const Navigator = useNavigate();

    return (
        <div className="Navbar-Section">
            {/* Logo */}
            <div onClick={() => Navigator('/homepage')}>
                <img src={ECommersImage} className="navbar-logo" alt="GreenCart Logo" />
            </div>

            <div className="OptionBar-SearchBar-Icons">
                {/* Center Navigation + Search */}
                <div className="Options-SearchBar">
                    <div className="options-bar">
                        <p onClick={() => Navigator('/homepage')}>Home</p>
                        <p onClick={() => Navigator('/allproductsui')}>All Product</p>
                        <p onClick={() => Navigator('/aboutUs')}>About Us</p>
                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="Search products" />
                        <button type="submit">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Cart and Profile */}
                <div className="icons-section">
                    <div className="cart-icon">
                        <AiOutlineShoppingCart />
                        <span className="cart-count">0</span>
                    </div>
                    <div>
                        <img src={PersonImage} className="PersonImage" alt="User" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageNavbar;
