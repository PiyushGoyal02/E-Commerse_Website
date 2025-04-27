const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    products: [
        {
            name: String,
            price: Number,
            quantity: {
                type: Number,
                default: 1,
            },
            productId: String,
            image: String,
        },
    ],
    totalAmount: {
        type: Number,
    },
});

module.exports = mongoose.model("CartItem", cartItemSchema);
