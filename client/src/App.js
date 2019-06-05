import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Chartmod from "./chartmod"

class App extends Component {
  constructor() {
    super();
    this.state = {
      X: 0,
      Y: 0,
      Z: 0,
      A: 0,
      C: 0,  
    };
  }

updateChart = (callback)=> {

    const socket = socketIOClient("http://localhost:4001")

    socket.on("dataForward", (data)=> {
      console.log("=========dataForward===========")
        this.setState({ 
          X: data.X.value,
          Y: data.Y.value,
          Z: data.Z.value,
          A: data.A.value,
          C: data.C.value,
       })

        callback();        
    });


  }

  render() {
    const { X, Y, Z, A, C } = this.state;
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

        </div>


    );
  }
}

export default App;

          // {nodeId
          //     ? <p>
          //       The temperature in Florence is: {nodeId} °F
          //     </p>
          //     : <p>Loading...</p>}
   // // const {classes} = this.props.classes;
