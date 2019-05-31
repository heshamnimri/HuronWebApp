const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const opcuaHuron = require("opcua.js")

const port = 4001;
const index = require("./routes/index");

const app = express();
app.use(index);
const server = app.listen(port, ()=> {
	console.log(`listening on port ${port}`)
})

// const server = http.createServer(app);
// server.listen(port, ()=> console.log(`Listening on port ${port}`));

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
	try {

		socket.emit("FromAPI", );
	} catch (err) {
		console.error(`Error: ${error.code}`);
	}
}

io.on("connection", socket => {
	console.log("new client connected"), setInterval(
		() => getApiAndEmit(socket), 200)
		
	socket.on("disconnect", () => console.log("client disconnected") )

} )