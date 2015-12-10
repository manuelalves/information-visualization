
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

var clay = false;
var hard = false;
var grass = false;

var lastYear = '-1';
var lastPlayer = '-1';
var changedYear = false;
var changedPlayer = false;

var img = false;


function select_clay() {
	if(clay){
		clay = false;
	}
	else {
		clay = true;
	}
	lineChart();
}

function select_hard() {
	if(hard){
		hard = false;
	}
	else {
		hard = true;
	}
	lineChart();

}

function select_grass() {
	if(grass){
		grass = false;
	}
	else {
		grass = true;
	}
	lineChart();

}

var lineChart = function (){

//Get the actual year
    var dateList = document.getElementById("yearList");
    var index = dateList.selectedIndex;
    var year = index;


	if(year == lastYear){
		changedYear = false;
	}if(year != lastYear){
		changedYear = true;
		lastYear=year;
	}

//Get the actual player
	var playerList1 = document.getElementById("playerList1");
    var index1 = playerList1.selectedIndex;
	var playerIndex = index1;
	var playerId = playerIdArray[index1];

	if(playerId == lastPlayer){
		changedPlayer = false;
	}if(playerId != lastPlayer){
		changedPlayer = true;
		lastPlayer=playerId;
	}


var format = d3.time.format("%m/%d/%Y");
function parser(d) {
    d.player = +d.player_id;
    d.ranking = +d.ranking;
    d.surface = d.surface;
    d.rankPoints = d.rank_points;
    d.tourneyDate = format.parse(d.tourney_date);

    return d;
}


function milesovertime(csvdata) {

    var margin = {top: 10, right: 75, bottom: 175, left: 30};
    var width = 750;
    var height = 190;

    /// AREA
 var area_grass = [];
 var area_clay = [];
 var area_hard = [];

 var area_hard2 = [];

// FIM AREA

var year_2015 = [];
var year_2014 = [];
var year_2013 = [];
var year_2012 = [];
var year_2011 = [];
var year_2010 = [];

var minRanking;

for(var i = 0; i <= (csvdata.length-1); i++){
 var yearData = csvdata[i].tourneyDate.getFullYear();
 var id = csvdata[i].player; //playerName


if(id == playerId){
    if (yearData == '2010' ) {
        year_2010.push(csvdata[i]);
    }
    if (yearData == '2011' ) {
        year_2011.push(csvdata[i]);
    }
    if (yearData == '2012' ) {
        year_2012.push(csvdata[i]);
    }
    if (yearData == '2013' ) {
        year_2013.push(csvdata[i]);
    }
    if (yearData == '2014' ) {
        year_2014.push(csvdata[i]);
    }
    if (yearData == '2015' ) {
        year_2015.push(csvdata[i]);
    }
}
}



var y = d3.scale.linear()
  //.domain([minRanking, 0])
  .range([height, 0]);
 // y.domain(d3.extent(year_2010, function(d) { return d.ranking; }));



// Set up time based x axis
var x = d3.time.scale()
  .range([0, width]);

var min;
//var minDate = new Date('1/1/2010');
//var maxDate = new Date('1/31/2010');

if(year == 0){
	minDate = new Date('1/1/2010');
	maxDate = year_2010[year_2010.length - 1].tourneyDate;
	 x.domain([minDate, maxDate]);
	 min = (d3.max(year_2010, function(d) { return d.ranking; }));
	 if(min >=0 && min <= 10){
		 minRanking = min + 1;
	 }if(min>10 && min<=30){
		 minRanking = min + 10;
	 }if(min>30 && min<=70){
		 minRanking = min + 15
	 }if(min>70 && min<200){
 		minRanking = min + 20;
	}if(min>=200){
 		minRanking = min + 30;
 	}

	 y.domain([minRanking,0]);
}
if(year == 1){
    minDate = new Date('1/1/2011');
	maxDate = year_2011[year_2011.length - 1].tourneyDate;
	x.domain([minDate, maxDate]);
	min = (d3.max(year_2011, function(d) { return d.ranking; }));
	if(min >=0 && min <= 10){
		minRanking = min + 1;
	}if(min>10 && min<=30){
		minRanking = min + 10;
	}if(min>30 && min<=70){
		minRanking = min + 15
	}if(min>70 && min<200){
		minRanking = min + 20;
	}if(min>=200){
		minRanking = min + 30;
	}

	y.domain([minRanking,0]);
}
if(year == 2){
    minDate = new Date('1/1/2012');
	maxDate = year_2012[year_2012.length - 1].tourneyDate;
	x.domain([minDate, maxDate]);
	min = (d3.max(year_2012, function(d) { return d.ranking; }));
	if(min >=0 && min <= 10){
		minRanking = min + 1;
	}if(min>10 && min<=30){
		minRanking = min + 10;
	}if(min>30 && min<=70){
		minRanking = min + 15
	}if(min>70 && min<200){
		minRanking = min + 20;
	}if(min>=200){
		minRanking = min + 30;
	}
	y.domain([minRanking,0]);
}
if(year == 3){
    minDate = new Date('1/1/2013');
	maxDate = year_2013[year_2013.length - 1].tourneyDate;
	x.domain([minDate, maxDate]);
	min = (d3.max(year_2013, function(d) { return d.ranking; }));
	if(min >=0 && min <= 10){
		minRanking = min + 1;
	}if(min>10 && min<=30){
		minRanking = min + 10;
	}if(min>30 && min<=70){
		minRanking = min + 15
	}if(min>70 && min<200){
		minRanking = min + 20;
	}if(min>=200){
		minRanking = min + 30;
	}
	y.domain([minRanking,0]);
}
if(year == 4){
    minDate = new Date('1/1/2014');
	maxDate = year_2014[year_2014.length - 1].tourneyDate;
	x.domain([minDate, maxDate]);
	min = (d3.max(year_2014, function(d) { return d.ranking; }));
	if(min >=0 && min <= 10){
		minRanking = min + 1;
	}if(min>10 && min<=30){
		minRanking = min + 10;
	}if(min>30 && min<=70){
		minRanking = min + 15
	}if(min>70 && min<200){
		minRanking = min + 20;
	}if(min>=200){
		minRanking = min + 30;
	}
	y.domain([minRanking,0]);
}
if(year == 5){
    minDate = new Date('1/1/2015');
	maxDate = year_2015[year_2015.length - 1].tourneyDate;
	x.domain([minDate, maxDate]);
	min = (d3.max(year_2015, function(d) { return d.ranking; }) );
	if(min >=0 && min <= 10){
		minRanking = min + 1;
	}if(min>10 && min<=30){
		minRanking = min + 10;
	}if(min>30 && min<=70){
		minRanking = min + 15
	}if(min>70 && min<200){
		minRanking = min + 20;
	}if(min>=200){
		minRanking = min + 30;
	}
	y.domain([minRanking,0]);
}

    var xAxis = d3.svg.axis()
	  .scale(x)
	  .ticks(d3.time.months)
	  .tickSize(12, 0)
      .tickFormat(d3.time.format("%B"))
	  .orient("bottom");


	var formatxAxis = d3.format('.0f');

    var yAxis = d3.svg.axis()
	  .scale(y)
	 // .ticks(minRanking)
	 .ticks(2)
	  .orient("left")
	  .tickFormat(formatxAxis);

      d3.select("#miles").select("svg").remove();



// AREA////
var area = d3.svg.area()
		//.interpolate("basis")
    	.x(function(d) {return x(d.tourneyDate);})
    	.y0(height)
    	.y1(function(d) {return y(y.domain()[1]);});


if(year==0 ){
    for(var i = 0; i <= (year_2010.length-1); i++){
     var surface_name = year_2010[i].surface;
	 var month1 = month1 = year_2010[i].tourneyDate.getMonth();


        if (surface_name == "Gras") {
			if(month1 == 5){
            area_grass.push(year_2010[i]);
			}
        }
        if (surface_name == "Clay") {
			if(month1 == 3 || month1 == 4){
            area_clay.push(year_2010[i]);
		}

        }
         if (surface_name == "Hard") {
				if(month1 == 0 || month1 == 2 ){
					area_hard.push(year_2010[i]);
				}
				if(month1 == 7 || month1 == 10 ){
					area_hard2.push(year_2010[i]);
				}
        }
    }
}


if(year==1 ){
    for(var i = 0; i <= (year_2011.length-1); i++){
     var surface_name = year_2011[i].surface;
	 var month1 = month1 = year_2011[i].tourneyDate.getMonth();


        if (surface_name == "Gras") {
			if(month1 == 5){
            area_grass.push(year_2011[i]);
		}
        }
        if (surface_name == "Clay") {
			if(month1 == 3 || month1 == 4){
            area_clay.push(year_2011[i]);
		}
        }
         if (surface_name == "Hard") {
			 if(month1 == 0 || month1 == 2 ){
			 	area_hard.push(year_2011[i]);
			 }
			 if(month1 == 7 || month1 == 10 ){
			 	area_hard2.push(year_2011[i]);
			 }
		 }
    }
}


if(year==2){
    for(var i = 0; i <= (year_2012.length-1); i++){
     var surface_name = year_2012[i].surface;
	 var month1 = month1 = year_2012[i].tourneyDate.getMonth();

        if (surface_name == "Gras") {
			if(month1 == 5){
            area_grass.push(year_2012[i]);
		}
        }
        if (surface_name == "Clay") {
			if(month1 == 3 || month1 == 4){
            area_clay.push(year_2012[i]);
		}
        }
         if (surface_name == "Hard") {
			 if(month1 == 0 || month1 == 2 ){
			   area_hard.push(year_2012[i]);
			}
			if(month1 == 7 || month1 == 9 ){
			   area_hard2.push(year_2012[i]);
			}
        }
    }
}

if(year==3 ){
    for(var i = 0; i <= (year_2013.length-1); i++){
     var surface_name = year_2013[i].surface;
	 var month1 = month1 = year_2013[i].tourneyDate.getMonth();

        if (surface_name == "Gras") {
			if(month1 == 5){
            area_grass.push(year_2013[i]);
		}
        }
        if (surface_name == "Clay") {
			if(month1 == 3 || month1 == 4){
            area_clay.push(year_2013[i]);
		}
        }
         if (surface_name == "Hard") {
			 if(month1 == 0 || month1 == 2  ){
			   area_hard.push(year_2013[i]);
			}
			if(month1 == 7 || month1 == 9 ){
			   area_hard2.push(year_2013[i]);
			}
		  }
    }
}
if(year==4 ){
    for(var i = 0; i <= (year_2014.length-1); i++){
     var surface_name = year_2014[i].surface;
	 var month1 = month1 = year_2014[i].tourneyDate.getMonth();

        if (surface_name == "Gras") {
			if(month1 == 5){
            area_grass.push(year_2014[i]);
		}
        }
        if (surface_name == "Clay") {
			if(month1 == 3 || month1 == 4){
            area_clay.push(year_2014[i]);
		}
        }
         if (surface_name == "Hard") {
			 if(month1 == 0 || month1 == 2  ){
			   area_hard.push(year_2014[i]);
			}
			if(month1 == 7 || month1 == 9 ){
			   area_hard2.push(year_2014[i]);
			}
		        }
    }
}
if(year==5 ){
    for(var i = 0; i <= (year_2015.length-1); i++){
     var surface_name = year_2015[i].surface;
	 var month1 = month1 = year_2015[i].tourneyDate.getMonth();

        if (surface_name == "Gras") {
			if(month1 == 5){
            area_grass.push(year_2015[i]);
		}
        }
        if (surface_name == "Clay") {
			if(month1 == 3 || month1 == 4){
            area_clay.push(year_2015[i]);
		}
        }
         if (surface_name == "Hard") {
			 if(month1 == 0 || month1 == 2  ){
			   area_hard.push(year_2015[i]);
			}
			if(month1 == 7 || month1 == 9 ){
			   area_hard2.push(year_2015[i]);
			}
		        }
    }
}

////FIM AREA//

    var lineGraph = d3.select("#miles")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
      	    .attr("height", height + margin.top + margin.bottom)
      	    .append("g")
      	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		   //	 d3.select("#miles").attr("xlink:href", '/images/no_data.png');

if((playerId == '105173' && year=='2')||
	(playerId == '106233' && year=='0')||(playerId == '106233' && year =='1')||(playerId == '106233' && year=='2')||(playerId == '106233' && year=='3')||
	(playerId=='104180' && year=='0')||(playerId=='104180' && year=='3')||
	(playerId=='105777' && year=='0')||
	(playerId=='104198' && year=='3')||
	(playerId=='106058' && year =='0')||
	(playerId=='103898' && year =='5')||
	(playerId=='105683' && year =='0')||
	(playerId=='105668' && year=='0')||(playerId=='105668' && year=='1')||
	(playerId=='104586' && year=='0')||
	(playerId=='105373' && year=='0')||(playerId=='105373' && year=='1')||
	(playerId=='106401' && year=='0')||(playerId=='106401' && year=='1')||(playerId=='106401' && year=='2')||
	(playerId=='105807' && year=='0')||(playerId=='105807' && year=='1')||(playerId=='105807' && year=='2')||(playerId=='105807' && year=='3')||
	(playerId=='105138' && year=='0')||(playerId=='105138' && year=='1')||
	(playerId=='105449' && year=='0')||(playerId=='105449'&& year=='1')
) {
	img = true;
		   lineGraph.append("svg:image")
     			.attr('x',130)
     			.attr('y',-170)
     			.attr('width', 500)
     			.attr('height', 500)
     			.attr("xlink:href","images/no_data.png" );
}else{img = false;}

    // function to draw the line
    var line = d3.svg.line()
	   .x(function(d) { return x(d.tourneyDate); } )
	   .y(function(d) { return y(d.ranking); } );


	var format_tourney = d3.time.format("%d/%B");

    //Mouseover tip
    var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([65, 40])
	.html(function(d) {
		//date_tourney =  format_tourney(d.tourneyDate);
		//"Date: " + date_tourney + "<br>" +
	    return   "Rank: " + d.ranking +  "<br>" + "Rank points: " + d.rankPoints;
	});

    lineGraph.call(tip);

    // add the x axis and x-label
    lineGraph.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")
	  .attr("y", 15)
	  .attr("x", 0)
    .style("font-family", "sans-serif")
	  .style("text-anchor", "middle");
    lineGraph.append("text")
	  .attr("class", "xlabel")
	  .attr("text-anchor", "middle")
	  .attr("x", width / 2)
	  .attr("y", height + margin.bottom);

    // add the y axis and y-label
    lineGraph.append("g")
	  .attr("class", "y axis")
	  .attr("transform", "translate(0,0)")
    .style("font-family", "sans-serif")
	  .call(yAxis);
    lineGraph.append("text")
	  .attr("class", "ylabel")
	  .attr("y", 0 - margin.left) // x and y switched due to rotation!!
	  .attr("x", 0 - (height / 2))
	  .attr("dy", "1em")
	  .attr("transform", "rotate(-90)")
	  .style("text-anchor", "middle");

    lineGraph.append("text")
	  .attr("class", "graphtitle")
	  .attr("y", 10)
	  .attr("x", width/2)
	  .style("text-anchor", "middle");

/// AREA
//draw area

if(grass){
	changedArea = true;
lineGraph.append("path")
.datum(area_grass)
.attr("class", "area_grass")
.attr("d", area(area_grass));
}

if(clay){
	changedArea = true;
lineGraph.append("path")
.datum(area_clay)
.attr("class", "area_clay")
.attr("d", area(area_clay));
}

if(hard){
	changedArea = true;
lineGraph.append("path")
.datum(area_hard)
.attr("class", "area_hard")
.attr("d", area(area_hard))
}

if(hard){
	changedArea = true;
lineGraph.append("path")
.datum(area_hard2)
.attr("class", "area_hard")
.attr("d", area(area_hard2));
}

/// FIM AREA

if(year == 0 ){
     lineGraph.append("path")
      .datum(year_2010)
	  .attr('stroke', '#d6616b')
      .attr("class", "year_2010")
	  .attr('d', line(year_2010));

      //.attr("d", line(year_2010));
  }


if(year == 1 ){
     lineGraph.append("path")
      .datum(year_2011)

      .attr("class", "year_2011")

	  .attr('stroke', '#a55194')
      .attr("d", line(year_2011));
}
if(year == 2 ){
     lineGraph.append("path")
      .datum(year_2012)
      .attr("class", "year_2012")
	  .attr('stroke', '#8c564b')
      .attr("d", line(year_2012));
}
if(year == 3 ){
     lineGraph.append("path")
      .datum(year_2013)
      .attr("class", "year_2013")
	  .attr('stroke', '#e7969c')
      .attr("d", line(year_2013));
}
if(year == 4 ){
     lineGraph.append("path")
      .datum(year_2014)
      .attr("class", "year_2014")
	  .attr('stroke', '#7f7f7f')
      .attr("d", line(year_2014));
}
if(year == 5 ){
     lineGraph.append("path")
      .datum(year_2015)
      .attr("class", "year_2015")
	  .attr('stroke', '#17becf')
      .attr("d", line(year_2015));
}


if(year == 0){
    lineGraph.selectAll(".dot")
	  .data(year_2010)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.tourneyDate); })
	  .attr('cy', function(d) { return y(d.ranking); })
	  .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  //.attr('fill', 'white')
	  //.attr('stroke', '#F8CA00')
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#d6616b'}})
	  .attr('r', function(d) { if(d.surface == 'none') {return 0;} else{return 6;}})
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);

}

