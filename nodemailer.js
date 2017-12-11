'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');



nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS 
        }
    });

    console.log('logged this',transporter);
    
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Josh Nothum" <offthebenchmn@gmail.com>', // sender address
        to: 'joshnothum@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello from NodeMailer!!!, See you humans tomorrow!', // plain text body
        html: '<b>Hello from NodeMailer!!! See you humans tomorrow!</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
       
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});