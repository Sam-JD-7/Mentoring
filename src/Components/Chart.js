// import React, { Component } from 'react';
// // import CanvasJSReact from './canvasjs';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
// var dataPoints =[];
// class Chart extends Component {
 
// 	render() {	
// 		const options = {
// 			theme: "light2",
// 			title: {
// 				text: "Nifty 50 Index"
// 			},
// 			data: [{
// 				type: "line",
// 				xValueFormatString: "MMM YYYY",
// 				yValueFormatString: "#,##0.00",
// 				dataPoints: dataPoints
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options} 
// 				 onRef={ref => this.chart = ref}
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
	
// 	componentDidMount(){
// 		var chart = this.chart;
// 		fetch(`http://localhost:3500/details/${4}`)
// 		.then(function(response) {
// 			return response.json();
// 		})
// 		.then(function(data) {
// 			for (var i = 0; i < data.length; i++) {
// 				dataPoints.push({
// 					x: data.cgpa[i],
// 					y: i+1
// 				});
// 			}
// 			chart.render();
// 		});
// 	}
// }
 
// export default Chart;