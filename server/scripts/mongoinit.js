const mongoose = require('mongoose');
const opcuaData = require('../models/opcuaSchema');
var dataArr;

class MONGO {
	startDB () {
		mongoose.connect('mongodb://localhost/CNChuron');
		mongoose.connection.once('open', function(){
		    console.log('Connection has been made to mongo');
		}).on('error', function(error){
		    console.log('Connection error:', error);
		});
		this.empty()
	}

	//saves data to mongodb
	logdata(axis, data){
		const update = new opcuaData ({
			axis: axis,
			data: [data]
		})

		update.save().then(()=>{console.log("SAVED NEW")})
	}

	
	// converts axis object to an array so that forEach can be used to 
	//iterate through and log values 
	//***curently logs ALL VALUES (ie: if no changes logs previous values)***
	// to change this alter server.js 
	obj2arr(axis){ 							
		dataArr = Object.entries(axis);			
		dataArr.forEach((element)=>{
			this.logdata(element[0],element[1])
		})	
	
	}

	empty(collectionName){
		mongoose.connection.collections.realdatas.drop();
	}

}

module.exports = MONGO