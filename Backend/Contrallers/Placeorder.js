require("dotenv").config()
const Razorpay = require("razorpay");
const OrderModelSchema = require("../Model/ProductOrderModel")

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.placeOrder = async (req, res) => {
  try {
    const { userId, cartId, cartItems, totalAmount, address } = req.body;

    const razorpayOrder = await razorpay.orders.create({
      amount: totalAmount * 100,  // It's paise (1 INR = 100 paise)
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 100000)}`,   // It's unique Receipt Id ( It's automaticaly generated)
    });

    const newOrder = new OrderModelSchema({
        userId,
        cartId,
        cartItems,
        totalAmount,
        razorpayOrderId: razorpayOrder.id,
        address,
        payment: {
            method: "COD",
        },
    });

    await newOrder.save();

    res.status(201).json(
        {
            success: true,
            message: "Your Order Successfully Placed",
            razorpayOrderId: razorpayOrder.id,
            orderId: newOrder._id,
            amount: totalAmount,
            orderData: newOrder
        }
    )

  }catch (error) {
    console.error("Error placing order:", error);
    res.status(501).json(
        {
            success: false,
            message: "Your order has not been placed."
        }
    )
  }
};