function parser(d) {
    d.pMPG = +d.MPG;
    d.pOdometer = +d.Odometer;
    d.pDate = new Date(d.Date);
    return d;
}

var format = d3.time.format("%m/%d/%Y");

function milesovertime(csvdata) {
    var margin = {top: 10, right: 75, bottom: 175, left: 25};
    var width = 850;
    var height = 190;

    var minDate = csvdata[0].pDate;
    var maxDate = csvdata[csvdata.length - 1].pDate;
	console.log(maxDate);
    // Set up time based x axis
    var x = d3.time.scale()
	  .domain([minDate, maxDate])
	  .range([0, width]);

    var y = d3.scale.linear()
	  .domain([10, 0])
	  .range([height, 0]);

    var xAxis = d3.svg.axis()
	  .scale(x)
	  .ticks(12)
	  .orient("bottom");

    var yAxis = d3.svg.axis()
	  .scale(y)
	  .ticks(8)
	  .orient("left");
    d3.select("#miles").select("svg").remove();
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
