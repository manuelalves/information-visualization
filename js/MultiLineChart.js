
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


var lastPlayerM = '-1';
var changedPlayerM = false;

var multiChart = function(){

    //d3.select("#rankYears").select("svg").remove();

    //Get the actual year
    var dateList = document.getElementById("yearList");
    var index = dateList.selectedIndex;
    var year = index;

	if(year == '0'){
		document.getElementById("A").style.opacity = "1";
		document.getElementById("B").style.opacity = "0.3";
		document.getElementById("C").style.opacity = "0.3";
		document.getElementById("D").style.opacity = "0.3";
		document.getElementById("E").style.opacity = "0.3";
		document.getElementById("F").style.opacity = "0.3";
	}
	if(year == '1'){
		document.getElementById("B").style.opacity = "1";
		document.getElementById("A").style.opacity = "0.3";
		document.getElementById("C").style.opacity = "0.3";
		document.getElementById("D").style.opacity = "0.3";
		document.getElementById("E").style.opacity = "0.3";
		document.getElementById("F").style.opacity = "0.3";
	}
	if(year == '2'){
		document.getElementById("C").style.opacity = "1";
		document.getElementById("A").style.opacity = "0.3";
		document.getElementById("B").style.opacity = "0.3";
		document.getElementById("D").style.opacity = "0.3";
		document.getElementById("E").style.opacity = "0.3";
		document.getElementById("F").style.opacity = "0.3";
	}
	if(year == '3'){
		document.getElementById("D").style.opacity = "1";
		document.getElementById("A").style.opacity = "0.3";
		document.getElementById("B").style.opacity = "0.3";
		document.getElementById("C").style.opacity = "0.3";
		document.getElementById("E").style.opacity = "0.3";
		document.getElementById("F").style.opacity = "0.3";
	}
	if(year == '4'){
		document.getElementById("E").style.opacity = "1";
		document.getElementById("A").style.opacity = "0.3";
		document.getElementById("B").style.opacity = "0.3";
		document.getElementById("C").style.opacity = "0.3";
		document.getElementById("D").style.opacity = "0.3";
		document.getElementById("F").style.opacity = "0.3";
	}
	if(year == '5'){
		document.getElementById("F").style.opacity = "1";
		document.getElementById("A").style.opacity = "0.3";
		document.getElementById("B").style.opacity = "0.3";
		document.getElementById("C").style.opacity = "0.3";
		document.getElementById("D").style.opacity = "0.3";
		document.getElementById("E").style.opacity = "0.3";
	}

    //Get the actual player
	var playerList1 = document.getElementById("playerList1");
    var index1 = playerList1.selectedIndex;
	var playerIndex = index1;
	var playerId = playerIdArray[index1];

	if(playerId == lastPlayerM){
		changedPlayerM = false;
	}if(playerId != lastPlayerM){
		changedPlayerM = true;
		lastPlayerM=playerId;
	}

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
    var margin = {top: 10, right: 75, bottom: 175, left: 30};
    var width = 750;
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

    var stroke_2015 = 2.5;
    var stroke_2014 = 2.5;
    var stroke_2013 = 2.5;
    var stroke_2012 = 2.5;
    var stroke_2011 = 2.5;
    var stroke_2010 = 2.5;

//Years
 var line_2010 = [];
 var line_2011 = [];
 var line_2012 = [];
 var line_2013 = [];
 var line_2014 = [];
 var line_2015 = [];
// End Years

var min = 10;
var minRanking;

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

    if(minAux > min){
        min = minAux;
    }
}
}


/*Ajustar valor minimo y*/
if(min>=0 && min<=10){
	minRanking = min + 1;
}
if(min>10 && min<=30){
	minRanking = min + 1;
}
if(min>30 && min<=70){
	minRanking = min + 15;
}
if(min>70 && min<=200){
	minRanking = min + 20;
}
if(min>=200){
	minRanking = min + 30;
}



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

}else{d3.select("#rankYears").select("svg").remove();}

//    var minDate = line_2015[0].tourneyDate;
//    var maxDate = line_2015[11].tourneyDate;

    var minDate = new Date('1/1/1900');
    var maxDate = new Date('12/01/1900');

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
   .on('click', function(d){
	   if(year != '5'){
   			document.getElementById("yearList").selectedIndex = 5;
   			multiChart();
   			lineChart();
			tip_line.hide();

		}
   })
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
.on('click', function(d){
	if(year != '4'){
		document.getElementById("yearList").selectedIndex = 4;
		multiChart();
		lineChart();
		tip_line.hide();
}
})
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
.on('click', function(d){
	if(year != '3'){
		document.getElementById("yearList").selectedIndex = 3;
		multiChart();
		lineChart();
		tip_line.hide();
}
})
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
.on('click', function(d){
	if(year != '2'){
		document.getElementById("yearList").selectedIndex = 2;
		multiChart();
		lineChart();
		tip_line.hide();
}
}).on('mouseover', function(d){
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
.on('click', function(d){
	if(year!='1'){
		document.getElementById("yearList").selectedIndex = 1;
		multiChart();
		lineChart();
		tip_line.hide();
	}
}).on('mouseover', function(d){
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
.on('click', function(d){
	if(year != '0'){
		document.getElementById("yearList").selectedIndex = 0;
		multiChart();
		lineChart();
		tip_line.hide();
	}
})
.on('mouseover', function(d){
     d3.select(this).style("opacity", "1")
     tip_line.show('2010');
})
.on('mouseout', function(d){
     d3.select(this).style("opacity", stroke_2010_off);
     tip_line.hide();
})
.attr("d", line(line_2010));


/*Tansição*/
//if(changedPlayerM == true){
/* Add 'curtain' rectangle to hide entire graph */
 var curtain = multiGraph.append('rect')
   .attr('x', -1.001 * width)
   .attr('y', -0.994 * height)
   .attr('height', height)
   .attr('width', width)
   .attr('class', 'curtain')
   .attr('transform', 'rotate(180)')
   .style('fill', '#ffffff')

   /* Optionally add a guideline */
 var guideline = multiGraph.append('line')
   .attr('stroke', '#333')
   .attr('stroke-width', 0)
   .attr('class', 'guide')
   .attr('x1', 1)
   .attr('y1', 1)
   .attr('x2', 1)
   .attr('y2', height)

   /* Create a shared transition for anything we're animating */
 var t = multiGraph.transition()
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
//}



d3.csv("data/Rankings.csv", parser,
       function(error, datacsv) {
          // year = 0;
     rankByYear(datacsv);
});
};
