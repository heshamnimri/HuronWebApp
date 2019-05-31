import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
  }
  
  handleSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state)
  this.setState({
    content: ''
  })
  }
  

  handleChange = (e) => {
  this.setState({
      id: Math.random(),
      content: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add todo" id="newtodo" onChange={this.handleChange} value={this.state.content}/> 
      </form>
    )
  }
}
export default AddTodo;


var Axis = {

	'Huron_CNC.Position.X':{
		'value': 111, 
		'time' : 222
	}, {
	'Huron_CNC.Position.Y':{
		'value': 111, 
		'time' : 222
	}, {
	'Huron_CNC.Position.Z':{
		'value': 111, 
		'time' : 222
	}, {
	'Huron_CNC.Position.A':{
		'value': 111, 
		'time' : 222
	}, {
	'Huron_CNC.Position.C':{
		'value': 111, 
		'time' : 222
	}

}

var newData = {
	'nodeId': 'Huron_CNC.Position.D',
	'value' : 1234,
	'time' : 1234
} 


var newDataNodeId = newData.nodeId //Huron_CNC.Position.D


if(Axis.newDataNodeId){		//existing node
	Axis.newDataNodeId.value = _newValue_   //update value and time 
	Axis.newDataNodeId.time = _newTime_
} else {							//else append to JSON
	Axis.appendChild()
}
/*

switch (newDataNodeId) {
	case 'Huron_CNC.Position.X' :
		Axis.newDataNodeId.value = newData.value
	break; 
	default: 
		Axis.appendChild
}*/