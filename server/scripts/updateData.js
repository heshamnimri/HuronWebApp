

var MachineAxis = {

	X:{'time' : 0 ,'position': 0, 'current': 0 }, 
	Y:{'time' : 0 ,'position': 0, 'current': 0 },
	Z:{'time' : 0 ,'position': 0, 'current': 0 },
	A:{'time' : 0 ,'position': 0, 'current': 0 },
	C:{'time' : 0 ,'position': 0, 'current': 0 }
	
	}

var err = "parameter not defined"


module.exports = function UPDATE (data) {
	var axis = data.nodeId.slice(-4,-3); 	//X|Y|Z|A|C
	var dataType = data.nodeId.slice(-3)    //pos|curr
	var value = data.value;		
	var time = data.time;

	switch(axis)  {

		case 'X':
			switch(dataType){
				case 'cur':
					MachineAxis.X.current = value;
					MachineAxis.X.time = time;
				break;

				case 'pos':
					MachineAxis.X.position = value;
					MachineAxis.X.time = time;
				break; 

				default: 
					throw err; 
			}

		break; 

		case 'Y':
			switch(dataType){
				case 'cur':
					MachineAxis.Y.current = value;
					MachineAxis.Y.time = time;
				break;

				case 'pos':
					MachineAxis.Y.position = value;
					MachineAxis.Y.time = time;
				break; 

				default: 
					throw err; 
			}

		break;

		case 'Z':
			switch(dataType){
				case 'cur':
					MachineAxis.Z.current = value;
					MachineAxis.Z.time = time;
				break; 

				case 'pos':
					MachineAxis.Z.position = value;
					MachineAxis.Z.time = time;
				break; 

				default: 
					throw err; 
			}

		break; 

		case 'A':
			switch(dataType){
				case 'cur':
					MachineAxis.A.current = value;
					MachineAxis.A.time = time;
				break;

				case 'pos':
					MachineAxis.A.position = value;
					MachineAxis.A.time = time;
				break; 

				default: 
					throw err; 
			}
		break; 

		case 'C':
			switch(dataType){
				case 'cur':
					MachineAxis.C.current = value;
					MachineAxis.C.time = time;
				break; 

				case 'pos':
					MachineAxis.C.position = value;
					MachineAxis.C.time = time;
				break; 

				default: 
					throw err; 
			}

		break;  

		default: 
			throw "no AXIS"; 
	}

	return MachineAxis


}


/*var data2 = {
	'nodeId': 'Huron_CNC.Position.A',
	'value' : 1234,
	'time' : 1234
} 


UPDATE(data2)*/
/*

var newDataNodeId = newData.nodeId //Huron_CNC.Position.D


if(MachineAxis.newDataNodeId){		//existing axis
	MachineAxis.newDataNodeId.value = _newValue_   //update value and time 
	MachineAxis.newDataNodeId.time = _newTime_
} else {							//else append to JSON
	MachineAxis.appendChild()
}*/
/*

switch (newDataNodeId) {
	case 'Huron_CNC.Position.X' :
		MachineAxis.newDataNodeId.value = newData.value
	break; 
	default: 
		MachineAxis.appendChild
}*/