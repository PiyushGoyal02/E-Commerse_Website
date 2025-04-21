import "../Css-Code/CartSectionCSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import CrossPNG from "../Assets/remove.png";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

function CartSection() {
  const Navigator = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const price = cartItems.reduce((acc, item) => acc + item.productprice * item.quantity, 0);
  const tax = (price * 0.02).toFixed(2);
  const total = (price + parseFloat(tax)).toFixed(2);

  return (
    <div>
      <HomePageNavbar />

      <div className="shopping-container">
        <div className="cart">
          <h2>
            Shopping Cart <span className="green">{cartItems.length} Items</span>
          </h2>

          <div className="Products-Subtotal-Action-text">
            <h4>Product Details</h4>
            <h4>Subtotal</h4>
            <h4>Action</h4>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <div className="item-left">
                  <img src={item.productImages} alt={item.productName} />
                  <div className="details">
                    <h5>{item.productName}</h5>
                    <p>Weight: N/A</p>
                    <select
                      className="qtySelect"
                      value={item.quantity}
                      onChange={(e) => {
                        const updatedCart = cartItems.map((prod) =>
                          prod._id === item._id
                            ? { ...prod, quantity: parseInt(e.target.value) }
                            : prod
                        );
                        localStorage.setItem("cart", JSON.stringify(updatedCart));
                        setCartItems(updatedCart);
                      }}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="subtotal">₹{item.productprice * item.quantity}</div>
                <img
                  src={CrossPNG}
                  alt="remove"
                  className="removeIMG"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            ))}
          </div>

          <div className="ContinuesShoopingDiv">
            <FaLongArrowAltLeft />
            <p onClick={() => Navigator("/allproductsui")} className="continue">
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
            <span>₹{price}</span>
          </div>
          <div className="costs">
            <p>Shipping Fee</p>
            <span className="green">Free</span>
          </div>
          <div className="costs">
            <p>Tax (2%)</p>
            <span>₹{tax}</span>
          </div>

          <div className="total">
            <p>Total Amount:</p>
            <span>₹{total}</span>
          </div>

          <button className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
