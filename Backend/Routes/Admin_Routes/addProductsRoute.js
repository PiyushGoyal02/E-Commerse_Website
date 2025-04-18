const express = require("express")
const route = express.Router();

const { addProducts } = require("../../Contrallers/Admin_Side/addProducts")

route.post("/addProducts", addProducts)

module.exports = route