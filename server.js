
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();


app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: 'iddsolutionform@gmail.com',//process.env.REACT_APP_EMAIL,
        pass: 'F', //process.env.REACT_APP_WORD,
        clientId: '37763751630-012gr0ls0g8u1r921s10cdd9s5dvbj0g.apps.googleusercontent.com', //process.env.REACT_APP_OAUTH_CLIENTID,
        clientSecret: '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', //process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        refreshToken: '1//042RL3p3ykM4ICgYIARAAGAQSNwF-L9Irtm3Gxib672bOruJUj_B3LpE13xq8VLA804OQ1nJrtTLp0voVClljutlBLuF5K-XUi-s', //process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
        accessToken: 'ya29.a0AVA9y1tE66x0YTWfleZ2sL3fh1yFgejYitPYqTFQkkRKR54n1K6tn87w1jmSVcr_9-kiW7dwGidnsknR4VNLaFmlGmu2ivfPelozp_2JKoZ0a_XvwXSJ4zh9-jF2V5dfQsOPUX9oAO-zngTQNlQEIjn2rumiaCgYKATASAQASFQE65dr8ZiMVs39DN-drIuGsgPL90Q0163'
    },
    debug: true, // show debug output
    logger: true // log information in console
});


// let transporter = nodemailer.createTransport({
//     host: "SMTP.DPOCZTA.PL",
//     port: 25,
//     secure: false,

//     auth: {
//         user: 'form@iddsolution.pl',
//         pass: 'Flatron7'
//     },
//     debug: true, 
//     logger: true 
// });



transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});


app.post("/send", function (req, res) {


    let mailOptions = {
        from: `${req.body.data.email}`,
        to: 'form@iddsolution.pl',
        subject: `Message from: ${req.body.data.email} `,
        text: `${req.body.data.message}`,
        attachments: [
            {   // file on disk as an attachment
                filename: 'test.pdf',
                path: './src/components/references/ref_files/sample.pdf' // stream this file
            },
        ]
    };



    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Email error:', err)
            res.json({
                status: "fail",
            });

        } else {
            console.log("Email Sent" + data.response)
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



/*
 attachments: [
        {   // file on disk as an attachment
            filename: 'text3.gif',
            path: '/assets/nyan.gif' // stream this file
        },
    ]


     html: `<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>
        <p>Here's a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>`,

*/












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
