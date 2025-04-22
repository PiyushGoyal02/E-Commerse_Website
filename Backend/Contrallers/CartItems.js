const cartItemModel = require("../Model/CartItemModel");

exports.cartItem = async (req, res) => {
  try {
    const { userId, products } = req.body;
    console.log(userId, "userId1 in backend")
    console.log(products,"products1 in backend")

    if (!userId || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "All details aren't getting. Please check!",
      });
    }

    const newCart = new cartItemModel({
      userId,
      products,
    });
    console.log(newCart, "NewCartSection");

    await newCart.save();

    res.status(201).json({
      success: true,
      message: "Cart Items Successfully Updated",
      data: newCart,
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Your items aren't adding to the cart database. Please try again!",
    });
  }
};
