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
var startup = false; 

//opcuaHuron()
// const server = http.createServer(app);
// server.listen(port, ()=> console.log(`Listening on port ${port}`));

const io = socket(server); //master socket running on express server 



io.on("connection", socket => {			//when a connection is made to the server socket 
	console.log("new client connected")
	
	if(!startup){
		console.log("startup")
		startup = true; 
		opcuaHuron();
	}; 

	/*This only emits when a value changes but for realtime you need 
	constant flow of data - socket.on('keepalive') takes care of this 
	by sending the last value to the same event listener when there is
	no change */	

	socket.on("newData", (data) =>{		
		Axis = updateData(data);
		console.log(Axis)
		io.sockets.emit('dataForward',Axis)
	});

	socket.on("keepalive", (e)=> {		//E
		console.log(Axis)
		io.sockets.emit('dataForward',Axis)
		console.log('====================')
	});



	socket.on("disconnect", () => console.log("client disconnected") )

} )

