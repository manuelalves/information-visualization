var w = 200, h = 200;

var colorscale = d3.scale.category10();

//Legend titles
var legendTournamentOptions = ['Australian Open','Roland Garros', 'Wimbledon', 'USA Open'];
var axisTournamentOptions = ['Aces', 'Double Faults', '1st Serve', '1st Serve Points Won', '2nd Serve Points Won', 'Break Points Faced', 'Break Points Saved', 'Service Games Played'];

var roland_garros = true;
var australian_open = false;
var wimbledon = false;
var usa_open = false;

function select_roland_garros() {
	if(roland_garros){
		roland_garros = false;
	}
	else {
		roland_garros = true;
	}
	//lineChart();
}

function australian_open() {
	if(australian_open){
		australian_open = false;
	}
	else {
		australian_open = true;
	}
	//lineChart();

}

function select_wimbledon() {
	if(wimbledon){
		wimbledon = false;
	}
	else {
		wimbledon = true;
	}
	//lineChart();

}

function select_usa_open() {
	if(usa_open){
		usa_open = false;
	}
	else {
		usa_open = true;
	}
	//lineChart();

}

//Data
var d = [
		  [
			{axis:axisTournamentOptions[0],value:150},
			{axis:axisTournamentOptions[1],value:280},
			{axis:axisTournamentOptions[2],value:658},
			{axis:axisTournamentOptions[3],value:485},
			{axis:axisTournamentOptions[4],value:220},
			{axis:axisTournamentOptions[5],value:263},
			{axis:axisTournamentOptions[6],value:348},
			{axis:axisTournamentOptions[7],value:465}
		  ],[
		  	{axis:axisTournamentOptions[0],value:327},
			{axis:axisTournamentOptions[1],value:210},
			{axis:axisTournamentOptions[2],value:659},
			{axis:axisTournamentOptions[3],value:476},
			{axis:axisTournamentOptions[4],value:126},
			{axis:axisTournamentOptions[5],value:161},
			{axis:axisTournamentOptions[6],value:646},
			{axis:axisTournamentOptions[7],value:243}
		  ],[
		  	{axis:axisTournamentOptions[0],value:577},
			{axis:axisTournamentOptions[1],value:90},
			{axis:axisTournamentOptions[2],value:689},
			{axis:axisTournamentOptions[3],value:544},
			{axis:axisTournamentOptions[4],value:200},
			{axis:axisTournamentOptions[5],value:433},
			{axis:axisTournamentOptions[6],value:321},
			{axis:axisTournamentOptions[7],value:277}

		  ],[
		  	{axis:axisTournamentOptions[0],value:764},
			{axis:axisTournamentOptions[1],value:490},
			{axis:axisTournamentOptions[2],value:569},
			{axis:axisTournamentOptions[3],value:464},
			{axis:axisTournamentOptions[4],value:203},
			{axis:axisTournamentOptions[5],value:229},
			{axis:axisTournamentOptions[6],value:121},
			{axis:axisTournamentOptions[7],value:359}
		  ]
		];

		var d1 = [
				  [
					{axis:axisTournamentOptions[0],value:350},
					{axis:axisTournamentOptions[1],value:280},
					{axis:axisTournamentOptions[2],value:558},
					{axis:axisTournamentOptions[3],value:385},
					{axis:axisTournamentOptions[4],value:320},
					{axis:axisTournamentOptions[5],value:363},
					{axis:axisTournamentOptions[6],value:248},
					{axis:axisTournamentOptions[7],value:365}
				  ],[
				  {axis:axisTournamentOptions[0],value:227},
					{axis:axisTournamentOptions[1],value:110},
					{axis:axisTournamentOptions[2],value:759},
					{axis:axisTournamentOptions[3],value:576},
					{axis:axisTournamentOptions[4],value:226},
					{axis:axisTournamentOptions[5],value:191},
					{axis:axisTournamentOptions[6],value:646},
					{axis:axisTournamentOptions[7],value:143}
				  ],[
				  {axis:axisTournamentOptions[0],value:477},
					{axis:axisTournamentOptions[1],value:200},
					{axis:axisTournamentOptions[2],value:589},
					{axis:axisTournamentOptions[3],value:444},
					{axis:axisTournamentOptions[4],value:300},
					{axis:axisTournamentOptions[5],value:383},
					{axis:axisTournamentOptions[6],value:321},
					{axis:axisTournamentOptions[7],value:477}
				  ],[
				  {axis:axisTournamentOptions[0],value:664},
					{axis:axisTournamentOptions[1],value:390},
					{axis:axisTournamentOptions[2],value:669},
					{axis:axisTournamentOptions[3],value:564},
					{axis:axisTournamentOptions[4],value:303},
					{axis:axisTournamentOptions[5],value:329},
					{axis:axisTournamentOptions[6],value:221},
					{axis:axisTournamentOptions[7],value:459}
				  ]
				];

				var d2 = [
						  [
							{axis:axisTournamentOptions[0],value:280},
							{axis:axisTournamentOptions[1],value:580},
							{axis:axisTournamentOptions[2],value:258},
							{axis:axisTournamentOptions[3],value:185},
							{axis:axisTournamentOptions[4],value:120},
							{axis:axisTournamentOptions[5],value:463},
							{axis:axisTournamentOptions[6],value:298},
							{axis:axisTournamentOptions[7],value:315}
						  ],[
						  {axis:axisTournamentOptions[0],value:127},
							{axis:axisTournamentOptions[1],value:220},
							{axis:axisTournamentOptions[2],value:799},
							{axis:axisTournamentOptions[3],value:594},
							{axis:axisTournamentOptions[4],value:216},
							{axis:axisTournamentOptions[5],value:291},
							{axis:axisTournamentOptions[6],value:546},
							{axis:axisTournamentOptions[7],value:243}
						  ],[
						  {axis:axisTournamentOptions[0],value:377},
							{axis:axisTournamentOptions[1],value:390},
							{axis:axisTournamentOptions[2],value:689},
							{axis:axisTournamentOptions[3],value:244},
							{axis:axisTournamentOptions[4],value:400},
							{axis:axisTournamentOptions[5],value:483},
							{axis:axisTournamentOptions[6],value:521},
							{axis:axisTournamentOptions[7],value:677}
						  ],[
						  {axis:axisTournamentOptions[0],value:464},
							{axis:axisTournamentOptions[1],value:490},
							{axis:axisTournamentOptions[2],value:769},
							{axis:axisTournamentOptions[3],value:364},
							{axis:axisTournamentOptions[4],value:503},
							{axis:axisTournamentOptions[5],value:429},
							{axis:axisTournamentOptions[6],value:621},
							{axis:axisTournamentOptions[7],value:359}
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
function writeRadarChartTournaments1(id){
	if (id == 1){
		RadarChart.draw("#chart", d);
	}
	if (id == 2){
		RadarChart.draw("#chart", d1);
	}
	if (id == 3){
		RadarChart.draw("#chart", d2);
	}
}

function writeRadarChartTournaments2(id){
	if (id == 1){
		RadarChart.draw("#chart1", d);
	}
	if (id == 2){
		RadarChart.draw("#chart1", d1);
	}
	if (id == 3){
		RadarChart.draw("#chart1", d2);
	}
}

function writeRadarChartTournaments3(id){
	if (id == 1){
		RadarChart.draw("#chart2", d);
	}
	if (id == 2){
		RadarChart.draw("#chart2", d1);
	}
	if (id == 3){
		RadarChart.draw("#chart2", d2);
	}
}

RadarChart.draw("#chart", d);
RadarChart.draw("#chart1", d1);
RadarChart.draw("#chart2", d2);
