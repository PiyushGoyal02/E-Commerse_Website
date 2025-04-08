const mongoose = require("mongoose")

const UserAuth = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true
        },

        surname : {
            type : String,
            require : true
        },

        email : {
            type : String,
            require : true
        },

        password : {
            type : String,
            require : true
        }
    }
)

module.exports = mongoose.model("UserAuth", UserAuth)