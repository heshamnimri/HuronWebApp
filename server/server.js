const express = require("express");
const http = require("http");
const socket = require("socket.io");
const opcuaHuron = require("./opcua.js")

const port = 4001;
const index = require("./routes/index");

const app = express();
app.use(index);
const server = app.listen(port, ()=> {
	console.log(`listening on port ${port}`)
})

//opcuaHuron()
// const server = http.createServer(app);
// server.listen(port, ()=> console.log(`Listening on port ${port}`));

const io = socket(server); //master socket running on express server 

const getApiAndEmit = async socket => {
	try {

		socket.emit("FromAPI", );
	} catch (err) {
		console.error(`Error: ${error.code}`);
	}
}

opcuaHuron();

io.on("connection", socket => {			//when a connection is made to the server socket 
	console.log("new client connected")
	
	socket.on("newData", (data) =>{		//
		console.log(data)
		io.sockets.emit('dataForward',data)
	})

	socket.on("disconnect", () => console.log("client disconn ected") )

} )

