import "../AdminSectionCSS/AdminOrderDetailsCSS.css";
import vegetableImage from "../Assets/vegetable.png";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminOrderDetails() {

  // All Order Store in useState
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/getAllorderData/getAllorderData");

        const formattedOrders = response.data.data.map(order => {
          return {
            items: order.cartItems.map(
              item => `${item.productName} ${item.productPrice} x ${item.quantity}`
            ),
            customer: order.userId || "Guest", // or fetch user details separately
            address: order.address,
            phone: "N/A", // Add phone to schema if needed
            price: `$${order.totalAmount}`,
            method: order.payment?.method || "COD",
            date: new Date(order.orderAt).toLocaleDateString(),
            payment: order.status
          };
        });

        setOrders(formattedOrders);
      } catch (error) {
        console.error(error.message);
        toast.error("All Order Details Not Get");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="OrdersDetailsMainDiv">
      <div className="orders-container">
        <h2>Orders List</h2>
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-left">
              <img src={vegetableImage} alt="icon" className="order-icon" />
              <div className="order-items">
                {order.items.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
            <div className="order-center">
              <p><strong>{order.customer}</strong></p>
              <p>{order.address}</p>
              <p>{order.phone}</p>
            </div>
            <div className="order-right">
              <p><strong>{order.price}</strong></p>
              <p>Method: {order.method}</p>
              <p>Date: {order.date}</p>
              <p>Payment: {order.payment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrderDetails;
