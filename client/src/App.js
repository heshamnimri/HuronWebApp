import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Chartmod from "./chartmod"
const socket = socketIOClient("http://localhost:2000")

class App extends Component {
  constructor() {
    super();
    this.state = {
      X:{'position': 0, 'current': 0, 'time' : '' }, 
      Y:{'position': 0, 'current': 0, 'time' : '' }, 
      Z:{'position': 0, 'current': 0, 'time' : '' }, 
      A:{'position': 0, 'current': 0, 'time' : '' }, 
      C:{'position': 0, 'current': 0, 'time' : '' } 

    };
  }


componentDidMount(){
  console.log(socket)
  //this.updateChart(console.log)
}

updateChart = (callback)=> {

    socket.on("dataForward", (data)=> {
      console.log("=========dataForward===========")
        this.setState(data)
      //  console.log(this.state)
        callback();        
    });


  }

  render() {
    const { X,Y,Z } = this.state;
  return(
      <div>
       <h3 class="card-panel grey center">X AXIS POSITION = {X.position}</h3>
       <Chartmod data={X.position} socketFor={this.updateChart} axis={"X-AXIS-POS"} color={"#000000"}/>
       <h3 class="card-panel red center">X AXIS CURRENT = {X.current}</h3>
       <Chartmod data={X.current} socketFor={this.updateChart} axis={"X-AXIS-CURR"} color={"#ff0000"}/>
        <h3 class="card-panel grey center">Y AXIS POSITION = {Y.position}</h3>
       <Chartmod data={Y.position} socketFor={this.updateChart} axis={"X-AXIS-POS"} color={"#000000"}/>
       <h3 class="card-panel red center">Y AXIS CURRENT = {Y.current}</h3>
       <Chartmod data={Y.current} socketFor={this.updateChart} axis={"X-AXIS-CURR"} color={"#ff0000"}/>
        <h3 class="card-panel grey center">Z AXIS POSITION = {Z.position}</h3>
       <Chartmod data={Z.position} socketFor={this.updateChart} axis={"X-AXIS-POS"} color={"#000000"}/>
       <h3 class="card-panel red center">Z AXIS CURRENT = {Z.curent}</h3>
       <Chartmod data={Z.current} socketFor={this.updateChart} axis={"X-AXIS-CURR"} color={"#ff0000"}/>
       </div>    


    )


  }
}

export default App;

          // {nodeId
          //     ? <p>
          //       The temperature in Florence is: {nodeId} °F
          //     </p>
          //     : <p>Loading...</p>}
   // // const {classes} = this.props.classes;

/*    const { X, Y, Z, A, C } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
       
         <p>X AXIS = {X} </p>
          <Chartmod data={X} socketFor={this.updateChart} axis={"X-AXIS"} color={"#000000"}/>
                    <p>Y AXIS = {Y} </p>s
          <Chartmod data={Y} socketFor={this.updateChart} axis={"Y-AXIS"} color={"#080384"}/>
          <p>Z AXIS = {Z} </p>
          <Chartmod data={Z} socketFor={this.updateChart} axis={"Z-AXIS"} color={"#ad0505"}/>
          <p>A AXIS = {A} </p>
          <Chartmod data={A} socketFor={this.updateChart} axis={"A-AXIS"} color={"#05ad0d"}/>
          <p>C AXIS = {C} </p>
          <Chartmod data={C} socketFor={this.updateChart} axis={"C-AXIS"} color={"#e55c06"} />

        </div>*/
      // );