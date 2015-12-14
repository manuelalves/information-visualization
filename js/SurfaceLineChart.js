playernameArray = new Array("Adrian Mannarino","Alexandr Dolgopolov","Andreas Seppi","Andy Murray","Benjamin Becker",
						"Denis Istomin","David Ferrer","David Goffin","Dominic Thiem","Ernests Gulbis","Fabio Fognini",
						"Feliciano Lopez","Fernando Verdasco","Gael Monfils","Gilles Muller","Gilles Simon","Grigor Dimitrov",
						"Guillermo Lopez","Ivo Karlovic","Jack Sock","Jeremy Chardy","Jerzy Janowicz","Jo Tsonga","John Isner",
						"Julien Benneteau","Kei Nishikori","Kevin Anderson","Leonardo Mayer","Lukas Rosol","Marin Cilic",
						"Martin Klizan","Mikhail Youzhny","Milos Raonic","Nick Kyrgios","Novak Djokovic","Pablo Andujar",
						"Pablo  Busta","Pablo Cuevas","Philipp Kohlschreiber","Rafael Nadal","Richard Gasquet","Roberto Agut",
						"Roger Federer","Sam Querrey","Santiago Giraldo","Stanislas Wawrinka","Steve Johnson","Tomas Berdych",
						"Tommy Robredo","Yen Hsun Lu");


playeridArray = new Array(105173, 105238, 104312, 104918, 103794, 104797, 103970, 105676,
						  106233, 105208, 104926, 103852, 104269, 104792, 104180, 104468, 105777,
						  104198, 103333, 106058, 104871, 105668, 104542, 104545, 103898, 105453,
						  104731, 104919, 104586, 105227, 105373, 104022, 105683, 106401, 104925,
						  104665, 105807, 104655, 104259, 104745, 104755, 105138, 103819, 105023,
						  105053, 104527, 105449, 104607, 103990, 104229);


var img = false;

