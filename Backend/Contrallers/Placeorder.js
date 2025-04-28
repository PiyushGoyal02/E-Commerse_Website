require("dotenv").config();
const Razorpay = require("razorpay");
const OrderModelSchema = require("../Model/ProductOrderModel");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.placeOrder = async (req, res) => {
  try {
    const { userId, cartId, cartItems, totalAmount, address, payment } = req.body;

    // Validation
    if (!userId || !cartId || !cartItems || !totalAmount || !address) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    const amountInPaise = Math.round(totalAmount * 100);  // Convert to paise and round

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 100000)}`,
    });

    const paymentMethod = payment.method || "COD"; // Default to "COD" if no method provided

    // Create new order in the database
    const newOrder = new OrderModelSchema({
      userId,
      cartId,  // Make sure this is a string (not an array)
      cartItems,
      totalAmount,
      razorpayOrderId: razorpayOrder.id,
      address,
      payment: {
        method: paymentMethod,
      },
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Your Order Successfully Placed",
      razorpayOrderId: razorpayOrder.id,
      orderId: newOrder._id,
      amount: totalAmount,
      orderData: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(501).json({
      success: false,
      message: "Your order has not been placed.",
    });
  }
};
