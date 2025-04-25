import "../Css-Code/CartSectionCSS.css";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function CartSection() {
  const Navigator = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems, "finalCartSection")

  /* If CartSection page Load then I will get cart in localStorage.
  IF data is available we will save cartItems useState rether then
  If data is not present we get empty array */
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);


  /* When the delete button is clicked, it filters (removes) the item from the cart using its _id.
  Then it saves the updated cart back to localStorage and updates the UI using setCartItems(). */
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // The purpose of `reduce()` is to calculate the total of all items.
  // `toFixed(2)` means rounding off the number to 2 decimal places (e.g., 17.599 ➝ 17.60).
  /* The price and tax are being added together.
    Important:** Tax is a string (because of `.toFixed()`), so it's converted to a number using `parseFloat(tax)`.
    he final total is also rounded using `.toFixed(2)`. 
  */
  const price = cartItems.reduce((acc, item) => acc + item.productprice * item.quantity, 0);
  const tax = (price * 0.02).toFixed(2);
  const total = (price + parseFloat(tax)).toFixed(2);

  const cartItemsHandler = async () => {

    const userId = localStorage.getItem("userLoginUserId") || localStorage.getItem("userSignupUserid");
    console.log(userId)

    const combinedData = {
      userId,
      products: cartItems.map((item) => ({
        name: item.productName,
        price: item.productprice,
        quantity: item.quantity,
        image: item.productImages,
        productId: item._id,
      })),
    };
    console.log(combinedData, "CombinedData")

    try{
      const cartResponse = await axios.post(`http://localhost:4000/api/v1/cartItemsAdd/cartItemAdd`,
       combinedData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      console.log(cartResponse, "cartResponseFrontend")
      toast.success("Item added in backend!")

      
    }catch(error){
      console.log(error.message)
      toast.error("Cart Item aren't adding")
    }
  }
  

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
                <div onClick={() => removeFromCart(item._id)}>
                  <button className="removeIMG"><MdDeleteForever/></button>
                </div>
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

          <button onClick={cartItemsHandler} className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
