import axios from "axios";
import "../Css-Code/OrderDetailsUserSideCSS.css";
import toast from "react-hot-toast";
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import { useEffect, useState } from "react";

function OrderDetailsUserSide() {
  const [orderDetails, setOrderDetails] = useState([]);

  const LoginUserId = localStorage.getItem("userLoginUserId");
  const SignupUserId = localStorage.getItem("userSignupUserid");
  const OrderDetailsUserId = LoginUserId || SignupUserId;

  const getAllOrderDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/getAllorderData/getAllorderData",
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const orderData = response.data.data;
      const userOrders = orderData.filter(
        (item) => item.userId === OrderDetailsUserId
      );
      setOrderDetails(userOrders);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to fetch order details");
    }
  };

  useEffect(() => {
    getAllOrderDetails();
  }, []);

  return (
    <div>
      <HomePageNavbar />
      <div className="order-summary-container">
        <h2 className="YourOrder">Your Orders</h2>
        {orderDetails.length === 0 ? (
          <p className="NoOrderFound">No orders found.</p>
        ) : (
          <div className="table-container">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Address</th>
                  <th>Items</th>
                  <th>Payment</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((order, index) => (
                  <tr key={index}>
                    <td>{order._id}</td>
                    <td>{new Date(order.orderAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`status-badge ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>{order.address}</td>
                    <td>
                      <ul className="items-list">
                        {order.cartItems.map((item, idx) => (
                          <li key={idx}>
                            {item.productName} (x{item.quantity}) – ₹
                            {item.productPrice}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{order.payment.method}</td>
                    <td>
                      <strong>₹{order.totalAmount}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetailsUserSide;
