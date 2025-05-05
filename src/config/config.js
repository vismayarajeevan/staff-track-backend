const dotenv = require('dotenv')
dotenv.config()

// port
module.exports.PORT =process.env.PORT || 5000

// mongodb
module.exports.MONGODB_URL = process.env.MONGODB_URL

// nodemailer
module.exports.Nodemailer_Mail = process.env.NODEMAILER_MAIL
module.exports.Nodemailer_Password = process.env.NODEMAILER_PASSWORD

