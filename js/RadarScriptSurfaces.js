var w = 200, h = 200;

var colorscale = d3.scale.category10();

//Legend titles
var legendSurfaceOptions = ['Hard','Clay', 'Grass'];
var axisSurfaceOptions = ['Aces', 'Double Faults', '1st Serve', '1st Serve Points Won', '2nd Serve Points Won', 'Break Points Faced', 'Break Points Saved', 'Service Games Played'];

//Data
var ds = [
		  [
			{axis:axisSurfaceOptions[0],value:150},
			{axis:axisSurfaceOptions[1],value:280},
			{axis:axisSurfaceOptions[2],value:658},
			{axis:axisSurfaceOptions[3],value:485},
			{axis:axisSurfaceOptions[4],value:220},
			{axis:axisSurfaceOptions[5],value:263},
			{axis:axisSurfaceOptions[6],value:348},
			{axis:axisSurfaceOptions[7],value:465}
		  ],[
		  	{axis:axisSurfaceOptions[0],value:327},
			{axis:axisSurfaceOptions[1],value:210},
			{axis:axisSurfaceOptions[2],value:659},
			{axis:axisSurfaceOptions[3],value:476},
			{axis:axisSurfaceOptions[4],value:126},
			{axis:axisSurfaceOptions[5],value:161},
			{axis:axisSurfaceOptions[6],value:646},
			{axis:axisSurfaceOptions[7],value:243}
		  ],[
		  	{axis:axisSurfaceOptions[0],value:764},
			{axis:axisSurfaceOptions[1],value:490},
			{axis:axisSurfaceOptions[2],value:569},
			{axis:axisSurfaceOptions[3],value:464},
			{axis:axisSurfaceOptions[4],value:203},
			{axis:axisSurfaceOptions[5],value:229},
			{axis:axisSurfaceOptions[6],value:121},
			{axis:axisSurfaceOptions[7],value:359}
		  ]
		];

		var ds1 = [
				  [
					{axis:axisSurfaceOptions[0],value:350},
					{axis:axisSurfaceOptions[1],value:280},
					{axis:axisSurfaceOptions[2],value:558},
					{axis:axisSurfaceOptions[3],value:385},
					{axis:axisSurfaceOptions[4],value:320},
					{axis:axisSurfaceOptions[5],value:363},
					{axis:axisSurfaceOptions[6],value:248},
					{axis:axisSurfaceOptions[7],value:365}
				  ],[
				  {axis:axisSurfaceOptions[0],value:227},
					{axis:axisSurfaceOptions[1],value:110},
					{axis:axisSurfaceOptions[2],value:759},
					{axis:axisSurfaceOptions[3],value:576},
					{axis:axisSurfaceOptions[4],value:226},
					{axis:axisSurfaceOptions[5],value:191},
					{axis:axisSurfaceOptions[6],value:646},
					{axis:axisSurfaceOptions[7],value:143}
				  ],[
				  {axis:axisSurfaceOptions[0],value:664},
					{axis:axisSurfaceOptions[1],value:390},
					{axis:axisSurfaceOptions[2],value:669},
					{axis:axisSurfaceOptions[3],value:564},
					{axis:axisSurfaceOptions[4],value:303},
					{axis:axisSurfaceOptions[5],value:329},
					{axis:axisSurfaceOptions[6],value:221},
					{axis:axisSurfaceOptions[7],value:459}
				  ]
				];

				var ds2 = [
						  [
							{axis:axisSurfaceOptions[0],value:280},
							{axis:axisSurfaceOptions[1],value:580},
							{axis:axisSurfaceOptions[2],value:258},
							{axis:axisSurfaceOptions[3],value:185},
							{axis:axisSurfaceOptions[4],value:120},
							{axis:axisSurfaceOptions[5],value:463},
							{axis:axisSurfaceOptions[6],value:298},
							{axis:axisSurfaceOptions[7],value:315}
						  ],[
						  {axis:axisSurfaceOptions[0],value:377},
							{axis:axisSurfaceOptions[1],value:390},
							{axis:axisSurfaceOptions[2],value:689},
							{axis:axisSurfaceOptions[3],value:244},
							{axis:axisSurfaceOptions[4],value:400},
							{axis:axisSurfaceOptions[5],value:483},
							{axis:axisSurfaceOptions[6],value:521},
							{axis:axisSurfaceOptions[7],value:677}
						  ],[
						  {axis:axisSurfaceOptions[0],value:464},
							{axis:axisSurfaceOptions[1],value:490},
							{axis:axisSurfaceOptions[2],value:769},
							{axis:axisSurfaceOptions[3],value:364},
							{axis:axisSurfaceOptions[4],value:503},
							{axis:axisSurfaceOptions[5],value:429},
							{axis:axisSurfaceOptions[6],value:621},
							{axis:axisSurfaceOptions[7],value:359}
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
function writeRadarChartSurface1(id){
	if (id == 1){
		RadarChart.draw("#surfacechart", ds, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#surfacechart", ds1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#surfacechart", ds2, mycfg);
	}
}

function writeRadarChartSurface2(id){
	if (id == 1){
		RadarChart.draw("#surfacechart1", ds, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#surfacechart1", ds1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#surfacechart1", ds2, mycfg);
	}
}

function writeRadarChartSurface3(id){
	if (id == 1){
		RadarChart.draw("#surfacechart2", ds, mycfg);
	}
	if (id == 2){
		RadarChart.draw("#surfacechart2", ds1, mycfg);
	}
	if (id == 3){
		RadarChart.draw("#surfacechart2", ds2, mycfg);
	}
}

RadarChart.draw("#surfacechart", ds, mycfg);
RadarChart.draw("#surfacechart1", ds1, mycfg);
RadarChart.draw("#surfacechart2", ds2, mycfg);



////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

function legendSurfaceFunction(){
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
		  .data(legendSurfaceOptions)
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
		  .data(legendSurfaceOptions)
		  .enter()
		  .append("text")
		  .attr("x", w + 65)
		  .attr("y", function(d, i){ return i * 15 + 7;})
		  .attr("font-size", "8px")
		  .attr("fill", "#737373")
		  .text(function(d) { return d; })
		  ;
}
