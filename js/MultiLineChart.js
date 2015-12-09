/*
// Com 20 jogadores
playerIdArray = new Array(104925,104918,103970,105208,104926,103852,
							104792,105777,104542,104545,105453,
							104731,105227,105683,104925,104745,
							105138,103819,104527,104607,103990);

playerArray = new Array("Rafael Nadal", "Andy Murray", "David Ferrer", "Ernests Gulbis","Fabio Fognini","Feliciano Lopez",
						"Gael Monfils","Grigor Dimitrov","Jo Tsonga","John Isner","Kei Nishikori",
						"Kevin Anderson","Marin Cilic","Milos Raonic","Novak,Djokovic","Rafael Nadal",
						"Roberto Agut","Roger Federer","Stan Wawrinka","Tomas Berdych","Tommy Robredo");
*/

// Com 50 jogadores
playerArray = new Array("Adrian Mannarino","Alexandr Dolgopolov","Andreas Seppi","Andy Murray","Benjamin Becker",
						"Denis Istomin","David Ferrer","David Goffin","Dominic Thiem","Ernests Gulbis","Fabio Fognini",
						"Feliciano Lopez","Fernando Verdasco","Gael Monfils","Gilles Muller","Gilles Simon","Grigor Dimitrov",
						"Guillermo Lopez","Ivo Karlovic","Jack Sock","Jeremy Chardy","Jerzy Janowicz","Jo Tsonga","John Isner",
						"Julien Benneteau","Kei Nishikori","Kevin Anderson","Leonardo Mayer","Lukas Rosol","Marin Cilic",
						"Martin Klizan","Mikhail Youzhny","Milos Raonic","Nick Kyrgios","Novak Djokovic","Pablo Andujar",
						"Pablo  Busta","Pablo Cuevas","Philipp Kohlschreiber","Rafael Nadal","Richard Gasquet","Roberto Agut",
						"Roger Federer","Sam Querrey","Santiago Giraldo","Stanislas Wawrinka","Steve Johnson","Tomas Berdych",
						"Tommy Robredo","Yen Hsun Lu");


playerIdArray = new Array(105173, 105238, 104312, 104918, 103794, 104797, 103970, 105676,
						  106233, 105208, 104926, 103852, 104269, 104792, 104180, 104468, 105777,
						  104198, 103333, 106058, 104871, 105668, 104542, 104545, 103898, 105453,
						  104731, 104919, 104586, 105227, 105373, 104022, 105683, 106401, 104925,
						  104665, 105807, 104655, 104259, 104745, 104755, 105138, 103819, 105023,
						  105053, 104527, 105449, 104607, 103990, 104229);


