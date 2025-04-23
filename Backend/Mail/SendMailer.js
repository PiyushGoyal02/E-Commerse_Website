const nodemailer = require("nodemailer");
require('dotenv').config();

const MailSender = async (email) => {
    try {
        // Create the transporter with proper configuration
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,  // Standard SMTP port for TLS
            secure: false,  // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Define the email options
        let info = await transporter.sendMail({
            from: `"Green Cart" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to Green Cart!",
            text: "Thank you for signing up. We're excited to have you on board!",
        });


        console.log("Email sent successfully: ", info);
        return info;
    } catch (error) {
        console.error("Error in MailSender:", error.message);
        return null;
    }
};

module.exports = MailSender;