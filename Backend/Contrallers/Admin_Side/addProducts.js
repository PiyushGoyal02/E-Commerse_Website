const addproductsModel = require("../../Model/AdminAddProducts");
// const cloudinary = require("../../Config/CloudinaryConfig");

// Add new product with image
exports.addProducts = async (req, res) => {
  try {
    const { productName, descriptionText, productprice, productsquantity, category } = req.body;

    if (!productName || !descriptionText || !productprice || !productsquantity || !category) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Upload image to Cloudinary
    // const file = req.file; // multer stores file in req.file
    // if (!file) {
    //   return res.status(400).json({ success: false, message: "Image file is required" });
    // }

    // const uploadedImage = await cloudinary.uploader.upload(file.path, {
    //   folder: "ecommerce-products",
    // });

    // Create new product
    const newProduct = new addproductsModel({
      productName,
      descriptionText,
      productprice,
      productsquantity,
      category,
    //   productImage: uploadedImage.secure_url, // save Cloudinary image URL
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
