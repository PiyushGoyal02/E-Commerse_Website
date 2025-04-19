const mongoose = require("mongoose");

const addProducts = new mongoose.Schema (
    {
        productName: {
            type: String,
            required: true,
        },

        descriptionText: {
            type: String,
            required: true,
        },

        productprice : {
            type: String,
            required: true
        },

        productsquantity : {
            type: String,
            required: true
        },

        category : {
            type: String,
            required: true
        },

        productImages: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model("addProducts", addProducts);