const mongoose = require("mongoose");

const productOrder = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    cartId: {
      type: String,
    },
    cartItems: [
      {
        productId: {
          type: String,
        },
        productName: {
          type: String,
        },
        productPrice: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    totalAmount: {
      type: Number,
    },
    status: {
      type: String,
      default: "Pending",
    },
    address: {
      type: String,
    },
    razorpayOrderId: {
      type: String
    },
    orderAt: {
      type: Date,
      default: Date.now,
    },
    payment: {
      method: {
        type: String,
        default: "COD",
      },
    },
  }
);

module.exports = mongoose.model("Order", productOrder);