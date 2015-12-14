
var graph_surface_colour = d3.scale.category10();

var axisSurfaceOptions = ['Aces', 'Double Faults', '1st Serve', '1st Serve Points Won', '2nd Serve Points Won', 'Break Points Faced', 'Break Points Saved', 'Service Games Played'];

var blue_colour = "#1f77b4";
var orange_colour = "#ff7f0e";
var green_colour = "#2ca02c";

var hard_box_check = false;
var clay_box_check = false;
var grass_box_check = false;

var hard_check = false;
var clay_check = false;
var grass_check = false;

var page_surface_global = null;

var changed_surface = false;
var colour_selected_surface = false;
//Get the actual year
  var dateListSurface = 0;
  var yearsListSurface = ["yearList", "yearList1", "yearList2", "yearList3"];

//Get the actual player
  var playerListSurface = null;
  var playersListSurface = ["playerList1", "playerList2", "playerList3"];

  var chartsSurface = ["#surfacechart", "#surfacechart1", "#surfacechart2"];


  var index_surface = null;
  var year_surface = null;

  var index_surface1 = null;
  var playerIndex = null;
  var playerId_surface = null;

function select_hard(page) {
  if(hard_box_check){
    hard_box_check = false;
  }
  else {
    hard_box_check = true;
  }
  radar_surface(page);
}

function select_clay(page) {
  if(clay_box_check ){
    clay_box_check  = false;
  }
  else {
    clay_box_check = true;
  }
  radar_surface(page);
}

function select_grass(page) {
  if(grass_box_check){
    grass_box_check = false;
  }
  else {
    grass_box_check = true;
  }
  radar_surface(page);
}

