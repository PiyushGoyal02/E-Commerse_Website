const Mailer = require("../Mail/SendMailer")

exports.sendMail = async (req, res) => {
    try{

        const { email } = req.body;

        if(!email){
            res.status(401).json(
                {
                    success: false,
                    message: "Email is not get, Please try again!"
                }
            )
        }

        // Call MailSender function to send the email
        const mailResponse = await Mailer(email);

        if(mailResponse){
            res.status(201).json(
                {
                    success: true,
                    message: "Email Successfully Send..."
                }
            )
        }else{
            res.status(401).json(
                {
                    success: false,
                    message: "Your mailResponse is not good, Please try again!"
                }
            )
        }

    }catch(error){
        res.status(501).json(
            {
                success: false,
                message: "Your email isn't sending"
            }
        )
    }
}