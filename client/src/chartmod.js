import React, { Component } from "react";
import { render } from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";

const styles = theme => ({
  "chart-container": {
    height: 400
  }
});

class Chartmod extends Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: this.props.axis,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: this.props.color,
          pointBackgroundColor: "rgba(226,8,8,0)",
          pointBorderColor: "rgba(0, 0, 0, 0)",
          borderWidth: "5",
          lineTension: 0,
          data: [],

        }
      ]
    },
    lineChartOptions: {
      animation: {
          duration: 0 // general animation time
      },
      hover: {
          animationDuration: 0 // duration of animations when hovering an item
      },
      responsiveAnimationDuration: 0, // animation duration after a resize
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 15
            }
          }
        ],
        yAxes: [{
            ticks:{
              suggestedMin:0,
              suggestedMax:100
            }
          }
        ]
      }
    }
  };
  
  


  updateChart = (e) => {
    console.log("-------------UPDATE--------------")
    //const oldXDataSet = this.state.lineChartData.datasets[0];
    const newXDataSet = this.state.lineChartData.datasets[0];  //set to old dataset then append new vlaue
    newXDataSet.data.push(this.props.data)
    newXDataSet.data = newXDataSet.data.slice(-50)

    var con= this.state.lineChartData.labels.concat(
        new Date().toLocaleTimeString())
    var newtime = con.slice(-50)
    console.log(newtime)
    

    // var numValues = this.state.lineChartData.labels.length; 
    // const oldLabels = this.state.lineChartData.labels
    // const newLabels = {...oldLabels};

    //points range = [numValues-101, numVales-1]
  


    const newChartData = {
      ...this.state.lineChartData,
      datasets: [newXDataSet],
      labels: newtime
    };
    this.setState({ lineChartData: newChartData }); 

  }

  componentDidMount() {
    this.props.socketFor(this.updateChart)

  }


 render() {
    
    return (
      <div className={this.props.classes["chart-container"]} >
        <Line
          data={this.state.lineChartData}
          options={this.state.lineChartOptions}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Chartmod);


      // <div className={this.props.classes["chart-container"]}>
      //   <Line
      //     data={this.state.lineChartData}
      //     options={this.state.lineChartOptions}
      //   />
      // </div>