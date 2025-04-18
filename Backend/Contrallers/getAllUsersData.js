const ModelSchema = require("../Model/LoginSignupModel")

exports.allUsersDetails = async (req, res) => {
    try{

        const userData = await ModelSchema.find({accountType: 'user'}).select('name surname email address pincode country number')

        if(!userData){
            res.status(401).json(
                {
                    success: false,
                    message: "Your user data not get properly..."
                }
            )
        }

        res.status(201).json(
            {
                success: true,
                message: "Your user data successfully get",
                data: userData
            }
        )
    }catch(error){
        console.log(error.message)
        res.status(501).json(
            {
                success: false,
                message: "You Can't Get All Details, so please try Again"
            }
        )
    }
}