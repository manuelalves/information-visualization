
var axisTournamentOptions = ['Aces', 'Double Faults', '1st Serve', '1st Serve Points Won', '2nd Serve Points Won', 'Break Points Faced', 'Break Points Saved', 'Service Games Played'];


var blue_colour = "#1f77b4";
var orange_colour = "#ff7f0e";
var green_colour = "#2ca02c";
var red_colour =  "#17becf";
var graph_colour = d3.scale.category10();

var australian_check = false;
var roland_check = false;
var wimbledon_check = false;
var usa_check = false;

var australian_box_check = false;
var roland_box_check = false;
var wimbledon_box_check = false;
var usa_box_check = false;

var page_global = null;

//Get the actual year
  var dateList;
  var yearsList = ["yearList", "yearList1", "yearList2", "yearList3"];

//Get the actual player
  var playerList1 = null;
  var playersList = ["playerList1", "playerList2", "playerList3"];

  var charts = ["#chart", "#chart1", "#chart2"];

  var colour_selected = false;
  var changed = false;

  function select_australian(page) {
  	if(australian_box_check){
  		australian_box_check = false;
  	}
  	else {
  		australian_box_check = true;
  	}
  	radar(page);
  }

  function select_roland(page) {
  	if(roland_box_check){
  		roland_box_check = false;
  	}
  	else {
  		roland_box_check = true;
  	}
  	radar(page);
  }

  function select_wimbledon(page) {
  	if(wimbledon_box_check){
  		wimbledon_box_check = false;
  	}
  	else {
  		wimbledon_box_check = true;
  	}
  	radar(page);
  }

  function select_usa(page) {
  	if(usa_box_check){
  		usa_box_check = false;
  	}
  	else {
  		usa_box_check = true;
  	}
  	radar(page);
  }


/*[
{axis:axisTournamentOptions[0],value:150},*/
var radar = function(page){
  page_global = page;
  var format = d3.time.format("%m/%d/%Y");
  function parser(d) {
      d.player = +d.player_id;
      d.tourneyName = +d.tourney_name;
      d.tourneyDate = format.parse(d.tourney_date);
      d.aces = +d.ace;
      d.doubleFaults = +d.df;
      d.firstServe = +d.firstIn;
      d.firstServePoint = +d.firstWon;
      d.secondServePoint = +d.secondWon;
      d.breakPointFaced = +d.bpFaced;
      d.breakPointSaved = +d.bpSaved;
      d.serviceGame = +d.SvGms;


      return d;
  }

  d3.csv("data/PerformanceTournaments.csv", parser,
    function(error, csvdata) {
      definePrintArea(csvdata, page);
  });
}

function definePrintArea(csvdata, page){
    if (page == "1") {
        dateList = document.getElementById(yearsList[0]);
        playerList1 = document.getElementById(playersList[0]);
        dataTransform(csvdata, charts[0]);
    }else {
      for (var i = 0; i < 3; i++) {
        dateList = document.getElementById(yearsList[i + 1]);
        playerList1 = document.getElementById(playersList[i]);
        dataTransform(csvdata, charts[i]);
      }
    }

}

