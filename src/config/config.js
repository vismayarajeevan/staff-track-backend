const dotenv = require('dotenv')
dotenv.config()

module.exports.PORT =process.env.PORT || 5000
module.exports.MONGODB_URL = process.env.MONGODB_URL