var Axis = {

	X:{'value': 0, 'time' : '' }, 
	Y:{'value': 0, 'time' : '' }, 
	Z:{'value': 0, 'time' : '' }, 
	A:{'value': 0, 'time' : '' }, 
	C:{'value': 0, 'time' : '' } 
	
	}


module.exports = function UPDATE (data) {
	var node = data.nodeId.slice(19); 	//A
	var value = data.value;		//1234

	switch(node)  {

		case 'X':
			Axis.X.value = data.value;
			Axis.X.time = data.time; 

		break; 

		case 'Y':
			Axis.Y.value = data.value;
			Axis.Y.time = data.time;  
		break;

		case 'Z':
			Axis.Z.value = data.value;
			Axis.Z.time = data.time;
		break; 

		case 'A':
			Axis.A.value = data.value;
			Axis.A.time = data.time;
		break; 

		case 'C':
			Axis.C.value = data.value;
			Axis.C.time = data.time;
		break;  

		default: 
			throw err; 
	}

	return Axis


}


/*var data2 = {
	'nodeId': 'Huron_CNC.Position.A',
	'value' : 1234,
	'time' : 1234
} 


UPDATE(data2)*/
/*

var newDataNodeId = newData.nodeId //Huron_CNC.Position.D


if(Axis.newDataNodeId){		//existing node
	Axis.newDataNodeId.value = _newValue_   //update value and time 
	Axis.newDataNodeId.time = _newTime_
} else {							//else append to JSON
	Axis.appendChild()
}*/
/*

switch (newDataNodeId) {
	case 'Huron_CNC.Position.X' :
		Axis.newDataNodeId.value = newData.value
	break; 
	default: 
		Axis.appendChild
}*/