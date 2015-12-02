function parser(d) {
    d.pMPG = +d.MPG;
    d.pOdometer = +d.Odometer;
    d.pState = d.State;
    d.pDate = new Date(d.Date);
    return d;
}

var format = d3.time.format("%m/%d/%Y");

var clay = false;
var hard = false;
var grass = false;

var year = 0;

function select_clay() {
	if(clay){
		clay = false;
	}
	else {
		clay = true;
	}
	optionYear(year);
}

function select_hard() {
	if(hard){
		hard = false;
	}
	else {
		hard = true;
	}
	optionYear(year);

}

function select_grass() {
	if(grass){
		grass = false;
	}
	else {
		grass = true;
	}
	optionYear(year);

}


function milesovertime(csvdata) {

    var margin = {top: 10, right: 75, bottom: 175, left: 25};
    var width = 850;
    var height = 190;

    /// AREA
 var area_grass = [];
 var area_clay = [];
 var area_hard = [];

// FIM AREA 


    var minDate = csvdata[0].pDate;
    var maxDate = csvdata[csvdata.length - 1].pDate;
    // Set up time based x axis
    var x = d3.time.scale()
	  .domain([minDate, maxDate])
	  .range([0, width]);

    var y = d3.scale.linear()
	  .domain([10, 0])
	  .range([height, 0]);

    var xAxis = d3.svg.axis()
	  .scale(x)
	  .ticks(d3.time.months)
	  .tickSize(12, 0)
      .tickFormat(d3.time.format("%B"))
	  .orient("bottom");

    var yAxis = d3.svg.axis()
	  .scale(y)
	  .ticks(8)
	  .orient("left");
    d3.select("#miles").select("svg").remove();


// AREA////
var area = d3.svg.area()
		.interpolate("basis")
    	.x(function(d) {return x(d.pDate);})
    	.y0(height)
    	.y1(function(d) {return y(y.domain()[1]);});


for(var i = 0; i <= (csvdata.length-1); i++){
 var surface_name = csvdata[i].pState;

    if (surface_name == "UT") {
        area_grass.push(csvdata[i]);
    }
    if (surface_name == "CA") {
        area_clay.push(csvdata[i]);
    }
     if (surface_name == "NV") {
        area_hard.push(csvdata[i]);
    }
}

////FIM AREA//


    // put the graph in the "miles" div
    var svg = d3.select("#miles").append("svg")
	  .attr("width", width + margin.left + margin.right)
	  .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // function to draw the line
    var line = d3.svg.line()
	   .x(function(d) { return x(d.pDate); } )
	   .y(function(d) { return y(d.pOdometer); } );

    //Mouseover tip
    var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([65, 40])
	.html(function(d) {
	    return "<strong>" + d.Odometer +
                " on ranking</strong><br>" +
		d.MPG + " ranking points";
	});

    svg.call(tip);

    // add the x axis and x-label
    svg.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .selectAll("text")
	  .attr("y", 15)
	  .attr("x", 0)
    .style("font-family", "sans-serif")
	  .style("text-anchor", "middle");
    svg.append("text")
	  .attr("class", "xlabel")
	  .attr("text-anchor", "middle")
	  .attr("x", width / 2)
	  .attr("y", height + margin.bottom);

    // add the y axis and y-label
    svg.append("g")
	  .attr("class", "y axis")
	  .attr("transform", "translate(0,0)")
    .style("font-family", "sans-serif")
	  .call(yAxis);
    svg.append("text")
	  .attr("class", "ylabel")
	  .attr("y", 0 - margin.left) // x and y switched due to rotation!!
	  .attr("x", 0 - (height / 2))
	  .attr("dy", "1em")
	  .attr("transform", "rotate(-90)")
	  .style("text-anchor", "middle");

    svg.append("text")
	  .attr("class", "graphtitle")
	  .attr("y", 10)
	  .attr("x", width/2)
	  .style("text-anchor", "middle");

/// AREA
//draw area

if(grass){
svg.append("path")
.datum(area_grass)
.attr("class", "area_grass")
.attr("d", area(area_grass));
}

if(clay){
svg.append("path")
.datum(area_clay)
.attr("class", "area_clay")
.attr("d", area(area_clay));
}

if(hard){
svg.append("path")
.datum(area_hard)
.attr("class", "area_hard")
.attr("d", area(area_hard));
}

/// FIM AREA

    // draw the line
    svg.append("path")
	  .attr("d", line(csvdata))



    svg.selectAll(".dot")
	  .data(csvdata)
	  .enter().append("circle")
	  .attr('class', 'datapoint')
	  .attr('cx', function(d) { return x(d.pDate); })
	  .attr('cy', function(d) { return y(d.pOdometer); })
	  .attr('r', 6)
	  .attr('fill', 'white')
	  .attr('stroke', '#F8CA00')
	  .attr('stroke-width', '3')
	  .on('mouseover', tip.show)
	  .on('mouseout', tip.hide);
}


// Read in .csv data and make graph
function optionYear(id){
	d3.select("svg").remove();
	year = id;

  if (id == 0){
    d3.csv("2010.csv", parser, function(error, csvdata) {
       	milesovertime(csvdata);
	    });
  }
  if (id == 1){
    d3.csv("2011.csv", parser, function(error, csvdata) {
       	milesovertime(csvdata);
	    });
  }
  if (id == 2){
    d3.csv("2012.csv", parser, function(error, csvdata) {
       	milesovertime(csvdata);
	    });
  }
  if (id == 3){
    d3.csv("2013.csv", parser, function(error, csvdata) {
       	milesovertime(csvdata);
	    });
  }
  if (id == 4){
    d3.csv("2014.csv", parser, function(error, csvdata) {
       	milesovertime(csvdata);
	    });
  }
  if (id == 5){
    d3.csv("2015.csv", parser, function(error, csvdata) {
       	milesovertime(csvdata);
	    });
  }
}


d3.csv("2010.csv", parser,
       function(error, csvdata) {
     milesovertime(csvdata);
});
