const multer = require("multer");  // It's a middleware that runs after the image is updated on the frontend UI
const { CloudinaryStorage } = require("multer-storage-cloudinary");  // It works to save our image directly on Cloudinary, not in the local file
const cloudinary = require("../Config/CloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ecommerce_products",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;