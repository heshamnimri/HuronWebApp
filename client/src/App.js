import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nodeId: false,
      value: false,
      endpoint: "http://localhost:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("dataForward", (data) => {
         this.setState({ nodeId: data.nodeId, value: data.value })
     });
  }

  render() {
    const { nodeId, value } = this.state;
    return (
        <div style={{ textAlign: "center" }}>

          <p>{nodeId} = {value} </p>

          <p>Y AXIS</p>
          <p>Z AXIS</p>
          <p>A AXIS</p>
          <p>C AXIS</p>
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