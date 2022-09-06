
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();





// middleware
app.use(express.json());
//app.use(cors());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: 'iddsolutionform@gmail.com',//process.env.REACT_APP_EMAIL,
        pass: 'Flatron7', //process.env.REACT_APP_WORD,
        clientId: '37763751630-012gr0ls0g8u1r921s10cdd9s5dvbj0g.apps.googleusercontent.com', //process.env.REACT_APP_OAUTH_CLIENTID,
        clientSecret: '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', //process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        refreshToken: '1//04iK9YNIW9_A7CgYIARAAGAQSNwF-L9IraPcltFUi2YESZncThDzFHpi-goICek6X1UfEfAHNonlsHsI-BM6g-2Aa6XMmAIX1nT8', //process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
    },
    debug: true, // show debug output
    logger: true // log information in console
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});


app.post("/send", function (req, res) {

    let mailOptions = {
        From: `${req.body.data.email}`,
        to: 'iddsolutionform@gmail.com',
        subject: `Message from: ${req.body.data.email} (${req.body.data.firstName})`,
        text: `${req.body.data.message}`
    };

    // let mailOptions = {
    //     from: "test@gmail.com",
    //     to: 'iddsolutionform@gmail.com', //process.env.REACT_APP_EMAIL,
    //     subject: "Nodemailer API",
    //     text: "Hi from API",
    // };
    // transporter.sendMail(mailOptions, function (err, data) {
    //     if (err) {
    //         console.log("Error " + err);
    //     } else {
    //         console.log("Email sent successfully");
    //         res.json({ status: "Email sent" });
    //     }
    // });

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            console.log("== Message Sent ==");
            res.json({
                status: "success",
            });
        }
    });

});



const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
















// async function sendMail() {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: "SMTP.DPOCZTA.PL",
//         port: 25,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: testAccount.user, // generated ethereal user
//             pass: testAccount.pass, // generated ethereal password
//         },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "form@iddsolution.pl", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//}

//sendMail().catch(console.error);
