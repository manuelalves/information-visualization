var data_radial = null;
var keys = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
first = 0;

function initData(page) {
    if (first == 0) {
        data_radial = [{data:{ January:5,
                    February:0,
                    March:6,
                    April:0,
                    May:0,
                    June:0,
                    July:0,
                    August:5,
                    September:0,
                    October:0,
                    November:0,
                    December:0 }}];
                    first ++;
    }

    var last_stage;
    var finals;

    var format = d3.time.format("%d-%m-%Y");
    function parser(d) {
        d.player = +d.loser_id;
        d.tourneyName = +d.tourney_name;
        d.tourneyDate = format.parse(d.tourney_date);
        d.roundN = +d.round;

        return d;
    }

    if (page == "1") {
        dateList = document.getElementById(yearsList[0]);
        playerList1 = document.getElementById(playersList[0]);

        d3.csv("data/TimeOfSeasonPerformance.csv", parser,
          function(error, csvdata) {
            last_stage = csvdata;
        });

        d3.csv("data/Finals.csv", parser,
          function(error, csvdata2) {
            finals = csvdata2;
            definePrintArea2(last_stage, finals);
        });


    }else {
      for (var i = 0; i < 3; i++) {
        dateList = document.getElementById(yearsList[i + 1]);
        playerList1 = document.getElementById(playersList[i]);
        d3.csv("data/TimeOfSeasonPerformance.csv", parser,
          function(error, csvdata) {
            last_stage = csvdata;
        });

        d3.csv("data/Finals.csv", parser,
          function(error, csvdata2) {
            finals = csvdata2;
            definePrintArea2(last_stage, finals);
        });
      }
    }



};

function definePrintArea2(last_stage, finals){

    var index = dateList.selectedIndex;
    var year = dateList[index].value;

  //Get the actual player

    var index1 = playerList1.selectedIndex;
    var playerIndex = index1;
    var playerId = playerIdArray[index1];


  var data_australian = [];
  var data_miami = [];
  var data_montecarlo = [];
  var data_rome = [];
  var data_roland = [];
  var data_wimbledon = [];
  var data_cincinati = [];
  var data_usa = [];
  var data_paris = [];


  for(var i = 0; i <= (last_stage.length-1); i++){
    var tourney = last_stage[i].tourney_name;
    var id = last_stage[i].player; //playerName
    var yearData = last_stage[i].tourneyDate.getFullYear();


    if(id == playerId){
      if(yearData == year){
        if (tourney == 'Australian Open             ' ) {
            data_australian.push(last_stage[i]);
        }
        if (tourney == 'Miami Masters             ' ) {
            data_miami.push(last_stage[i]);
        }
        if (tourney == 'Monte Carlo Masters             ' ) {
            data_montecarlo.push(last_stage[i]);
        }
        if (tourney == 'Rome Masters Masters             ' ) {
            data_rome.push(last_stage[i]);
        }
        if (tourney == 'Roland-Garros              ' ) {
            data_roland.push(last_stage[i]);
        }
        if (tourney == 'Wimbledon             ' ) {
            data_wimbledon.push(last_stage[i]);
        }
        if (tourney == 'Cincinnati Masters             ' ) {
            data_cincinati.push(last_stage[i]);
        }
        if (tourney == 'US Open             ' ) {
            data_usa.push(last_stage[i]);
        }
        if (tourney == 'Paris Masters             ' ) {
            data_paris.push(last_stage[i]);
        }

      }
    }
  }

  for(var i = 0; i <= (finals.length-1); i++){
    var tourney2 = finals[i].tourney_name;
    var id2 = finals[i].player; //playerName
    var yearData2 = finals[i].tourneyDate.getFullYear();

    if(id2 == playerId){
      if(yearData2 == year){
        if (tourney2 == 'Australian Open             ' ) {
            data_australian.push(finals[i]);
        }
        if (tourney2 == 'Miami Masters             ' ) {
            data_miami.push(finals[i]);
        }
        if (tourney2 == 'Monte Carlo Masters             ' ) {
            data_montecarlo.push(finals[i]);
        }
        if (tourney2 == 'Rome Masters Masters             ' ) {
            data_rome.push(finals[i]);
        }
        if (tourney2 == 'Roland-Garros              ' ) {
            data_roland.push(finals[i]);
        }
        if (tourney2 == 'Wimbledon             ' ) {
            data_wimbledon.push(finals[i]);
        }
        if (tourney2 == 'Cincinnati Masters             ' ) {
            data_cincinati.push(finals[i]);
        }
        if (tourney2 == 'US Open             ' ) {
            data_usa.push(finals[i]);
        }
        if (tourney2 == 'Paris Masters             ' ) {
            data_paris.push(finals[i]);
        }

      }
    }
  }


  function converseRanking(ranking){
    if(ranking.length == 0){
      return 0;
    }else if (ranking[0].round == "F") {
      return 7;
    }else if (ranking[0].round == "SF") {
      return 6;
    }else if (ranking[0].round == "QF") {
      return 5;
    }else if (ranking[0].round == "R16") {
      return 4;
    }else if (ranking[0].round == "R32") {
      return 3;
    }else if (ranking[0].round == "R64") {
      return 2;
    }else if (ranking[0].round == "R12") {
      return 1;
    }
  }


  data_radial =[{data:{ January:converseRanking(data_australian),
              February:0,
              March:converseRanking(data_miami),
              April:converseRanking(data_montecarlo),
              May:converseRanking(data_rome),
              June:converseRanking(data_roland),
              July:converseRanking(data_wimbledon),
              August:converseRanking(data_cincinati),
              September:converseRanking(data_usa),
              October:0,
              November:converseRanking(data_paris),
              December:0 }}];


  // Player
console.log(data_radial);



}
function update(page) {


        if(page == '1'){
            initData("1");

            d3.select('#chart5')
              .datum(data_radial)
              .call(chart5);
        }if (page == '2') {
            initData("2");

            d3.select('#chart5')
              .datum(data_radial)
              .call(chart5);

              d3.select('#chart6')
                .datum(data_radial)
                .call(chart5);

                d3.select('#chart7')
                  .datum(data_radial)
                  .call(chart5);
        }




}