var radar_surface = function(page){
  page_surface_global = page;
  var format = d3.time.format("%m/%d/%Y");
  function parser(d) {
      d.player = +d.player_id;
      d.surfaces = +d.surface;
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

  if (page == "1") {
      dateListSurface = document.getElementById(yearsListSurface[0]);
      playerListSurface = document.getElementById(playersListSurface[0]);

      index_surface = dateListSurface.selectedIndex;
      year_surface = dateListSurface[index_surface].value;

      index_surface1 = playerListSurface.selectedIndex;
      playerIndex = index_surface1;
      playerId_surface = playerIdArray[index_surface1];

      if (year_surface == "2010") {
          d3.csv("data/2012-Performance_DM.csv", parser,
            function(error, csvdata) {
              dataTransformSurfaces(csvdata, chartsSurface[0]);
          });
      }else if (year_surface == "2011") {
          d3.csv("data/2011-Performance_DM.csv", parser,
            function(error, csvdata) {
              dataTransformSurfaces(csvdata, chartsSurface[0]);
          });
      }else if (year_surface == "2012") {
          d3.csv("data/2012-Performance_DM.csv", parser,
            function(error, csvdata) {
              dataTransformSurfaces(csvdata, chartsSurface[0]);
          });
      }else if (year_surface == "2013") {
          d3.csv("data/2013-Performance_DM.csv", parser,
            function(error, csvdata) {
              dataTransformSurfaces(csvdata, chartsSurface[0]);
          });
      }else if (year_surface == "2014") {
          d3.csv("data/2014-Performance_DM.csv", parser,
            function(error, csvdata) {
              dataTransformSurfaces(csvdata, chartsSurface[0]);
          });
      }else if (year_surface == "2015") {
          d3.csv("data/2015-Performance_DM.csv", parser,
            function(error, csvdata) {
              dataTransformSurfaces(csvdata, chartsSurface[0]);
          });
      }

  }else {

    for (var j = 0; j < 3; j++) {
      dateListSurface = document.getElementById(yearsListSurface[j + 1]);
      playerListSurface = document.getElementById(playersListSurface[j]);

      index_surface = dateListSurface.selectedIndex;
      year_surface = dateListSurface[index_surface].value;

      index_surface1 = playerListSurface.selectedIndex;
      playerIndex = index_surface1;
      playerId_surface = playerIdArray[index_surface1];

      if (year_surface == "2010") {
          d3.csv("data/2010-Performance_DM.csv", parser,
            function(error, csvdata) {

              definePrintAreaSurface(csvdata, page);
          });
      }else if (year_surface == "2011") {
          d3.csv("data/2011-Performance_DM.csv", parser,
            function(error, csvdata) {
              definePrintAreaSurface(csvdata, page);
          });
      }else if (year_surface == "2012") {
          d3.csv("data/2012-Performance_DM.csv", parser,
            function(error, csvdata) {
              definePrintAreaSurface(csvdata, page);
          });
      }else if (year_surface == "2013") {
          d3.csv("data/2013-Performance_DM.csv", parser,
            function(error, csvdata) {
              definePrintAreaSurface(csvdata, page);
          });
      }else if (year_surface == "2014") {
          d3.csv("data/2014-Performance_DM.csv", parser,
            function(error, csvdata) {
              definePrintAreaSurface(csvdata, page);
          });
      }else if (year_surface == "2015") {
          d3.csv("data/2015-Performance_DM.csv", parser,
            function(error, csvdata) {
              definePrintAreaSurface(csvdata, page);
          });
      }
    }
  }
}

function definePrintAreaSurface(csvdata, page){
    if (page == "2") {
      for (var i = 0; i < 3; i++) {
        dateListSurface = document.getElementById(yearsListSurface[i + 1]);
        playerListSurface = document.getElementById(playersListSurface[i]);

        dataTransformSurfaces(csvdata, chartsSurface[i]);
      }
    }
}

function dataTransformSurfaces (csvdata, chart_pos){
  index_surface1 = playerListSurface.selectedIndex;
  playerIndex = index_surface1;
  playerId_surface = playerIdArray[index_surface1];

  var hard = [];
  var clay = [];
  var grass = [];

  hard_check = false;
  clay_check = false;
  grass_check = false;

  for(var i = 0; i <= (csvdata.length-1); i++){
    var surface = csvdata[i].surface;
    var id = csvdata[i].player; //playerName

    if(id == playerId_surface){
      if (surface== 'Hard               ' ) {
          hard.push(csvdata[i]);
          hard_check = true;
      }
      if (surface== 'Clay               ' ) {
          clay.push(csvdata[i]);
          clay_check = true;
      }
      if (surface== 'Gras               ' ) {
          grass.push(csvdata[i]);
          grass_check = true;
      }
    }
  }
  var data_surface = [];
  if (hard_check || clay_check || grass_check) {
    if (hard_check) {
      var hard_data = [
        {axis:axisSurfaceOptions[0],value:hard[0].aces},
        {axis:axisSurfaceOptions[1],value:hard[0].doubleFaults},
        {axis:axisSurfaceOptions[2],value:hard[0].firstServe},
        {axis:axisSurfaceOptions[3],value:hard[0].firstServePoint},
        {axis:axisSurfaceOptions[4],value:hard[0].secondServePoint},
        {axis:axisSurfaceOptions[5],value:hard[0].breakPointFaced},
        {axis:axisSurfaceOptions[6],value:hard[0].breakPointSaved},
        {axis:axisSurfaceOptions[7],value:hard[0].serviceGame}
      ];

        data_surface.push(hard_data);
    }
    if (clay_check) {
      var clay_data = [
        {axis:axisSurfaceOptions[0],value:clay[0].aces},
        {axis:axisSurfaceOptions[1],value:clay[0].doubleFaults},
        {axis:axisSurfaceOptions[2],value:clay[0].firstServe},
        {axis:axisSurfaceOptions[3],value:clay[0].firstServePoint},
        {axis:axisSurfaceOptions[4],value:clay[0].secondServePoint},
        {axis:axisSurfaceOptions[5],value:clay[0].breakPointFaced},
        {axis:axisSurfaceOptions[6],value:clay[0].breakPointSaved},
        {axis:axisSurfaceOptions[7],value:clay[0].serviceGame}
      ];

        data_surface.push(clay_data);
    }

    if (grass_check) {
      var grass_data = [
        {axis:axisSurfaceOptions[0],value:grass[0].aces},
        {axis:axisSurfaceOptions[1],value:grass[0].doubleFaults},
        {axis:axisSurfaceOptions[2],value:grass[0].firstServe},
        {axis:axisSurfaceOptions[3],value:grass[0].firstServePoint},
        {axis:axisSurfaceOptions[4],value:grass[0].secondServePoint},
        {axis:axisSurfaceOptions[5],value:grass[0].breakPointFaced},
        {axis:axisSurfaceOptions[6],value:grass[0].breakPointSaved},
        {axis:axisSurfaceOptions[7],value:grass[0].serviceGame}
      ];

        data_surface.push(grass_data);
    }


  if (hard_check && clay_check && grass_check) {
    graph_surface_colour.range([blue_colour, orange_colour, green_colour]);
  }else{ if (!hard_check) {
    graph_surface_colour.range([orange_colour, green_colour]);
    if (!clay_check) {
      graph_surface_colour.range([green_colour]);
    }
    else if (!grass_check) {
      graph_surface_colour.range([orange_colour]);
    }
  }else if (!clay_check) {
    graph_surface_colour.range([blue_colour, green_colour]);
    if (!grass_check) {
      graph_surface_colour.range([blue_colour]);
    }
  }else if (!grass_check) {
    graph_surface_colour.range([blue_colour, orange_colour]);
  }
}

      RadarSurfaceChart.draw(chart_pos, data_surface);
    }
else {

      RadarSurfaceChart.draw(chart_pos, data_surface);
}

}


 RadarSurfaceChart = {
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
   color:graph_surface_colour
	};

	cfg.maxValue = 120;
	var allAxis = axisSurfaceOptions;
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
               if(hard_box_check || clay_box_check || grass_box_check){
                 if ((hard_box_check && hard_check && cfg.color(series) == blue_colour) || (clay_box_check && clay_check && cfg.color(series) == orange_colour) || (grass_box_check && grass_check && cfg.color(series) == green_colour)) {
                   return 0.5;
                 }else {
                   return 0;
                 }
               }

              if ((cfg.color(x) == colour_selected) && changed_surface) {
                    return 0.8;
              }else {
                return 0;
              }

                return cfg.opacityArea;
              })
					 .on('mouseover', function (d){
										z = "polygon."+d3.select(this).attr("class");
                    if(hard_box_check || clay_box_check || grass_box_check){

                    }else{
                      g.selectAll("polygon")
                       .transition(200)
                       .style("fill-opacity", 0);
                      g.selectAll(z)
                       .transition(200)
                       .style("fill-opacity", 0.8);
                       colour_selected_surface = cfg.color(x);
                       changed_surface = true;
                       radar_surface("2");
                      }
									  })
					 .on('mouseout', function(){
             if(hard_box_check || clay_box_check || grass_box_check ){
                   if ((hard_box_check && hard_check && cfg.color(series) == blue_colour) || (clay_box_check && clay_check && cfg.color(series) == orange_colour) || (grass_box_check && grass_check && cfg.color(series) == green_colour) ) {
                   }
               }else{
                    g.selectAll("polygon")
                     .transition(200)
                     .style("fill-opacity", cfg.opacityArea);
                     changed_surface = false;
                     radar_surface("2");
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

              if(hard_box_check || clay_box_check || grass_box_check){

              }else {
                changed = true;
                radar("2");
              }


            })
   // .on('mouseout', tip.hide);
	  .on('mouseout', function(){
             tip.hide(d);
             if(hard_box_check || clay_box_check || grass_box_check ){
                   RadarSurfaceChart.draw(id, d);
             }else{
                 g.selectAll("polygon")
                  .transition(200)
                  .style("fill-opacity", cfg.opacityArea);
                  changed_surface = false;
                  radar_surface("2");
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
        .attr('x',-50)
        .attr('y',-300)
        .attr('width', 400)
        .attr('height', 800)
        .attr("xlink:href","images/no_data.png" );
  }
  }
};
