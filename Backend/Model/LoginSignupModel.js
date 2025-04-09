const mongoose = require("mongoose");

const UserAuth = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    surname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    accountType: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
    },
  },
);

module.exports = mongoose.model("UserAuth", UserAuth);
