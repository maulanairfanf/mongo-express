const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	urlDb: process.env.MONGODB_CONNECT_URI,
}