function dataTransform(csvdata, chart_pos){

  australian_check = false;
  roland_check = false;
  wimbledon_check = false;
  usa_check = false;

  //Get the actual year

    var index = dateList.selectedIndex;
    var year = dateList[index].value;

  //Get the actual player

    var index1 = playerList1.selectedIndex;
    var playerIndex = index1;
    var playerId = playerIdArray[index1];

    var australian = [];
    var roland = [];
    var wimbledon = [];
    var usa = [];

    for(var i = 0; i <= (csvdata.length-1); i++){
      var tourney = csvdata[i].tourney_name;
      var id = csvdata[i].player; //playerName
      var yearData = csvdata[i].tourneyDate.getFullYear();



      if(id == playerId){
        if(yearData == year){
          if (tourney == 'Austral' ) {
              australian.push(csvdata[i]);
              australian_check = true;
          }
          if (tourney == 'Roland ' ) {

              roland.push(csvdata[i]);
              roland_check = true;
          }
          if (tourney == 'Wimbled' ) {
              wimbledon.push(csvdata[i]);
              wimbledon_check = true;
          }
          if (tourney == 'US Open' ) {
              usa.push(csvdata[i]);
              usa_check = true;
          }
        }
      }
    }
    var data = [];
    if(australian_check || roland_check || wimbledon_check || usa_check){


        if(australian_check){
          var australian_data = [
            {axis:axisTournamentOptions[0],value:australian[0].aces},
            {axis:axisTournamentOptions[1],value:australian[0].doubleFaults},
            {axis:axisTournamentOptions[2],value:australian[0].firstServe},
            {axis:axisTournamentOptions[3],value:australian[0].firstServePoint},
            {axis:axisTournamentOptions[4],value:australian[0].secondServePoint},
            {axis:axisTournamentOptions[5],value:australian[0].breakPointFaced},
            {axis:axisTournamentOptions[6],value:australian[0].breakPointSaved},
            {axis:axisTournamentOptions[7],value:australian[0].serviceGame}
          ];

            data.push(australian_data);
        }
        if(roland_check){
          var roland_data = [
            {axis:axisTournamentOptions[0],value:roland[0].aces},
            {axis:axisTournamentOptions[1],value:roland[0].doubleFaults},
            {axis:axisTournamentOptions[2],value:roland[0].firstServe},
            {axis:axisTournamentOptions[3],value:roland[0].firstServePoint},
            {axis:axisTournamentOptions[4],value:roland[0].secondServePoint},
            {axis:axisTournamentOptions[5],value:roland[0].breakPointFaced},
            {axis:axisTournamentOptions[6],value:roland[0].breakPointSaved},
            {axis:axisTournamentOptions[7],value:roland[0].serviceGame}
          ];

          data.push(roland_data);
        }

        if (wimbledon_check) {
          var wimbledon_data = [
            {axis:axisTournamentOptions[0],value:wimbledon[0].aces},
            {axis:axisTournamentOptions[1],value:wimbledon[0].doubleFaults},
            {axis:axisTournamentOptions[2],value:wimbledon[0].firstServe},
            {axis:axisTournamentOptions[3],value:wimbledon[0].firstServePoint},
            {axis:axisTournamentOptions[4],value:wimbledon[0].secondServePoint},
            {axis:axisTournamentOptions[5],value:wimbledon[0].breakPointFaced},
            {axis:axisTournamentOptions[6],value:wimbledon[0].breakPointSaved},
            {axis:axisTournamentOptions[7],value:wimbledon[0].serviceGame}
          ];

          data.push(wimbledon_data);
        }

        if(usa_check){
          var usa_data = [
            {axis:axisTournamentOptions[0],value:usa[0].aces},
            {axis:axisTournamentOptions[1],value:usa[0].doubleFaults},
            {axis:axisTournamentOptions[2],value:usa[0].firstServe},
            {axis:axisTournamentOptions[3],value:usa[0].firstServePoint},
            {axis:axisTournamentOptions[4],value:usa[0].secondServePoint},
            {axis:axisTournamentOptions[5],value:usa[0].breakPointFaced},
            {axis:axisTournamentOptions[6],value:usa[0].breakPointSaved},
            {axis:axisTournamentOptions[7],value:usa[0].serviceGame}
          ];

          data.push(usa_data);
        }

        if (australian_check && roland_check && wimbledon_check && usa_data ){
          graph_colour.range([blue_colour, orange_colour, green_colour, red_colour]);

        }
        else{
          if(!australian_check){
              graph_colour.range([orange_colour, green_colour, red_colour]);
              if (!roland_check) {
                graph_colour.range([green_colour, red_colour]);
                if (!wimbledon_check) {
                  graph_colour.range([red_colour]);
                }
                if (!usa_check) {
                  graph_colour.range([green_colour]);
                }
              }
              else{
                if (!wimbledon_check) {
                  graph_colour.range([orange_colour, red_colour]);
                  if (!usa_check) {
                    graph_colour.range([orange_colour]);
                  }
                }
                else{
                  if(!usa_check){
                  graph_colour.range([orange_colour, green_colour]);
                  }
                }
              }
          }
          else{
            if(!roland_check){
                graph_colour.range([blue_colour, green_colour, red_colour]);
                if (!wimbledon_check) {
                  graph_colour.range([blue_colour, red_colour]);
                  if (!usa_check) {
                    graph_colour.range([blue_colour]);
                  }
                }
                else{
                  if (!usa_check) {
                    graph_colour.range([blue_colour, green_colour]);
                  }
                }
            }
            else{
              if(!wimbledon_check){
                  graph_colour.range([blue_colour, orange_colour, red_colour]);
                  if (!usa_check) {
                    graph_colour.range([blue_colour, orange_colour]);
                  }
              }else{
                if(!usa_check){
                    graph_colour.range([blue_colour, orange_colour, green_colour]);

                }
              }
            }
          }
        }

            RadarChart.draw(chart_pos, data);
    }
    else {



        RadarChart.draw(chart_pos, data);

    }
}
var RadarChart = {
  draw: function(id, d){
  var cfg = {
	 radius: 3,
	 factor: 1,
	 factorLegend: .85,
	 levels: 6,
	 maxValue: 0.6,
	 radians: 2 * Math.PI,
	 opacityArea: 0,
	 TranslateX: 80,
	 TranslateY: 25,
	 ExtraWidthX: 300,
	 ExtraWidthY: 50,
   w: 250,
   h: 250,
   color:graph_colour

	};

	//cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
  cfg.maxValue = 600;
	var allAxis = axisTournamentOptions;
	var total = allAxis.length;
	var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
	d3.select(id).select("svg").remove();




	var g = d3.select(id)
			.append("svg")
			.attr("width", cfg.w+cfg.ExtraWidthX)
			.attr("height", cfg.h+cfg.ExtraWidthY)
			.append("g")
			.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
			;

  //Mouseover tip
  var tip = d3.tip()
			.attr('class', 'd3-tip')
			.offset([65, 40])
			.html(function(d) {
	    return "<strong>" + (Math.round(d.value)) +" " + d.axis +
                " </strong>";
			});

  g.call(tip);


	//Circular segments
	for(var j=0; j<cfg.levels; j++){
	  var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
	  g.selectAll(".levels")
	   .data(allAxis)
	   .enter()
	   .append("svg:line")
	   .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
	   .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
	   .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
	   .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
	   .attr("class", "line")
	   .style("stroke", "grey")
	   .style("stroke-opacity", "0.75")
	   .style("stroke-width", "0.3px")
	   .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
	}

	series = 0;

	var axis = g.selectAll(".axis")
			.data(allAxis)
			.enter()
			.append("g")
			.attr("class", "axis");

	axis.append("line")
		.attr("x1", cfg.w/2)
		.attr("y1", cfg.h/2)
		.attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
		.attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
		.attr("class", "line")
		.style("stroke", "grey")
		.style("stroke-width", "1px");

	axis.append("text")
		.attr("class", "legend")
		.text(function(d){return d})
		.style("font-family", "sans-serif")
		.style("font-size", "8px")
		.attr("text-anchor", "middle")
		.attr("transform", function(d, i){return "translate(0, 5)"})
		.attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
		.attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});




	d.forEach(function(y, x){
	  dataValues = [];
	  g.selectAll(".nodes")
		.data(y, function(j, i){
		  dataValues.push([
			cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
			cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
		  ]);
		});
	  dataValues.push(dataValues[0]);
	  g.selectAll(".area")
					 .data([dataValues])
					 .enter()
					 .append("polygon")
					 .attr("class", "radar-chart-serie"+series)
					 .style("stroke-width", "2px")
					 .style("stroke", cfg.color(series))
					 .attr("points",function(d) {
						 var str="";

						 for(var pti=0;pti<d.length;pti++){
							 str=str+d[pti][0]+","+d[pti][1]+" ";
						 }
						 return str;
					  })
					 .style("fill", function(j, i){return cfg.color(series)})
					 .style("fill-opacity", function(d){
               if(australian_box_check || roland_box_check || wimbledon_box_check || usa_box_check){
                 if ((australian_box_check && australian_check && cfg.color(series) == blue_colour) || (roland_box_check && roland_check && cfg.color(series) == orange_colour) || (wimbledon_box_check && roland_check && cfg.color(series) == green_colour) || (usa_box_check && usa_check && cfg.color(series) == red_colour)) {
                   return 0.5;
                 }else {
                   return 0;
                 }
               }

              if ((cfg.color(x) == colour_selected) && changed) {
                    return 0.8;
              }else {
                return 0;
              }

                return cfg.opacityArea;
              })
              .on('mouseover', function (d){
                       z = "polygon."+d3.select(this).attr("class");

                       if(australian_box_check || roland_box_check || wimbledon_box_check || usa_box_check){

                       }else{
                         g.selectAll("polygon")
                          .transition(200)
                          .style("fill-opacity", 0);
                         g.selectAll(z)
                          .transition(200)
                          .style("fill-opacity", 0.8);
                          colour_selected = cfg.color(x);
                          changed = true;
                          radar("2");
                         }
                       }
                  )
              .on('mouseout', function(){
                if(australian_box_check || roland_box_check || wimbledon_box_check || usa_box_check){
                      if ((australian_box_check && australian_check && cfg.color(series) == blue_colour) || (roland_box_check && roland_check && cfg.color(series) == orange_colour) || (wimbledon_box_check && wimbledon_check && cfg.color(series) == green_colour) || (usa_box_check && usa_check && cfg.color(series) == red_colour)) {
                      }
                  }else{
                       g.selectAll("polygon")
                        .transition(200)
                        .style("fill-opacity", cfg.opacityArea);
                        changed = false;
                        radar("2");
                  }
              });


	  series++;
	});
	series=0;


	d.forEach(function(y, x){
	  g.selectAll(".nodes")
		.data(y).enter()
		.append("svg:circle")
		.attr("class", "radar-chart-serie"+series)
		.attr('r', cfg.radius)
		.attr("alt", function(j){return Math.max(j.value, 0)})
		.attr("cx", function(j, i){
		  dataValues.push([
			cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
			cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
		]);
		return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
		})
		.attr("cy", function(j, i){
		  return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
		})
		.attr("data-id", function(j){return j.axis})
		.style("fill", cfg.color(series))
    .style("fill-opacity", .9)
    //.on('mouseover', tip.show)
    .on('mouseover', function (d){
             tip.show(d);
             z = "polygon."+d3.select(this).attr("class");
             g.selectAll("polygon")
              .transition(200)
              .style("fill-opacity", 0);
             g.selectAll(z)
              .transition(200)
              .style("fill-opacity", 0.8);

              if(australian_box_check || roland_box_check || wimbledon_box_check || usa_box_check){

              }else {
                changed = true;
                radar("2");
              }


            })
   // .on('mouseout', tip.hide);
	  .on('mouseout', function(){
      tip.hide(d);
      if(australian_box_check || roland_box_check || wimbledon_box_check || usa_box_check){
            RadarChart.draw(id, d);
      }else{
          g.selectAll("polygon")
           .transition(200)
           .style("fill-opacity", cfg.opacityArea);
           changed = false;
           radar("2");
        }

    });


	  series++;
	});
  if (d.length == 0) {
    d3.select(id).select("svg").remove();
    var g = d3.select(id)
  			.append("svg")
  			.attr("width", cfg.w+cfg.ExtraWidthX)
  			.attr("height", cfg.h+cfg.ExtraWidthY)
  			.append("g")
  			.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
  			;

      g.append("svg:image")
        .attr('x',-100)
        .attr('y',-300)
        .attr('width', 400)
        .attr('height', 800)
        .attr("xlink:href","images/no_data.png" );
  }
  }
};