var linesurfaceChart = function (){

var format = d3.time.format("%m/%d/%Y");
function parser(d) {
    d.player = +d.player_id;
    d.ranking = +d.ranking;
    d.pSurface = d.surface;
    d.ace = +d.ace;
    d._1stWon = +d._1stWon;
    d._2ndWon = +d._2ndWon;
    d.tourneyDate = format.parse(d.tourney_date);

    return d;
}

function lineargraphsurface(csvdata){

var lastYear = '-1';
var lastPlayer = '-1';
var changedYear = false;
var changedPlayer = false;
var img = false;

var listaData = document.getElementById("yearList");
var indice = listaData.selectedIndex;
var yearid = indice;

if(yearid == lastYear){
	changedYear = false;
}if(yearid != lastYear){
	changedYear = true;
	lastYear=yearid;
}

if(yearid == '0'){
	document.getElementById("A").style.opacity = "1";
	document.getElementById("B").style.opacity = "0.3";
	document.getElementById("C").style.opacity = "0.3";
	document.getElementById("D").style.opacity = "0.3";
	document.getElementById("E").style.opacity = "0.3";
	document.getElementById("F").style.opacity = "0.3";
}
if(yearid == '1'){
	document.getElementById("B").style.opacity = "1";
	document.getElementById("A").style.opacity = "0.3";
	document.getElementById("C").style.opacity = "0.3";
	document.getElementById("D").style.opacity = "0.3";
	document.getElementById("E").style.opacity = "0.3";
	document.getElementById("F").style.opacity = "0.3";
}
if(yearid == '2'){
	document.getElementById("C").style.opacity = "1";
	document.getElementById("A").style.opacity = "0.3";
	document.getElementById("B").style.opacity = "0.3";
	document.getElementById("D").style.opacity = "0.3";
	document.getElementById("E").style.opacity = "0.3";
	document.getElementById("F").style.opacity = "0.3";
}
if(yearid == '3'){
	document.getElementById("D").style.opacity = "1";
	document.getElementById("A").style.opacity = "0.3";
	document.getElementById("B").style.opacity = "0.3";
	document.getElementById("C").style.opacity = "0.3";
	document.getElementById("E").style.opacity = "0.3";
	document.getElementById("F").style.opacity = "0.3";
}
if(yearid == '4'){
	document.getElementById("E").style.opacity = "1";
	document.getElementById("A").style.opacity = "0.3";
	document.getElementById("B").style.opacity = "0.3";
	document.getElementById("C").style.opacity = "0.3";
	document.getElementById("D").style.opacity = "0.3";
	document.getElementById("F").style.opacity = "0.3";
}
if(yearid == '5'){
	document.getElementById("F").style.opacity = "1";
	document.getElementById("A").style.opacity = "0.3";
	document.getElementById("B").style.opacity = "0.3";
	document.getElementById("C").style.opacity = "0.3";
	document.getElementById("D").style.opacity = "0.3";
	document.getElementById("E").style.opacity = "0.3";
}


var playerList2 = document.getElementById("playerList1");
var playerindice = playerList2.selectedIndex;
var playerid = playeridArray[playerindice];

if(playerid == lastPlayer){
	changedPlayer = false;
}if(playerid != lastPlayer){
	changedPlayer = true;
	lastPlayer=playerid;
}

var rankinghard = 0;
var totalaceshard = 0;
var total1stwonhard = 0;
var total2ndwonhard= 0;
var cicloshard = 0;

var rankingclay = 0;
var totalacesclay = 0;
var total1stwonclay = 0;
var total2ndwonclay= 0;
var ciclosclay = 0;

var rankinggrass = 0;
var totalacesgrass = 0;
var total1stwongrass = 0;
var total2ndwongrass= 0;
var ciclosgrass = 0;

    for(var i = 0; i <= (csvdata.length-1); i++){
      var ano = csvdata[i].tourneyDate.getFullYear();
      var id = csvdata[i].player_id;

			switch (yearid) {
				case 0:
					if(id == playerid && csvdata[i].surface == 'Hard' && ano == "2010"){
						totalaceshard += csvdata[i].ace;
						total1stwonhard += csvdata[i]._1stWon;
						total2ndwonhard += csvdata[i]._2ndWon;
						rankinghard += csvdata[i].ranking;
						cicloshard += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Clay' && ano == "2010"){
						totalacesclay += csvdata[i].ace;
						total1stwonclay += csvdata[i]._1stWon;
						total2ndwonclay += csvdata[i]._2ndWon;
						rankingclay += csvdata[i].ranking;
						ciclosclay += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Gras' && ano == "2010"){
						totalacesgrass += csvdata[i].ace;
						total1stwongrass += csvdata[i]._1stWon;
						total2ndwongrass += csvdata[i]._2ndWon;
						rankinggrass += csvdata[i].ranking;
						ciclosgrass += 1;
					}
					break;
				case 1:
					if(id == playerid && csvdata[i].surface == 'Hard' && ano == "2011"){
						totalaceshard += csvdata[i].ace;
						total1stwonhard += csvdata[i]._1stWon;
						total2ndwonhard += csvdata[i]._2ndWon;
						rankinghard += csvdata[i].ranking;
						cicloshard += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Clay' && ano == "2011"){
						totalacesclay += csvdata[i].ace;
						total1stwonclay += csvdata[i]._1stWon;
						total2ndwonclay += csvdata[i]._2ndWon;
						rankingclay += csvdata[i].ranking;
						ciclosclay += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Gras' && ano == "2011"){
						totalacesgrass += csvdata[i].ace;
						total1stwongrass += csvdata[i]._1stWon;
						total2ndwongrass += csvdata[i]._2ndWon;
						rankinggrass += csvdata[i].ranking;
						ciclosgrass += 1;
					}
					break;
				case 2:
					if(id == playerid && csvdata[i].surface == 'Hard' && ano == "2012"){
	        	totalaceshard += csvdata[i].ace;
	        	total1stwonhard += csvdata[i]._1stWon;
	        	total2ndwonhard += csvdata[i]._2ndWon;
	        	rankinghard += csvdata[i].ranking;
	        	cicloshard += 1;
	      	}
	      	if(id == playerid && csvdata[i].surface == 'Clay' && ano == "2012"){
	        	totalacesclay += csvdata[i].ace;
	        	total1stwonclay += csvdata[i]._1stWon;
	        	total2ndwonclay += csvdata[i]._2ndWon;
	        	rankingclay += csvdata[i].ranking;
	        	ciclosclay += 1;
	      	}
	      	if(id == playerid && csvdata[i].surface == 'Gras' && ano == "2012"){
	        	totalacesgrass += csvdata[i].ace;
	        	total1stwongrass += csvdata[i]._1stWon;
	        	total2ndwongrass += csvdata[i]._2ndWon;
	        	rankinggrass += csvdata[i].ranking;
	        	ciclosgrass += 1;
	      	}
					break;
				case 3:
					if(id == playerid && csvdata[i].surface == 'Hard' && ano == "2013"){
						totalaceshard += csvdata[i].ace;
						total1stwonhard += csvdata[i]._1stWon;
						total2ndwonhard += csvdata[i]._2ndWon;
						rankinghard += csvdata[i].ranking;
						cicloshard += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Clay' && ano == "2013"){
						totalacesclay += csvdata[i].ace;
						total1stwonclay += csvdata[i]._1stWon;
						total2ndwonclay += csvdata[i]._2ndWon;
						rankingclay += csvdata[i].ranking;
						ciclosclay += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Gras' && ano == "2013"){
						totalacesgrass += csvdata[i].ace;
						total1stwongrass += csvdata[i]._1stWon;
						total2ndwongrass += csvdata[i]._2ndWon;
						rankinggrass += csvdata[i].ranking;
						ciclosgrass += 1;
					}
					break;
				case 4:
					if(id == playerid && csvdata[i].surface == 'Hard' && ano == "2014"){
						totalaceshard += csvdata[i].ace;
						total1stwonhard += csvdata[i]._1stWon;
						total2ndwonhard += csvdata[i]._2ndWon;
						rankinghard += csvdata[i].ranking;
						cicloshard += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Clay' && ano == "2014"){
						totalacesclay += csvdata[i].ace;
						total1stwonclay += csvdata[i]._1stWon;
						total2ndwonclay += csvdata[i]._2ndWon;
						rankingclay += csvdata[i].ranking;
						ciclosclay += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Gras' && ano == "2014"){
						totalacesgrass += csvdata[i].ace;
						total1stwongrass += csvdata[i]._1stWon;
						total2ndwongrass += csvdata[i]._2ndWon;
						rankinggrass += csvdata[i].ranking;
						ciclosgrass += 1;
					}
					break;
				case 5:
					if(id == playerid && csvdata[i].surface == 'Hard' && ano == "2015"){
						totalaceshard += csvdata[i].ace;
						total1stwonhard += csvdata[i]._1stWon;
						total2ndwonhard += csvdata[i]._2ndWon;
						rankinghard += csvdata[i].ranking;
						cicloshard += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Clay' && ano == "2015"){
						totalacesclay += csvdata[i].ace;
						total1stwonclay += csvdata[i]._1stWon;
						total2ndwonclay += csvdata[i]._2ndWon;
						rankingclay += csvdata[i].ranking;
						ciclosclay += 1;
					}
					if(id == playerid && csvdata[i].surface == 'Gras' && ano == "2015"){
						totalacesgrass += csvdata[i].ace;
						total1stwongrass += csvdata[i]._1stWon;
						total2ndwongrass += csvdata[i]._2ndWon;
						rankinggrass += csvdata[i].ranking;
						ciclosgrass += 1;
					}
					break;
			}
		}

    var performancehard = Math.round((totalaceshard + total1stwonhard + total2ndwonhard)/100);
    var performanceclay = Math.round((totalacesclay + total1stwonclay + total2ndwonclay)/100);
    var performancegrass = Math.round((totalacesgrass + total1stwongrass + total2ndwongrass)/100);

    var rankinghardmedio = Math.round(rankinghard / cicloshard);
    var rankingclaymedio = Math.round(rankingclay / ciclosclay);
    var rankinggrassmedio = Math.round(rankinggrass / ciclosgrass);

    var rankinganswer = [];
    rankinganswer.push(rankinghardmedio);
    rankinganswer.push(rankingclaymedio);
    rankinganswer.push(rankinggrassmedio);

    var performanceanswer = [];
    performanceanswer.push(performancehard);
    performanceanswer.push(performanceclay);
    performanceanswer.push(performancegrass);

		if(isNaN(performanceanswer[1])){
			var temp = performanceanswer[2];
			performanceanswer[1] = temp;
		}

    var surfaceanswer = [];
    surfaceanswer.push("Hard");
    surfaceanswer.push("Clay");
    surfaceanswer.push("Grass");

    var margin = {top: 5, right: 30, bottom: 50, left: 30};
    var width = 500 - margin.left - margin.right;
    var height = 250 - margin.top - margin.bottom;

    var colorscale = d3.scale.category10();

    // Set up time based x axis
    var x = d3.scale.ordinal()
    .domain(["Hard", "Clay", "Grass"])
    .rangeRoundBands([0, width - margin.right], 1);


/*
var rankinghardmedio = Math.round(rankinghard / cicloshard);
var rankingclaymedio = Math.round(rankingclay / ciclosclay);
var rankinggrassmedio = Math.round(rankinggrass / ciclosgrass);
*/

var mediaMax = 0;

if(mediaMax < rankinghardmedio){
	mediaMax = rankinghardmedio
}if(mediaMax < rankingclaymedio){
	mediaMax = rankingclaymedio;
}
if(mediaMax < rankinggrassmedio){
	mediaMax = rankinggrassmedio
}

var max;

if(mediaMax >= 0 && mediaMax<=10){
	max = mediaMax + 1;
}
if(mediaMax > 10 && mediaMax<=20){
	max = mediaMax + 5;
}
if(mediaMax > 20 && mediaMax<=50){
	max = mediaMax + 10;
}
if(mediaMax > 50 && mediaMax<=80){
	max = mediaMax + 15;
}
if(mediaMax > 80 && mediaMax<=100){
	max = mediaMax + 15;
}if(mediaMax > 100 && mediaMax<=120){
	console.log("entrei");
	max = mediaMax + 25;
}
if(mediaMax > 120 && mediaMax<=200){
	max = mediaMax + 25;
}


    var y = d3.scale.linear()
	  .domain([max, 0])
	  .range([height, 0]);

    var xAxis = d3.svg.axis()
	  .scale(x)
	  .orient("bottom");

	  var formatyAxis = d3.format('.0f');

    var yAxis = d3.svg.axis()
	  .scale(y)
	  .ticks(2)
	  .tickFormat(formatyAxis)
	  .orient("left");

		d3.select("#surfacelinearchart").select("svg").remove();



		// put the graph in the "surfacelinearchart" div
		var surflinegraph = d3.select("#surfacelinearchart").append("svg")
		  .attr("width", width + margin.left + margin.right)
		  .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		if(!(rankinganswer[0]>=0) && !(rankinganswer[1]>=0) && !(rankinganswer[2]>=0)){
			img = true;
				   surflinegraph.append("svg:image")
						.attr('x',-60)
						.attr('y',-170)
						.attr('width', 500)
						.attr('height', 500)
						.attr("xlink:href","images/no_data.png" );

		} else {img = false;}

if(img == false){



    // function to draw the line
    var line = d3.svg.line()
	.x(function(d, i) { return x(surfaceanswer[i]); } )
	.y(function(d, i) { return y(rankinganswer[i]); } );

  var performance = (function(d, i) { return (performanceanswer[i]); } );

    //Mouseover tip
    var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([75, 40])
	.html(function(d, i) {
	    return "Performance Points: " + performanceanswer[i] + "<br>" + "Rank: " + rankinganswer[i];
	});

    surflinegraph.call(tip);

	//Mouseover tip_line
    var tip_line = d3.tip()
	.attr('class', 'd3-tip')
	.offset([65, 40])
	.html(function(d) {
	    return  d;
	});

    surflinegraph.call(tip_line);

    // add the x axis and x-label
    surflinegraph.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")
	  .attr("dy", ".90em")
    .attr('fill', function(d, i){ return colorscale(i);})
    .style("font-family", "sans-serif")
	  .style("text-anchor", "middle");


    // add the y axis and y-label
    surflinegraph.append("g")
	  .attr("class", "y axis")
	  .attr("transform", "translate(0,0)")
	  .call(yAxis);
    surflinegraph.append("text")
	  .attr("class", "ylabel")
	  .attr("y", 0 - margin.left) // x and y switched due to rotation!!
	  .attr("x", 0 - (height / 2))
	  .attr("dy", "1em")
	  .style("text-anchor", "middle");

    // draw the line
		if(yearid == 0){
			surflinegraph.append("path")
			.style("stroke", '#d6616b')
			.style("stroke-width", '2.5')
			.on('mouseover', function(d){
				 tip_line.show('2010');
			})
			.on('mouseout', function(d){
				 tip_line.hide();
			})
			.attr("d", line(rankinganswer));

		}if(yearid == 1){
			surflinegraph.append("path")
			.style("stroke", '#a55194')
			.style("stroke-width", '2.5')
			.on('mouseover', function(d){
				 tip_line.show('2011');
			})
			.on('mouseout', function(d){
				 tip_line.hide();
			})
			.attr("d", line(rankinganswer));

		}if(yearid == 2){
			surflinegraph.append("path")
			.style("stroke", '#8c564b')
			.style("stroke-width", '2.5')
			.on('mouseover', function(d){
				 tip_line.show('2012');
			})
			.on('mouseout', function(d){
				 tip_line.hide();
			})
			.attr("d", line(rankinganswer));

		}if(yearid == 3){
			surflinegraph.append("path")
			.style("stroke", '#e7969c')
			.style("stroke-width", '2.5')
			.on('mouseover', function(d){
				 tip_line.show('2013');
			})
			.on('mouseout', function(d){
				 tip_line.hide();
			})
			.attr("d", line(rankinganswer));

		}if(yearid == 4){
			surflinegraph.append("path")
			.style("stroke", '#7f7f7f')
			.style("stroke-width", '2.5')
			.on('mouseover', function(d){
				 tip_line.show('2014');
			})
			.on('mouseout', function(d){
				 tip_line.hide();
			})
			.attr("d", line(rankinganswer));

		}if(yearid == 5){
			surflinegraph.append("path")
			.style("stroke", '#17becf')
			.style("stroke-width", '2.5')
			.on('mouseover', function(d){
				 tip_line.show('2014');
			})
			.on('mouseout', function(d){
				 tip_line.hide();
			})
			.attr("d", line(rankinganswer));

		}

    surflinegraph.selectAll(".dot")
	  .data(performanceanswer)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d, i) { return x(surfaceanswer[i]); } )
	  .attr('cy', function(d, i) { return y(rankinganswer[i]); } )
	  .attr('r', performance)
	  .attr('fill', function(d, i){ return colorscale(i);})
	  .attr('stroke', function(d, i){ return colorscale(i);})
	  .attr('stroke-width', 3)
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);

		/*Tansição*/
		if(changedYear == true || changedPlayer == true){
		/* Add 'curtain' rectangle to hide entire graph */
		if(img == false){
		 var curtain = surflinegraph.append('rect')
		   .attr('x', -1.105 * width)
		   .attr('y', -0.994 * height)
		   .attr('height', (height + 15))
		   .attr('width', width)
		   .attr('class', 'curtain')
		   .attr('transform', 'rotate(180)')
		   .style('fill', '#ffffff')

		   /* Optionally add a guideline */
		 var guideline = surflinegraph.append('line')
		   .attr('stroke', '#333')
		   .attr('stroke-width', 0)
		   .attr('class', 'guide')
		   .attr('x1', 1)
		   .attr('y1', 1)
		   .attr('x2', 1)
		   .attr('y2', height)

		   /* Create a shared transition for anything we're animating */
		 var t = surflinegraph.transition()
		   .delay(700)
		   .duration(900)
		   .ease('linear')
		   .each('end', function() {
			 d3.select('line.guide')
			   .transition()
			   .style('opacity', 0)
			   .remove()
		   });

		 	t.select('rect.curtain')
		  .attr('width', 0);
			t.select('line.guide')
		  .attr('transform', 'translate(' + width + ', 0)')


		  d3.select("#show_guideline").on("change", function(e) {
		      guideline.attr('stroke-width', this.checked ? 1 : 0);
		      curtain.attr("opacity", this.checked ? 0.75 : 1);
		    })
		}
			/*end Transiçao*/
		}
	}
}
// Read in .csv data and make graph
d3.csv("data/Performances.csv", parser,
       function(error, csvdata) {
	   lineargraphsurface(csvdata);
});
};
