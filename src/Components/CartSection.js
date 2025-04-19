import "../Css-Code/CartSectionCSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import Pluces from "../Assets/PlucesAndGrain.webp";
import Patato from "../Assets/Patato.jpg";
import Spinach from "../Assets/Spinach.jpg";
import CrossPNG from "../Assets/remove.png"
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function CartSection() {

    const Navigator = useNavigate();
  const products = [
    {
      id: 1,
      name: "Carrot 500g",
      price: 44,
      image: Pluces,
    },
    {
      id: 2,
      name: "Brown Bread 400g",
      price: 35,
      image: Patato,
    },
    {
      id: 3,
      name: "Banana 1kg",
      price: 45,
      image: Spinach,
    },
  ];

  const price = products.reduce((acc, item) => acc + item.price, 0);
  const tax = (price * 0.02).toFixed(2);
  const total = (price + parseFloat(tax)).toFixed(2);

  return (
    <div>
      <HomePageNavbar />

      <div className="shopping-container">
        <div className="cart">
          <h2>
            Shopping Cart <span className="green">{products.length} Items</span>
          </h2>

          <div className="Products-Subtotal-Action-text">
            <h4>Product Details</h4>
            <h4>Subtotal</h4>
            <h4>Action</h4>
          </div>

          <div className="cart-items">
            {products.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-left">
                  <img src={item.image} alt={item.name} />
                  <div className="details">
                    <h5>{item.name}</h5>
                    <p>Weight: N/A</p>
                    <select className="qtySelect">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>

                  </div>
                </div>
                <div className="subtotal">${item.price}</div>
                <img src={CrossPNG} alt="remove" className="removeIMG" />
              </div>
            ))}
          </div>

          <div className="ContinuesShoopingDiv">
            <FaLongArrowAltLeft />
            <p onClick={() => Navigator('/allproductsui')} className="continue">
                Continue Shopping
            </p>
          </div>

        </div>

        <div className="summary">
          <h3>Order Summary</h3>

          <div className="row">
            <p>DELIVERY ADDRESS</p>
            <span className="change">Change</span>
          </div>
          <p className="gray">No address found</p>

          <p className="bold">PAYMENT METHOD</p>
          <select className="Cash-UPI-Card-Dropdown">
            <option>Cash On Delivery</option>
            <option>Credit/Debit Card</option>
            <option>UPI ID</option>
          </select>

          <div className="costs">
            <p>Price</p>
            <span>${price}</span>
          </div>
          <div className="costs">
            <p>Shipping Fee</p>
            <span className="green">Free</span>
          </div>
          <div className="costs">
            <p>Tax (2%)</p>
            <span>${tax}</span>
          </div>

          <div className="total">
            <p>Total Amount:</p>
            <span>${total}</span>
          </div>

          <button className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
