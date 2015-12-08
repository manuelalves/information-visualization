var w = 200, h = 200;

var colorscale = d3.scale.category10();

//Legend titles
var legendOptions = ['Hard','Clay', 'Grass'];
var axisOptions = ['Aces', 'Double Faults', '1st Serve', '1st Serve Points Won', '2nd Serve Points Won', 'Break Points Faced', 'Break Points Saved', 'Service Games Played'];

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
		RadarChart.draw("#surfacechart", d, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#surfacechart", d1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#surfacechart", d2, mycfg);
	}
}

function writeRadarChart2(id){
	if (id == 1){
		RadarChart.draw("#surfacechart1", d, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#surfacechart1", d1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#surfacechart1", d2, mycfg);
	}
}

function writeRadarChart3(id){
	if (id == 1){
		RadarChart.draw("#surfacechart2", d, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#surfacechart2", d1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#surfacechart2", d2, mycfg);
	}
}

RadarChart.draw("#surfacechart", d, mycfg);
RadarChart.draw("#surfacechart1", d1, mycfg);
RadarChart.draw("#surfacechart2", d2, mycfg);



////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

function legendFunction(){
var svg = d3.selectAll('#surfaceradar')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h);


	//Initiate Legend
	var legend = svg.append("g")
		.attr("class", "legend")
		.attr("height", 100)
		.attr("width", 200)
		.attr('transform', 'translate(100,0)')
		;
		//Create colour squares
		legend.selectAll('rect')
		  .data(legendOptions)
		  .enter()
		  .append("rect")
		  .attr("x", w + 50)
		  .attr("y", function(d, i){ return i * 15;})
		  .attr("width", 8)
		  .attr("height", 8)
		  .style("fill", function(d, i){ return colorscale(i);})
		  ;
		//Create text next to squares
		legend.selectAll('text')
		  .data(legendOptions)
		  .enter()
		  .append("text")
		  .attr("x", w + 65)
		  .attr("y", function(d, i){ return i * 15 + 7;})
		  .attr("font-size", "8px")
		  .attr("fill", "#737373")
		  .text(function(d) { return d; })
		  ;
}
