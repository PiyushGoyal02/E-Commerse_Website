const UserModel = require("../Model/UserLoginSignUp")
const JWT = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// SignUp section
exports.Signup = async (req, res) => {
    
    try {

        // fetch data from frontend
        const {name, surname, email, password} = req.body

        // Validation check
        if (!name || !surname || !email || !password){
            return res.status(401).json(
                {
                    success:false,
                    message:"Required all field."
                }
            )
        }

        // Check email in database
        const checkEmail = await UserModel.findOne({email})

        // Validation check for email in database
        if(checkEmail){
            return res.status(401).json(
                {
                    success:false,
                    message:"This email already exist.."
                }
            )
        }

        // It's Password hash like (splkoiuhshdg154pous)
        const hashPass = await bcrypt.hash(password, 10);
        console.log(hashPass);

        const userDetailsCreate = await UserModel.create(
            {
                name,
                surname,
                email,
                password:hashPass
            }
        );

        // Create a token
        const payLoad = {
            id: userDetailsCreate._id,
            email: userDetailsCreate.email
            // accountType: userDetailsCreate.accountType,
        }

        const token = JWT.sign(payLoad, process.env.JWT_SECRET,{
            expiresIn: '2h'
        })

        res.cookie('token', token, { httpOnly: true }).status(201).json({
            success: true,
            message: 'User registered successfully.',
            token,
            userDetailsCreate
        });

    }catch(error){
        console.log(error.message)
        return res.status(500).json(
            {
                success: false,
                message: "User can't create account, please try again!"
            }
        )
    }
}


// Login section
exports.Login = async (req, res) => {

    try{

        const {email, password} = req.body

        // Validation check
        if (!email || !password){
            return res.status(501).json(
                {
                    success:false,
                    message:"I need all field, so please fill all field"
                }
            )
        }

        const checkEmail = await UserModel.findOne({email})

        if(!checkEmail){
            return res.status(501).json(
                {
                    success:false,
                    message:"This email not available, So first create your account"
                }
            )
        }

        const JWTPayLoad = {
            email: checkEmail.email,
            id: checkEmail._id,
            // accountType: checkEmail.accountType
        }

        // Compare Password
        if (await bcrypt.compare(password, checkEmail.password)) {
            let token = JWT.sign(JWTPayLoad, process.env.JWT_SECRET, {
                expiresIn: "2h"
            });

            const CookieOptions = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };

            // Log the user ID
            console.log(`User logged in: ${checkEmail._id}`);

            // Cookie pass and return user ID in the response
            res.cookie("token", token, CookieOptions).status(200).json({
                success: true,
                message: "Login Successfully",
                token,
                userId: checkEmail._id, // Include user ID in the response
                checkEmail
            });

        } else {
            return res.status(401).json({
                success: false,
                message: "Password is Incorrect."
            });
        }


    }catch(error){
        console.log(error.message)
        return res.status(501).json(
            {
                success:false,
                message:"Can't Login Successfully, so please try again!"
            }
        )
    }
}