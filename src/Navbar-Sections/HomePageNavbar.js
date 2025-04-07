import "../Css-Code/HomePageNavbarCSS.css"
import ECommersImage from "../Assets/E-CommersShooping.png"
import { IoPersonSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { useState } from "react";


function HomePageNavbar (){
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div>
            <div className="Navbar-Section">
                <img
                    src={ECommersImage}
                    className="navbar-logo"
                />

                <div className="HoverOptions">
                    <p className="Options">NEW ARRIVALS</p>
                    <div className="dropdown">
                        <div className="Options">Men</div>
                        <ul className="dropdown-menu">
                            <li>Men Kurta</li>
                            <li>Men Jeans</li>
                            <li>Men Shirts</li>
                            <li>Men T-Shirts</li>
                        </ul>
                    </div>
                    <p className="Options">WOMEN'S</p>
                    <p className="Options">ELECTRINIC'S</p>
                </div>

                <div className="IconsSection">
                    <IoPersonSharp />
                    <IoSearch />
                    <IoBag />
                </div>
            </div>
        </div>
    )
}

export default HomePageNavbar;