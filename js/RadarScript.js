var w = 200, h = 200;

var colorscale = d3.scale.category10();

//Legend titles
var legendOptions = ['Australian Open','Roland Garros', 'Wimbledon', 'USA Open'];
var axisOptions = ['ace', 'df', '1stln', '1stWon', '2ndWon', 'bpFaced', 'bpSaved', 'SvGms'];

//Data
var d = [
		  [
			{axis:axisOptions[0],value:150},
			{axis:axisOptions[1],value:180},
			{axis:axisOptions[2],value:658},
			{axis:axisOptions[3],value:485},
			{axis:axisOptions[4],value:220},
			{axis:axisOptions[5],value:263},
			{axis:axisOptions[6],value:348},
			{axis:axisOptions[7],value:465}
		  ],[
		  	{axis:axisOptions[0],value:327},
			{axis:axisOptions[1],value:210},
			{axis:axisOptions[2],value:659},
			{axis:axisOptions[3],value:476},
			{axis:axisOptions[4],value:126},
			{axis:axisOptions[5],value:161},
			{axis:axisOptions[6],value:646},
			{axis:axisOptions[7],value:243}
		  ],[
		  	{axis:axisOptions[0],value:577},
			{axis:axisOptions[1],value:210},
			{axis:axisOptions[2],value:689},
			{axis:axisOptions[3],value:544},
			{axis:axisOptions[4],value:200},
			{axis:axisOptions[5],value:433},
			{axis:axisOptions[6],value:321},
			{axis:axisOptions[7],value:277}

		  ],[
		  	{axis:axisOptions[0],value:764},
			{axis:axisOptions[1],value:190},
			{axis:axisOptions[2],value:569},
			{axis:axisOptions[3],value:464},
			{axis:axisOptions[4],value:203},
			{axis:axisOptions[5],value:229},
			{axis:axisOptions[6],value:121},
			{axis:axisOptions[7],value:359}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);
RadarChart.draw("#chart1", d, mycfg);
RadarChart.draw("#chart2", d, mycfg);
RadarChart.draw("#chart3", d, mycfg);
////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w)
	.attr("height", h);