var multiChart = function(){

    d3.select("#rankYears").select("svg").remove();

    //Get the actual year
    var dateList = document.getElementById("yearList");
    var index = dateList.selectedIndex;
    var year = index;

    //Get the actual player
	var playerList1 = document.getElementById("playerList1");
    var index1 = playerList1.selectedIndex;
	var playerIndex = index1;
	var playerId = playerIdArray[index1];

    //console.log('player chosed' + playerId);

    var format = d3.time.format("%m/%d");
    var monthNameFormat = d3.time.format("%B");
    var yearNameFormat = d3.time.format("%Y");

function parser(d) {
    d.player = +d.player_id;
    d.ranking = +d.ranking;
    d.rankPoints = d.rank_points;
    //d.yearDate = yearNameFormat.parse(d.year).getFullYear();
    //d.yearDate = yearNameFormat.parse(d.year);
    d.yearDate = d.year;
    d.tourneyDate = format.parse(d.tourney_date);
    return d;
}


function rankByYear(datacsv) {
    var margin = {top: 10, right: 75, bottom: 175, left: 25};
    var width = 850;
    var height = 190;

    var stroke_2015_on = 0.3;
    var stroke_2014_on = 0.3;
    var stroke_2013_on = 0.3;
    var stroke_2012_on = 0.3;
    var stroke_2011_on = 0.3;
    var stroke_2010_on = 0.3;

    var stroke_2015_off = 0.3;
    var stroke_2014_off = 0.3;
    var stroke_2013_off = 0.3;
    var stroke_2012_off = 0.3;
    var stroke_2011_off = 0.3;
    var stroke_2010_off = 0.3;

    var stroke_2015 = 2;
    var stroke_2014 = 2;
    var stroke_2013 = 2;
    var stroke_2012 = 2;
    var stroke_2011 = 2;
    var stroke_2010 = 2;

//Years
 var line_2010 = [];
 var line_2011 = [];
 var line_2012 = [];
 var line_2013 = [];
 var line_2014 = [];
 var line_2015 = [];
// End Years

var minRanking = 10;

for(var i = 0; i <= (datacsv.length-1); i++){
 //var line_year = csvdata[i].tourneyDate.getFullYear();
 var line_year = datacsv[i].yearDate;

 var id = datacsv[i].player; //playerName
 var minAux;

 if(id == playerId){

    if (line_year == "2010") {
        line_2010.push(datacsv[i]);
        minAux = (d3.max(line_2010, function(d) { return d.ranking; }) + 1);
    }
    if (line_year == "2011") {
        line_2011.push(datacsv[i]);
        minAux = (d3.max(line_2011, function(d) { return d.ranking; }) + 1);
    }
    if (line_year == "2012") {
        line_2012.push(datacsv[i]);
        minAux = (d3.max(line_2012, function(d) { return d.ranking; }) + 1);
    }
    if (line_year == "2013") {
        line_2013.push(datacsv[i]);
        minAux = (d3.max(line_2013, function(d) { return d.ranking; }) + 1);
    }
    if (line_year == "2014") {
        line_2014.push(datacsv[i]);
        minAux = (d3.max(line_2014, function(d) { return d.ranking; }) + 1);
    }
    if (line_year == "2015") {
        line_2015.push(datacsv[i]);
        minAux = (d3.max(line_2015, function(d) { return d.ranking; }) + 1);
    }

    if(minAux > minRanking){
        minRanking = minAux;
    }
}
}

//    var minDate = line_2015[0].tourneyDate;
//    var maxDate = line_2015[11].tourneyDate;


    var minDate = new Date('1/1/1900');
    var maxDate = new Date('12/31/1900');

    // Set up time based x axis
    var x = d3.time.scale()
	  .domain([minDate, maxDate])
	  .range([0, width]);

    var y = d3.scale.linear()
	  .domain([minRanking, 0])
	  .range([height, 0]);

    var xAxis = d3.svg.axis()
	  .scale(x)
	  .ticks(d3.time.months)
	  .tickSize(15, 0)
      .tickFormat(d3.time.format("%B"))
	  .orient("bottom");

    var yAxis = d3.svg.axis()
	  .scale(y)
	  //.ticks(minRanking)
      .ticks(5)
	  .orient("left");

    d3.select("#rankYears").select("svg").remove();

var multiGraph = d3.select("#rankYears")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Mouseover tip_line
    var tip_line = d3.tip()
	.attr('class', 'd3-tip')
	.offset([65, 40])
	.html(function(d) {
	    return  d;
	});

    multiGraph.call(tip_line);


    //var format_tourney = d3.time.format("%d/%B");

    //Mouseover tip_circle
    var tip_circle = d3.tip()
	.attr('class', 'd3-tip')
	.offset([65, 40])
	.html(function(d) {
        //date_tourney =  format_tourney(d.tourneyDate);
        //"Date: " + date_tourney + "<br>"
	    return  "Rank: " + d.ranking +  "<br>" + "Rank points: " + d.rankPoints;

	});
    multiGraph.call(tip_circle);

    // add the x axis and x-label
    multiGraph.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")
	  .attr("y", 15)
	  .attr("x", 0)
    .style("font-family", "sans-serif")
	  .style("text-anchor", "middle");
    multiGraph.append("text")
	  .attr("class", "xlabel")
	  .attr("text-anchor", "middle")
	  .attr("x", width / 2)
	  .attr("y", height + margin.bottom);

    // add the y axis and y-label
    multiGraph.append("g")
	  .attr("class", "y axis")
	  .attr("transform", "translate(0,0)")
    .style("font-family", "sans-serif")
	  .call(yAxis);
    multiGraph.append("text")
	  .attr("class", "ylabel")
	  .attr("y", 0 - margin.left) // x and y switched due to rotation!!
	  .attr("x", 0 - (height / 2))
	  .attr("dy", "1em")
	  .attr("transform", "rotate(-90)")
	  .style("text-anchor", "middle");

    multiGraph.append("text")
	  .attr("class", "graphtitle")
	  .attr("y", 10)
	  .attr("x", width/2)
	  .style("text-anchor", "middle");


if(year == '0'){
stroke_2010_on = 1;
stroke_2010_off = 1;
stroke_2010 = 3;
}
if(year == '1'){
stroke_2011_on = 1;
stroke_2011_off = 1;
stroke_2011 = 3;
}
if(year == '2'){
stroke_2012_on = 1;
stroke_2012_off = 1;
stroke_2012 = 3;
}
if(year == '3'){
stroke_2013_on = 1;
stroke_2013_off = 1;
stroke_2013 = 3;
}
if(year == '4'){
stroke_2014_on = 1;
stroke_2014_off = 1;
stroke_2014 = 3;
}
if(year == '5'){
stroke_2015_on = 1;
stroke_2015_off = 1;
stroke_2015 = 3;
}


// function to draw the line by years
var line = d3.svg.line()
   .x(function(d) { return x(d.tourneyDate); } )
   .y(function(d) { return y(d.ranking); } );


// 2015
   multiGraph.append("path")
   .datum(line_2015)
   .attr("class", "line_2015")
   .style("stroke", '#17becf')
  // .style("opacity", "0.5")
   .style("stroke-width", stroke_2015)
   .style("opacity", stroke_2015_on)
   .on('mouseover', function(d){
        d3.select(this).style("opacity", "1")
        tip_line.show('2015');
   })
   .on('mouseout', function(d){
        d3.select(this).style("opacity", stroke_2015_off);
        tip_line.hide();
   })
   .attr("d", line(line_2015));

//2014
multiGraph.append("path")
.datum(line_2014)
.attr("class", "line_2014")
.style("stroke", '#7f7f7f')
.style("stroke-width", stroke_2014)
//.style("opacity", "0.5")
.style("opacity", stroke_2014_on)
.on('mouseover', function(d){
     d3.select(this).style("opacity", "1")
     tip_line.show('2014');
})
.on('mouseout', function(d){
     d3.select(this).style("opacity", stroke_2014_off);
     tip_line.hide();
})
.attr("d", line(line_2014));


//2013
multiGraph.append("path")
.datum(line_2013)
.attr("class", "line_2013")
.style("stroke", '#e7969c')
.style("stroke-width", stroke_2013)
//.style("opacity", "0.5")
.style("opacity", stroke_2013_on)
.on('mouseover', function(d){
     d3.select(this).style("opacity", "1")
     tip_line.show('2013');
})
.on('mouseout', function(d){
     d3.select(this).style("opacity", stroke_2013_off);
     tip_line.hide();
})
.attr("d", line(line_2013));

//2012
multiGraph.append("path")
.datum(line_2012)
.attr("class", "line_2012")
.style("stroke", '#8c564b')
.style("opacity", stroke_2012_on)
.style("stroke-width", stroke_2012)
//.style("opacity", "0.5")
.on('mouseover', function(d){
     d3.select(this).style("opacity", "1")
     tip_line.show('2012');
})
.on('mouseout', function(d){
     d3.select(this).style("opacity", stroke_2012_off);
     tip_line.hide();
})
.attr("d", line(line_2012));

//2011
multiGraph.append("path")
.datum(line_2011)
.attr("class", "line_2011")
.style("stroke", '#a55194')
.style("opacity", stroke_2011_on)
.style("stroke-width", stroke_2011)
//.style("opacity", "0.5")
.on('mouseover', function(d){
     d3.select(this).style("opacity", "1")
     tip_line.show('2011');
})
.on('mouseout', function(d){
     d3.select(this).style("opacity", stroke_2011_off);
     tip_line.hide();
})
.attr("d", line(line_2011));

//2010
multiGraph.append("path")
.datum(line_2010)
.attr("class", "line_2010")
.style("stroke", '#d6616b')
.style("opacity", stroke_2010_on)
.style("stroke-width", stroke_2010)
//.style("opacity", "0.5")
.on('mouseover', function(d){
     d3.select(this).style("opacity", "1")
     tip_line.show('2010');
})
.on('mouseout', function(d){
     d3.select(this).style("opacity", stroke_2010_off);
     tip_line.hide();
})
.attr("d", line(line_2010));

/*
//2010
if(year == '0'){
multiGraph.selectAll(".dot")
      .data(line_2010)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return x(d.tourneyDate); })
      .attr('cy', function(d) { return y(d.ranking); })
      .attr('r', 3)
      .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
      .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#d6616b'}})
      .attr('stroke-width', '3')
      .on('mouseover', tip_circle.show)
      .on('mouseout', tip_circle.hide);
  }

//2011
if(year == '1'){
  multiGraph.selectAll(".dot")
      .data(line_2011)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return x(d.tourneyDate); })
      .attr('cy', function(d) { return y(d.ranking); })
      .attr('r', 3)
      .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
      .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#a55194'}})
      .attr('stroke-width', '3')
      .on('mouseover', tip_circle.show)
      .on('mouseout', tip_circle.hide);
}

//2012
if(year == '2'){
  multiGraph.selectAll(".dot")
      .data(line_2012)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return x(d.tourneyDate); })
      .attr('cy', function(d) { return y(d.ranking); })
      .attr('r', 3)
      .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
      .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#8c564b'}})
      .attr('stroke-width', '3')
      .on('mouseover', tip_circle.show)
      .on('mouseout', tip_circle.hide);
}

//2013
if(year == '3'){
  multiGraph.selectAll(".dot")
      .data(line_2013)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return x(d.tourneyDate); })
      .attr('cy', function(d) { return y(d.ranking); })
      .attr('r', 3)
      .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#e7969c'}})
	  .attr('stroke-width', '3')
      .on('mouseover', tip_circle.show)
      .on('mouseout', tip_circle.hide);
}

//2014
if(year == '4'){
  multiGraph.selectAll(".dot")
      .data(line_2014)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return x(d.tourneyDate); })
      .attr('cy', function(d) { return y(d.ranking); })
      .attr('r', 3)
      .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
      .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#7f7f7f'}})
	  .attr('stroke-width', '3')
      .on('mouseover', tip_circle.show)
      .on('mouseout', tip_circle.hide);
}

//2015
if(year == '5'){
  multiGraph.selectAll(".dot")
      .data(line_2015)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return x(d.tourneyDate); })
      .attr('cy', function(d) { return y(d.ranking); })
      .attr('r', 3)
      .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#17becf'}})
	  .attr('stroke-width', '3')
      .on('mouseover', tip_circle.show)
      .on('mouseout', tip_circle.hide);
}

*/

}

/*function rank_teste(index){
year = index;
    d3.csv("AllRankings-Nadal.csv", parser,
           function(error, datacsv) {
         rankByYear(datacsv);
    });
}*/

d3.csv("data/Rankings.csv", parser,
       function(error, datacsv) {
          // year = 0;
     rankByYear(datacsv);
});
};
