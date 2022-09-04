const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

console.log(process.env.EMAIL)
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: 'iddsolutionform@gmail.com',//process.env.REACT_APP_EMAIL,
        pass: 'Flatron7', //process.env.REACT_APP_WORD,
        clientId: '37763751630-012gr0ls0g8u1r921s10cdd9s5dvbj0g.apps.googleusercontent.com', //process.env.REACT_APP_OAUTH_CLIENTID,
        clientSecret: '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', //process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        refreshToken: '1//04-vEyho6xKpcCgYIARAAGAQSNwF-L9IrveY0H0n3xMC30O7s6XSIrJUqZFs-HzazGCrlHy959HEJZfPNPdLLCaR0X2mYOnLE8ZE', //process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});


app.post("/send", function (req, res) {
    let mailOptions = {
        from: "test@gmail.com",
        to: 'iddsolutionform@gmail.com', //process.env.REACT_APP_EMAIL,
        subject: "Nodemailer API",
        text: "Hi from your nodemailer API",
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
});