if(year == 1){
    lineGraph.selectAll(".dot")
	  .data(year_2011)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.tourneyDate); })
	  .attr('cy', function(d) { return y(d.ranking); })
	  .attr('r', function(d) { if(d.surface == 'none') {return 0;} else{return 6;}})
	  .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#a55194'}})
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}
if(year == 2){
    lineGraph.selectAll(".dot")
	  .data(year_2012)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.tourneyDate); })
	  .attr('cy', function(d) { return y(d.ranking); })
	  .attr('r', function(d) { if(d.surface == 'none') {return 0;} else{return 6;}})
	  .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#8c564b'}})
	 // .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#F8CA00' '#BCBDAC'}})
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}
if(year == 3){
    lineGraph.selectAll(".dot")
	  .data(year_2013)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.tourneyDate); })
	  .attr('cy', function(d) { return y(d.ranking); })
	  .attr('r', function(d) { if(d.surface == 'none') {return 0;} else{return 6;}})
	  .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#e7969c'}})
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}
if(year == 4){
    lineGraph.selectAll(".dot")
	  .data(year_2014)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.tourneyDate); })
	  .attr('cy', function(d) { return y(d.ranking); })
	  .attr('r', function(d) { if(d.surface == 'none') {return 0;} else{return 6;}})
	  .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#7f7f7f'}})
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}
if(year == 5){
    lineGraph.selectAll(".dot")
	  .data(year_2015)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.tourneyDate); })
	  .attr('cy', function(d) { return y(d.ranking); })
	  .attr('r', function(d) { if(d.surface == 'none') {return 0;} else{return 6;}})
	  .attr('fill', function(d) { if (hard == true && d.surface == 'Hard') {return '#C1DEEC';} if (clay == true && d.surface == 'Clay') {return '#FEDDA7'} if(grass == true && d.surface == 'Gras') {return '#B7D9B7'} else {return 'white'}})
	  .attr('stroke', function(d) { if (hard == true && d.surface == 'Hard') {return '#7BA5D1';} if (clay == true && d.surface == 'Clay') {return 'orange'} if(grass == true && d.surface == 'Gras') {return '#7FAF1B'} else {return '#17becf'}})
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}



/*Tansição*/
if(changedYear == true || changedPlayer == true){
/* Add 'curtain' rectangle to hide entire graph */
if(img == false){
 var curtain = lineGraph.append('rect')
   .attr('x', -1.001 * width)
   .attr('y', -0.994 * height)
   .attr('height', height)
   .attr('width', width)
   .attr('class', 'curtain')
   .attr('transform', 'rotate(180)')
   .style('fill', '#ffffff')

   /* Optionally add a guideline */
 var guideline = lineGraph.append('line')
   .attr('stroke', '#333')
   .attr('stroke-width', 0)
   .attr('class', 'guide')
   .attr('x1', 1)
   .attr('y1', 1)
   .attr('x2', 1)
   .attr('y2', height)

   /* Create a shared transition for anything we're animating */
 var t = lineGraph.transition()
   .delay(750)
   .duration(2000)
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


d3.csv("data/Performances.csv", parser,
       function(error, csvdata) {
     milesovertime(csvdata);
});
};
