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

function truncate(str, maxLength, suffix) {
  if(str.length > maxLength) {
      str = str.substring(0, maxLength + 1);
      str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
      str = str + suffix;
  }
  return str;
}

var year = '2010';

function select_year(y) {
	year=y;
	bubbleChart();
}

var bubbleChart = function(){

  var margin = {top: 130, right: 10, bottom: 30, left: 80},
  	width = 600,
  	height = 550;

  var start_month = 1,
  	end_month = 12;

    //Get the actual player
    var playerList1 = document.getElementById("playerList1");
    var index1 = playerList1.selectedIndex;
    var playerIndex = index1;
    var playerId1 = playerIdArray[index1];

    var playerList2 = document.getElementById("playerList2");
    var index2 = playerList2.selectedIndex;
    var playerIndex2 = index2;
    var playerId2 = playerIdArray[index2];

    var playerList3 = document.getElementById("playerList3");
    var index3 = playerList3.selectedIndex;
    var playerIndex3 = index3;
    var playerId3 = playerIdArray[index3];

  // define the x scale (horizontal)
  var mindate = new Date('1/1/2010');
  var maxdate = new Date('12/1/2010');

  var c = d3.scale.category10();

  var y = d3.time.scale()
  	 .domain([mindate, maxdate])
  	 .range([0, height]);

  var yAxis = d3.svg.axis()
  	.scale(y)
  	.ticks(d3.time.months)
  	//.tickSize(8, 0)
  	.tickFormat(d3.time.format("%B"))
  	.orient("left");


    var format = d3.time.format("%m/%d/%Y");
    function parser(d) {
    d.player = +d.player_id;
    d.playerName = d.player_name;
    d.ranking = +d.ranking;
    d.surface = d.surface;
    d.rankPoints = +d.rank_points;
    d.tourneyDate = format.parse(d.tourney_date);

    return d;
}

function bubble(csvdata) {

    d3.select("#bubble").select("svg").remove();

    var svg = d3.select("#bubble").append("svg")
    	.attr("width", width + margin.left + margin.right)
    	.attr("height", height + margin.top + margin.bottom)
    	.style("margin-left", margin.left + "px")
    	.append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      //Mouseover tip
      var tip = d3.tip()
    			.attr('class', 'd3-tip')
    			.offset([-5, 0])
    			.html(function(d) {
            return "<strong>" +  d[2] + " " +"points"
                    " </strong>";
    			});

      svg.call(tip);


           var year_1 = [];


           var year_2 = [];


           var year_3 = [];



           for(var i = 0; i <= (csvdata.length-1); i++){
               var yearData = csvdata[i].tourneyDate.getFullYear();
               var id = csvdata[i].player; //playerID

           if(id == playerId1){
               if (yearData == year ) {
                   year_1.push(csvdata[i]);
               }
           }


           if(id == playerId2){
               if (yearData == year ) {
                   year_2.push(csvdata[i]);
               }

           }

           if(id == playerId3){
               if (yearData == year ) {
                   year_3.push(csvdata[i]);
               }
           }

       }

var old ;
var actual;

var insert =[];
var data = [];

var color;

//data.push({dados:[[year_2010_2[1].tourneyDate.getMonth()+1, (year_2010_2[1].rankPoints/100), year_2010_2[1].rankPoints,color]], total:'0', name: year_2010_2[1].playerName });
//data.push({dados:[[year_2010_3[1].tourneyDate.getMonth()+1, (year_2010_3[1].rankPoints/100), year_2010_3[1].rankPoints,color]], total:'0', name: year_2010_3[1].playerName });


for(var j = 1; j <= (year_1.length-1); j++){
    if(year_1[j].surface == 'Hard'){
        color = '#1f77b4';
    }
    if(year_1[j].surface == 'Gras'){
        color = 'green';
    }
    if(year_1[j].surface == 'Clay'){
        color = 'orange';
    }
    if(year_1[1].surface == 'none'){
        color = 'white';
    }

    if(j==1){
        data.push({dados:[[year_1[1].tourneyDate.getMonth()+1, (year_1[1].rankPoints/100), year_1[1].rankPoints,color]], total:'0', name: year_1[1].playerName });
    }

        if(j > 1){
            old = year_1[j-1].tourneyDate.getMonth();
            actual = year_1[j].tourneyDate.getMonth();


            if(old != actual)
            {
            if(year_1[1].surface != 'none'){
                    insert = [year_1[j].tourneyDate.getMonth()+1, (year_1[j].rankPoints/100), year_1[j].rankPoints,color];
                    data[0]['dados'].push(insert);
            }
           }
   }
}


for(var j = 1; j <= (year_2.length)-1; j++){
    if(year_2[j].surface == 'Hard'){
        color = '#1f77b4';
    }
    if(year_2[j].surface == 'Gras'){
        color = 'green';
    }
    if(year_2[j].surface == 'Clay'){
        color = 'orange';
    }
    if(year_2[1].surface == 'none'){
        color = 'white';
    }

    if(j==1){
        data.push({dados:[[year_2[1].tourneyDate.getMonth()+1, (year_2[1].rankPoints/100), year_2[1].rankPoints,color]], total:'0', name: year_2[1].playerName });
    }

        if(j > 1){
            old = year_2[j-1].tourneyDate.getMonth();
            actual = year_2[j].tourneyDate.getMonth();

            if(old != actual)
            {

                insert = [year_2[j].tourneyDate.getMonth()+1, (year_2[j].rankPoints/100), year_2[j].rankPoints,color];
                data[1]['dados'].push(insert);
           }
   }
}

for(var j = 1; j <= (year_3.length)-1; j++){
    if(year_3[j].surface == 'Hard'){
        color = '#1f77b4';
    }
    if(year_3[j].surface == 'Gras'){
        color = 'green';
    }
    if(year_3[j].surface == 'Clay'){
        color = 'orange';
    }
    if(year_3[1].surface == 'none'){
        color = 'white';
    }

    if(j==1){
        data.push({dados:[[year_3[1].tourneyDate.getMonth()+1, (year_3[1].rankPoints/100), year_3[1].rankPoints,color]], total:'0', name: year_3[1].playerName });
    }

        if(j > 0){
            old = year_3[j-1].tourneyDate.getMonth();
            actual = year_3[j].tourneyDate.getMonth();

            if(old != actual)
            {

                insert = [year_3[j].tourneyDate.getMonth()+1, (year_3[j].rankPoints/100), year_3[j].rankPoints,color];
                data[2]['dados'].push(insert);
           }
   }
}

  	y.domain([mindate, maxdate]);
  	var yScale = d3.scale.linear()
  		.domain([start_month, end_month])
  		.range([0, height]);

  	svg.append("g")
  		.attr("class", "y axis")
  		.attr("transform", "translate(0," + 0 + ")")
  		.call(yAxis);


        //var g = d3.select("#bubble")
        //        .attr("class","journal");

  	for (var j = 0; j < data.length; j++) {

  		var g = svg.append("g").attr("class","journal");

  		var circles = g.selectAll("circle")
  			.data(data[j]['dados'])
  			.enter()
  			.append("circle");

  		var text = g.selectAll("text")
  			.data(data[j]['dados'])
  			.enter()
  			.append("text");

  		var rScale = d3.scale.linear()
  			.domain([0, d3.max(data[j]['dados'], function(d) { return d[1]; })])
  			.range([5, 19]);


  		circles
  			.attr("cx", j*50+50)
  			.attr("cy", function(d, i) {return yScale(d[0]); })
  			.attr("r", function(d) { return rScale(d[1]); })
  			.style("fill", function(d) { return d[3]; })
        .on('mouseover', function (d){
             tip.show(d)
             var g = d3.select(this).node().parentNode
         		 d3.select(g).selectAll("[fill='#1f77b4'].circle").style("opacity","0.5");})
        .on('mouseout', function(d){
              tip.hide(d)
              var g = d3.select(this).node().parentNode
          		d3.select(g).selectAll("[fill='#1f77b4'].circle").style("opacity","1");});

  		text
  			.attr("x", j*50+33)
  			.attr("y",function(d, i) { return yScale(d[0])+5; })
  			.attr("class","value")
  			.text(function(d){ return d[2]; })
  			.style("fill", function(d) { return d[3]; })
  			.style("display","none");

  		g.append("text")
  			.attr("x",j*40+50)
  			.attr("y",j*40+15)
  			.attr("class","label")
  			.text(truncate(data[j]['name'],60,"..."))
  			.style("fill", function(d) { return "#999"; })
            .on("mouseover", mouseover)
  			.on("mouseout", mouseout)
            .attr("transform", function(d) {
                return "rotate(-50)"
                });
            //.attr("transform", "rotate(9)" );

  	};

  	function mouseover(p) {
  		var g = d3.select(this).node().parentNode;
  		d3.select(g).selectAll("circle").style("display","none");
  		d3.select(g).selectAll("text.value").style("display","block");
  	}

  	function mouseout(p) {
  		var g = d3.select(this).node().parentNode;
  		d3.select(g).selectAll("circle").style("display","block");
  		d3.select(g).selectAll("text.value").style("display","none");
  	}


  }


  d3.csv("data/Performances.csv", parser,
         function(error, csvdata) {
       bubble(csvdata);
   });
   };
