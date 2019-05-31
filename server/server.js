const express = require("express");
const http = require("http");
const socket = require("socket.io");
const opcuaHuron = require("./opcua.js")
const updateData = require("./updateData")

const port = 4001;
const index = require("./routes/index");

const app = express();
app.use(index);
const server = app.listen(port, ()=> {
	console.log(`listening on port ${port}`)
})

var Axis

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
		Axis = updateData(data);
		console.log(Axis)
		//io.sockets.emit('dataForward',data)
	})

	socket.on("disconnect", () => console.log("client disconn ected") )

} )

