import "../AdminSectionCSS/AdminOrderDetailsCSS.css";
import vegetableImage from "../Assets/vegetable.png"

function AdminOrderDetails() {
  const orders = [
    {
      items: ["Tomato 1kg x 1", "Spinach 500g x 1"],
      customer: "Great Stack",
      address: "Street 123, Main City, New State, 123456, IN",
      phone: "1234567890",
      price: "$43",
      method: "COD",
      date: "3/25/2025",
      payment: "Pending",
    },
    {
      items: ["Carrot 500g x 2"],
      customer: "Great Stack",
      address: "Street 123, Main City, New State, 123456, IN",
      phone: "1234567890",
      price: "$89",
      method: "Online",
      date: "3/25/2025",
      payment: "Paid",
    },
    {
      items: ["Tomato 1kg x 2", "Potato 500g x 1"],
      customer: "Avinash Kr",
      address: "Whitefield, Bangalore, Karnataka, 560066, India",
      phone: "0123456789",
      price: "$92",
      method: "COD",
      date: "4/3/2025",
      payment: "Pending",
    },
  ];

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
