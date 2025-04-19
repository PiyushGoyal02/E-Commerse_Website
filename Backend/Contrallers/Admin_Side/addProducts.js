const addproductsModel = require("../../Model/AdminAddProducts");

// Add new product with image
exports.addProducts = async (req, res) => {
  try {
    const { productName, descriptionText, productprice, productsquantity, category, productImages } = req.body;

    if (!productImages || !productName || !descriptionText || !productprice || !productsquantity || !category) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Create new product
    const newProduct = new addproductsModel({
      productName,
      descriptionText,
      productprice,
      productsquantity,
      category,
      productImages
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Server error, product not added",
    });
  }
};