d3.select('#playerList1')
  .on('change', update);

d3.select('#yearList')
    .on('change', update);

d3.select('#playerList2')
      .on('change', update);

    d3.select('#yearList1')
        .on('change', update);

d3.select('#playerList3')
          .on('change', update);

d3.select('#yearList2')
            .on('change', update);

d3.select('#yearList3')
    .on('change', update);

var chart5 = radialBarChart()
  .barHeight(120)
  .reverseLayerOrder(true)
  .capitalizeLabels(true)
  .barColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0'])
  .domain([0,7])
  //.tickValues([1,2,3,4,5,6,7,8,9,10])
  .tickCircleValues([1,2,3,4,5,6]);

function radialBarChart() {

  // Configurable variables
  var margin = {top: 20, right: 20, bottom: 20, left: 20};
  var barHeight = 100;
  var reverseLayerOrder = false;
  var barColors = undefined;
  var capitalizeLabels = false;
  var domain = [0, 100];
  var tickValues = undefined;
  var colorLabels = false;
  var tickCircleValues = [];
  var transitionDuration = 1000;

  // Scales & other useful things
  var numBars = null;
  var barScale = null;
  var keys = null;
  var labelRadius = 0;


  function init(d) {
    barScale = d3.scale.linear().domain(domain).range([0, barHeight]);

    keys = d3.map(d[0].data).keys();
    numBars = keys.length;

    // Radius of the key labels
    labelRadius = barHeight * 1.025;
  }

  function svgRotate(a) {
    return 'rotate('+ +a +')';
  }

  function svgTranslate(x, y) {
    return 'translate('+ +x +','+ +y +')';
  }

  function initChart(container) {
    var g = d3.select(container)
      .append('svg')
      .style('width', 2 * barHeight + margin.left + margin.right + 'px')
      .style('height', 2 * barHeight + margin.top + margin.bottom + 'px')
      .append('g')
      .classed('radial-barchart5', true)
        .attr('transform', svgTranslate(margin.left + barHeight, margin.top + barHeight));

    // Concentric circles at specified tick values
    g.append('g')
      .classed('tick-circles', true)
      .selectAll('circle')
      .data(tickCircleValues)
      .enter()
      .append('circle')
      .attr('r', function(d) {return barScale(d);})
      .style('fill', 'none');
  }

  function renderOverlays(container) {
    var g = d3.select(container).select('svg g.radial-barchart5');

    // Spokes
    g.append('g')
      .classed('spokes', true)
      .selectAll('line')
      .data(keys)
      .enter()
      .append('line')
      .attr('y2', -barHeight)
      .attr('transform', function(d, i) {return svgRotate(i * 360 / numBars);});

  /*  // Axis
    var axisScale = d3.scale.linear().domain(domain).range([0, -barHeight]);
    var axis = d3.svg.axis().scale(axisScale).orient('right');
    if(tickValues)
      axis.tickValues(tickValues);
    g.append('g')
      .classed('axis', true)
      .call(axis);*/

    // Outer circle
    g.append('circle')
      .attr('r', barHeight)
      .classed('outer', true)
      .style('fill', 'none');

    // Labels
    var labels = g.append('g')
      .classed('labels', true);

    labels.append('def')
      .append('path')
      .attr('id', 'label-path')
      .attr('d', 'm0 ' + -labelRadius + ' a' + labelRadius + ' ' + labelRadius + ' 0 1,1 -0.01 0');

    labels.selectAll('text')
      .data(keys)
      .enter()
      .append('text')
      .style('text-anchor', 'middle')
      .style('fill', function(d, i) {return colorLabels ? barColors[i % barColors.length] : null;})
      .append('textPath')
      .attr('xlink:href', '#label-path')
      .attr('startOffset', function(d, i) {return i * 100 / numBars + 50 / numBars + '%';})
      .text(function(d) {return capitalizeLabels ? d.toUpperCase() : d;});
  }

  function chart5(selection) {
    selection.each(function(d) {

      init(d);

      if(reverseLayerOrder)
        d.reverse();

      var g = d3.select(this).select('svg g.radial-barchart5');

      // check whether chart5 has already been created
      var update = g[0][0] !== null; // true if data is being updated

      if(!update)
        initChart(this);

      g = d3.select(this).select('svg g.radial-barchart5');

      // Layer enter/exit/update
      var layers = g.selectAll('g.layer')
        .data(d);

      layers
        .enter()
        .append('g')
        .attr('class', function(d, i) {
          return 'layer-' + i;
        })
        .classed('layer', true);

      layers.exit().remove();

      // Segment enter/exit/update
      var segments = layers
        .selectAll('path')
        .data(function(d) {
          var m = d3.map(d.data);
          return m.values();
        });

      segments
        .enter()
        .append('path')
        .style('fill', function(d, i) {
          if(!barColors) return;
          return barColors[i % barColors.length];
        });

      segments.exit().remove();

      segments
        .transition()
        .duration(transitionDuration)
        .attr('d', d3.svg.arc().innerRadius(0).outerRadius(or).startAngle(sa).endAngle(ea))

      if(!update)
        renderOverlays(this);
    });

  }

  /* Arc functions */
  or = function(d, i) {
    return barScale(d);
  }
  sa = function(d, i) {
    return (i * 2 * Math.PI) / numBars;
  }
  ea = function(d, i) {
    return ((i + 1) * 2 * Math.PI) / numBars;
  }

  /* Configuration getters/setters */
  chart5.margin = function(_) {
    if (!arguments.length) return margin;
    margin = _;
    return chart5;
  };

  chart5.barHeight = function(_) {
    if (!arguments.length) return barHeight;
    barHeight = _;
    return chart5;
  };

  chart5.reverseLayerOrder = function(_) {
    if (!arguments.length) return reverseLayerOrder;
    reverseLayerOrder = _;
    return chart5;
  };

  chart5.barColors = function(_) {
    if (!arguments.length) return barColors;
    barColors = _;
    return chart5;
  };

  chart5.capitalizeLabels = function(_) {
    if (!arguments.length) return capitalizeLabels;
    capitalizeLabels = _;
    return chart5;
  };

  chart5.domain = function(_) {
    if (!arguments.length) return domain;
    domain = _;
    return chart5;
  };

  chart5.tickValues = function(_) {
    if (!arguments.length) return tickValues;
    tickValues = _;
    return chart5;
  };

  chart5.colorLabels = function(_) {
    if (!arguments.length) return colorLabels;
    colorLabels = _;
    return chart5;
  };

  chart5.tickCircleValues = function(_) {
    if (!arguments.length) return tickCircleValues;
    tickCircleValues = _;
    return chart5;
  };

  chart5.transitionDuration = function(_) {
    if (!arguments.length) return transitionDuration;
    transitionDuration = _;
    return chart5;
  };

  return chart5;
}
