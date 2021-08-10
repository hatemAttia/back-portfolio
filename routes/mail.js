const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
router.post('/', (req, res) => {

    const {
        emailHost,
        email,
        subject,
        message,
        name
    } = req.body
    console.log(req.body)

    var transporter = nodemailer.createTransport({
        host: 'mail.zenhosting.tn',
        secure:false,
        auth: {
            user: 'hello@hatemattia.tn',
            pass: ')$ey(0Sso@kK'
        }
    });

    var mailOptions = {
        from: email,
        to: emailHost,
        subject: "email from " + email + "name" + name + " about " + subject,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json('message envoyé')

});

module.exports = router;