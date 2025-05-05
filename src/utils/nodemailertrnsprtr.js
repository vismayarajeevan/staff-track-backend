const nodemailer = require('nodemailer')

const {Nodemailer_Mail,Nodemailer_Password} = require('../config/config')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: Nodemailer_Mail,
        pass: Nodemailer_Password,
    },
});

module.exports = transporter

