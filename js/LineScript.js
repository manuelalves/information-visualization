function InitChart() {
    var data2010 = [{
        "rank": "2",
        "month": "Jan",
        "year": "2010"
    }, {
        "rank": "1",
        "month": "Fev",
        "year": "2010"
    }, {
        "rank": "4",
        "month": "Mar",
        "year": "2010"
    }, {
        "rank": "6",
        "month": "Abr",
        "year": "2010"
    }, {
        "rank": "4",
        "month": "Mai",
        "year": "2010"
    }, {
        "rank": "7",
        "month": "Jun",
        "year": "2010"
    }, {
        "rank": "3",
        "month": "Jul",
        "year": "2010"
    }, {
        "rank": "2",
        "month": "Ago",
        "year": "2010"
    }, {
        "rank": "1",
        "month": "Set",
        "year": "2010"
    }, {
        "rank": "2",
        "month": "Out",
        "year": "2010"
    }, {
        "rank": "3",
        "month": "Nov",
        "year": "2010"
    }, {
        "rank": "4",
        "month": "Dez",
        "year": "2010"
    }];
    var data2011 = [{
        "rank": "6",
        "month": "Jan",
        "year": "2011"
    }, {
        "rank": "7",
        "month": "Fev",
        "year": "2011"
    }, {
        "rank": "8",
        "month": "Mar",
        "year": "2011"
    }, {
        "rank": "9",
        "month": "Abr",
        "year": "2011"
    }, {
        "rank": "7",
        "month": "Mai",
        "year": "2011"
    }, {
        "rank": "10",
        "month": "Jun",
        "year": "2011"
    }, {
        "rank": "5",
        "month": "Jul",
        "year": "2011"
    }, {
        "rank": "3",
        "month": "Ago",
        "year": "2011"
    }, {
        "rank": "7",
        "month": "Set",
        "year": "2011"
    }, {
        "rank": "4",
        "month": "Out",
        "year": "2011"
    }, {
        "rank": "5",
        "month": "Nov",
        "year": "2011"
    }, {
        "rank": "7",
        "month": "Dez",
        "year": "2011"
    }];
    var data2012 = [{
        "rank": "1",
        "month": "Jan",
        "year": "2012"
    }, {
        "rank": "2",
        "month": "Fev",
        "year": "2012"
    }, {
        "rank": "3",
        "month": "Mar",
        "year": "2012"
    }, {
        "rank": "4",
        "month": "Abr",
        "year": "2012"
    }, {
        "rank": "5",
        "month": "Mai",
        "year": "2012"
    }, {
        "rank": "6",
        "month": "Jun",
        "year": "2012"
    }, {
        "rank": "7",
        "month": "Jul",
        "year": "2012"
    }, {
        "rank": "8",
        "month": "Ago",
        "year": "2012"
    }, {
        "rank": "9",
        "month": "Set",
        "year": "2012"
    }, {
        "rank": "10",
        "month": "Out",
    }, {
        "rank": "9",
        "month": "Nov",
        "year": "2012"
    }, {
        "rank": "8",
        "month": "Dez",
        "year": "2012"
    }];
    var data2013 = [{
        "rank": "10",
        "month": "Jan",
        "year": "2013"
    }, {
        "rank": "9",
        "month": "Fev",
        "year": "2013"
    }, {
        "rank": "7",
        "month": "Mar",
        "year": "2013"
    }, {
        "rank": "8",
        "month": "Abr",
        "year": "2013"
    }, {
        "rank": "6",
        "month": "Mai",
        "year": "2013"
    }, {
        "rank": "5",
        "month": "Jun",
        "year": "2013"
    }, {
        "rank": "4",
        "month": "Jul",
        "year": "2013"
    }, {
        "rank": "1",
        "month": "Ago",
        "year": "2013"
    }, {
        "rank": "3",
        "month": "Set",
        "year": "2013"
    }, {
        "rank": "2",
        "month": "Out",
        "year": "2013"
    }, {
        "rank": "1",
        "month": "Nov",
        "year": "2013"
    }, {
        "rank": "2",
        "month": "Dez",
        "year": "2013"
    }];
    var data2014 = [{
        "rank": "4",
        "month": "Jan",
        "year": "2014"
    }, {
        "rank": "5",
        "month": "Fev",
        "year": "2014"
    }, {
        "rank": "6",
        "month": "Mar",
        "year": "2014"
    }, {
        "rank": "7",
        "month": "Abr",
        "year": "2014"
    }, {
        "rank": "8",
        "month": "Mai",
        "year": "2014"
    }, {
        "rank": "9",
        "month": "Jun",
        "year": "2014"
    }, {
        "rank": "10",
        "month": "Jul",
        "year": "2014"
    }, {
        "rank": "9",
        "month": "Ago",
        "year": "2014"
    }, {
        "rank": "8",
        "month": "Set",
        "year": "2014"
    }, {
        "rank": "7",
        "month": "Out",
        "year": "2014"
    }, {
        "rank": "6",
        "month": "Nov",
        "year": "2014"
    }, {
        "rank": "5",
        "month": "Dez",
        "year": "2014"
    }];
    var data2015 = [{
        "rank": "8",
        "month": "Jan",
        "year": "2015"
    }, {
        "rank": "6",
        "month": "Fev",
        "year": "2015"
    }, {
        "rank": "2",
        "month": "Mar",
        "year": "2015"
    }, {
        "rank": "1",
        "month": "Abr",
        "year": "2015"
    }, {
        "rank": "3",
        "month": "Mai",
        "year": "2015"
    }, {
        "rank": "3",
        "month": "Jun",
        "year": "2015"
    }, {
        "rank": "1",
        "month": "Jul",
        "year": "2015"
    }, {
        "rank": "6",
        "month": "Ago",
        "year": "2015"
    }, {
        "rank": "4",
        "month": "Set",
        "year": "2015"
    }, {
        "rank": "5",
        "month": "Out",
        "year": "2015"
    }, {
        "rank": "7",
        "month": "Nov",
        "year": "2015"
    }, {
        "rank": "1",
        "month": "Dez",
        "year": "2015"
    }];
    var vis = d3.select("#visualisation"),
        WIDTH = 500,
        HEIGHT = 250,
        MARGINS = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        },
        xScale = d3.scale.ordinal().rangePoints([MARGINS.left, WIDTH - MARGINS.right]).domain(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]),
        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([11, 0]),
        xAxis = d3.svg.axis()
        .ticks(12)
        .tickValues(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"])
        .scale(xScale),
        yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    vis.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis);
    vis.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);
    var lineGen = d3.svg.line()
        .x(function(d) {
            return xScale(d.month);
        })
        .y(function(d) {
            return yScale(d.rank);
        })
        .interpolate("linear");
    vis.append('svg:path')
          .attr('d', lineGen(data2010))
          .attr('stroke', 'green')
          .attr('stroke-width', 2)
          .attr('fill', 'none');
    vis.append('svg:path')
        .attr('d', lineGen(data2011))
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    vis.append('svg:path')
        .attr('d', lineGen(data2012))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    vis.append('svg:path')
        .attr('d', lineGen(data2013))
        .attr('stroke', 'yellow')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    vis.append('svg:path')
        .attr('d', lineGen(data2014))
        .attr('stroke', 'orange')
        .attr('stroke-width', 2)
        .attr('fill', 'none');
    vis.append('svg:path')
        .attr('d', lineGen(data2011))
        .attr('stroke', 'brown')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

    vis.append('svg:title')
        .on('click', function() {
          return d.year;
        });
}
InitChart();
