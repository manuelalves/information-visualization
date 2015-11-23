var w = 200, h = 200;

var colorscale = d3.scale.category10();

//Legend titles
var legendOptions = ['Australian Open','Roland Garros', 'Wimbledon', 'USA Open'];
var axisOptions = ['ace', 'df', '1stln', '1stWon', '2ndWon', 'bpFaced', 'bpSaved', 'SvGms'];

//Data
var d = [
		  [
			{axis:axisOptions[0],value:150},
			{axis:axisOptions[1],value:280},
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
			{axis:axisOptions[1],value:90},
			{axis:axisOptions[2],value:689},
			{axis:axisOptions[3],value:544},
			{axis:axisOptions[4],value:200},
			{axis:axisOptions[5],value:433},
			{axis:axisOptions[6],value:321},
			{axis:axisOptions[7],value:277}

		  ],[
		  	{axis:axisOptions[0],value:764},
			{axis:axisOptions[1],value:490},
			{axis:axisOptions[2],value:569},
			{axis:axisOptions[3],value:464},
			{axis:axisOptions[4],value:203},
			{axis:axisOptions[5],value:229},
			{axis:axisOptions[6],value:121},
			{axis:axisOptions[7],value:359}
		  ]
		];

		var d1 = [
				  [
					{axis:axisOptions[0],value:350},
					{axis:axisOptions[1],value:280},
					{axis:axisOptions[2],value:558},
					{axis:axisOptions[3],value:385},
					{axis:axisOptions[4],value:320},
					{axis:axisOptions[5],value:363},
					{axis:axisOptions[6],value:248},
					{axis:axisOptions[7],value:365}
				  ],[
				  {axis:axisOptions[0],value:227},
					{axis:axisOptions[1],value:110},
					{axis:axisOptions[2],value:759},
					{axis:axisOptions[3],value:576},
					{axis:axisOptions[4],value:226},
					{axis:axisOptions[5],value:191},
					{axis:axisOptions[6],value:646},
					{axis:axisOptions[7],value:143}
				  ],[
				  {axis:axisOptions[0],value:477},
					{axis:axisOptions[1],value:200},
					{axis:axisOptions[2],value:589},
					{axis:axisOptions[3],value:444},
					{axis:axisOptions[4],value:300},
					{axis:axisOptions[5],value:383},
					{axis:axisOptions[6],value:321},
					{axis:axisOptions[7],value:477}
				  ],[
				  {axis:axisOptions[0],value:664},
					{axis:axisOptions[1],value:390},
					{axis:axisOptions[2],value:669},
					{axis:axisOptions[3],value:564},
					{axis:axisOptions[4],value:303},
					{axis:axisOptions[5],value:329},
					{axis:axisOptions[6],value:221},
					{axis:axisOptions[7],value:459}
				  ]
				];

				var d2 = [
						  [
							{axis:axisOptions[0],value:280},
							{axis:axisOptions[1],value:580},
							{axis:axisOptions[2],value:258},
							{axis:axisOptions[3],value:185},
							{axis:axisOptions[4],value:120},
							{axis:axisOptions[5],value:463},
							{axis:axisOptions[6],value:298},
							{axis:axisOptions[7],value:315}
						  ],[
						  {axis:axisOptions[0],value:127},
							{axis:axisOptions[1],value:220},
							{axis:axisOptions[2],value:799},
							{axis:axisOptions[3],value:594},
							{axis:axisOptions[4],value:216},
							{axis:axisOptions[5],value:291},
							{axis:axisOptions[6],value:546},
							{axis:axisOptions[7],value:243}
						  ],[
						  {axis:axisOptions[0],value:377},
							{axis:axisOptions[1],value:390},
							{axis:axisOptions[2],value:689},
							{axis:axisOptions[3],value:244},
							{axis:axisOptions[4],value:400},
							{axis:axisOptions[5],value:483},
							{axis:axisOptions[6],value:521},
							{axis:axisOptions[7],value:677}
						  ],[
						  {axis:axisOptions[0],value:464},
							{axis:axisOptions[1],value:490},
							{axis:axisOptions[2],value:769},
							{axis:axisOptions[3],value:364},
							{axis:axisOptions[4],value:503},
							{axis:axisOptions[5],value:429},
							{axis:axisOptions[6],value:621},
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
function writeRadarChart(id){
	if (id == 1){
		RadarChart.draw("#chart", d, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#chart", d1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#chart", d2, mycfg);
	}
}

function writeRadarChart2(id){
	if (id == 1){
		RadarChart.draw("#chart1", d, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#chart1", d1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#chart1", d2, mycfg);
	}
}

function writeRadarChart3(id){
	if (id == 1){
		RadarChart.draw("#chart2", d, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#chart2", d1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#chart2", d2, mycfg);
	}
}

RadarChart.draw("#chart", d, mycfg);
RadarChart.draw("#chart1", d1, mycfg);
RadarChart.draw("#chart2", d2, mycfg);


////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w)
	.attr("height", h);
