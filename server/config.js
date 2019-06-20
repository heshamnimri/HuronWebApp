//Abstracts away enviroment variables for use in the server workspace

const dotenv = require('dotenv')
dotenv.config();

module.exports = {
	CNCendpoint: process.env.OPCUA_ADDRESS,
	serverPort: process.env.APP_SERVER_PORT
}
