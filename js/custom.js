/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/** ******  left menu  *********************** **/


$(function () {
    $('#sidebar-menu li ul').slideUp();
    $('#sidebar-menu li').removeClass('active');

    $('#sidebar-menu li').click(function () {
        if ($(this).is('.active')) {
            $(this).removeClass('active');
            $('ul', this).slideUp();
            $(this).removeClass('nv');
            $(this).addClass('vn');
        } else {
            $('#sidebar-menu li ul').slideUp();
            $(this).removeClass('vn');
            $(this).addClass('nv');
            $('ul', this).slideDown();
            $('#sidebar-menu li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('#menu_toggle').click(function () {
        if ($('body').hasClass('nav-md')) {
            $('body').removeClass('nav-md');
            $('body').addClass('nav-sm');
            $('.left_col').removeClass('scroll-view');
            $('.left_col').removeAttr('style');
            $('.sidebar-footer').hide();

            if ($('#sidebar-menu li').hasClass('active')) {
                $('#sidebar-menu li.active').addClass('active-sm');
                $('#sidebar-menu li.active').removeClass('active');
            }
        } else {
            $('body').removeClass('nav-sm');
            $('body').addClass('nav-md');
            $('.sidebar-footer').show();

            if ($('#sidebar-menu li').hasClass('active-sm')) {
                $('#sidebar-menu li.active-sm').addClass('active');
                $('#sidebar-menu li.active-sm').removeClass('active-sm');
            }
        }
    });
});

/*
// Player Photo

//falta foto do Isner!!
imageArray = new Array("images/players/nadal.png","images/players/mannarino.png","images/players/dolgopolov.png","images/players/seppi.png", "images/players/murray.png", "images/players/becker.png",
                       "images/players/istomin.png", "images/players/ferrer.png", "images/players/goffin.png", "images/players/thiem.png", "images/players/gulbis.png",  "images/players/fognini.png",
                       "images/players/lopez.png", "images/players/verdasco.png", "images/players/monfils.png", "images/players/muller.png", "images/players/simon.png", "images/players/dimitrov.png",
                       "images/players/garciaLopez.png", "images/players/karlovic.png", "images/players/sock.png", "images/players/chardy.png", "images/players/janowicz.png", "images/players/tsonga.png",
                       "images/players/benneteau.png", "images/players/nishikori.png", "images/players/anderson.png", "images/players/mayer.png","images/players/rosol.png", "images/players/cilic.png",
                       "images/players/klizan.png", "images/players/youzhny.png","images/players/raonic.png", "images/players/kyrgios.png", "images/players/Djokovic.png", "images/players/andujar.png",
                       "images/players/busta.png", "images/players/cuevas.png", "images/players/kohlschreiber.png", "images/players/nadal.png","images/players/gasquet.png", "images/players/agut.png",
                       "images/players/Federer.png", "images/players/querrey.png", "images/players/giraldo.png",  "images/players/wawrinka.png","images/players/johnson.png", "images/players/berdych.png",
                       "images/players/robredo.png", "images/players/lu.png");


flagArray = new Array("","images/flags/es.png", "images/flags/ch.png", "images/flags/rs.png");
ageArray = new Array("","29", "34", "28");
birthdateArray = new Array("","1986.06.03", "1981.08.08", "1987.05.22");
birthplaceArray = new Array("","Mallorca, Spain", "Basel, Switzerland", "Belgrade, Serbia");
heightArray = new Array("","185", "185", "172");
handArray = new Array("","Left", "Right", "Right");

rankArray = new Array("","7", "3", "1");
pointsArray = new Array("","4330", "7098", "9765");

playerArray = new Array("Rafael Nadal","Adrian Mannarino","Alexandr Dolgopolov","Andreas Seppi","Andy Murray","Benjamin Becker",
						"Denis Istomin","David Ferrer","David Goffin","Dominic Thiem","Ernests Gulbis","Fabio Fognini",
						"Feliciano Lopez","Fernando Verdasco","Gael Monfils","Gilles Muller","Gilles Simon","Grigor Dimitrov",
						"Guillermo Lopez","Ivo Karlovic","Jack Sock","Jeremy Chardy","Jerzy Janowicz","Jo Tsonga","John Isner",
						"Julien Benneteau","Kei Nishikori","Kevin Anderson","Leonardo Mayer","Lukas Rosol","Marin Cilic",
						"Martin Klizan","Mikhail Youzhny","Milos Raonic","Nick Kyrgios","Novak Djokovic","Pablo Andujar",
						"Pablo  Busta","Pablo Cuevas","Philipp Kohlschreiber","Rafael Nadal","Richard Gasquet","Roberto Agut",
						"Roger Federer","Sam Querrey","Santiago Giraldo","Stanislas Wawrinka","Steve Johnson","Tomas Berdych",
						"Tommy Robredo","Yen Hsun Lu");

*/
// top 20 players


// when user browses to page



$('#content').hide();
$('#load').show();
// then when the #content div has loaded
$('#large').bind('load', function() {
$('#load').hide();
$('#content').fadeIn('slow');
});





/*
flagArray = new Array("images/flags/gb.png","images/flags/es.png","images/flags/at.png","images/flags/it.png","images/flags/es.png",
                        "images/flags/fr.png", "images/flags/bg.png", "images/flags/fr.png", "images/flags/us.png","images/flags/jp.png",
                        "images/flags/za.png", "images/flags/hr.png", "images/flags/ca.png","images/flags/rs.png","images/flags/es.png",
                        "images/flags/es.png","images/flags/ch.png","images/flags/ch.png","images/flags/cz.png","images/flags/es.png");

playerIdArray = new Array(104925,104918,103970,105208,104926,103852,
							104792,105777,104542,104545,105453,
							104731,105227,105683,104925,104745,
							105138,103819,104527,104607,103990);

playerArray = new Array("Andy Murray", "David Ferrer", "Ernests Gulbis","Fabio Fognini","Feliciano Lopez",
						"Gael Monfils","Grigor Dimitrov","Jo Tsonga","John Isner","Kei Nishikori",
						"Kevin Anderson","Marin Cilic","Milos Raonic","Novak Djokovic","Rafael Nadal",
						"Roberto Agut","Roger Federer","Stan Wawrinka","Tomas Berdych","Tommy Robredo");

*/

// Com 50 jogadores
playerArray = new Array("Adrian Mannarino","Alexandr Dolgopolov","Andreas Seppi","Andy Murray","Benjamin Becker",
						"Denis Istomin","David Ferrer","David Goffin","Dominic Thiem","Ernests Gulbis",
                        "Fabio Fognini","Feliciano Lopez","Fernando Verdasco","Gael Monfils","Gilles Muller",
                        "Gilles Simon","Grigor Dimitrov","Guillermo Lopez","Ivo Karlovic","Jack Sock",
                        "Jeremy Chardy","Jerzy Janowicz","Jo Tsonga","John Isner","Julien Benneteau",
                        "Kei Nishikori","Kevin Anderson","Leonardo Mayer","Lukas Rosol","Marin Cilic",
						"Martin Klizan","Mikhail Youzhny","Milos Raonic","Nick Kyrgios","Novak Djokovic",
                        "Pablo Andujar","Pablo  Busta","Pablo Cuevas","Philipp Kohlschreiber","Rafael Nadal",
                        "Richard Gasquet","Roberto Agut","Roger Federer","Sam Querrey","Santiago Giraldo",
                        "Stanislas Wawrinka","Steve Johnson","Tomas Berdych","Tommy Robredo","Yen Hsun Lu");


playerIdArray = new Array(105173, 105238, 104312, 104918, 103794,
                          104797, 103970, 105676, 106233, 105208,
                          104926, 103852, 104269, 104792, 104180,
                          104468, 105777, 104198, 103333, 106058,
                          104871, 105668, 104542, 104545, 103898,
                          105453, 104731, 104919, 104586, 105227,
                          105373, 104022, 105683, 106401, 104925,
						  104665, 105807, 104655, 104259, 104745,
                          104755, 105138, 103819, 105023, 105053,
                          104527, 105449, 104607, 103990, 104229);

imageArray = new Array("images/players/mannarino.png","images/players/dolgopolov.png","images/players/seppi.png","images/players/murray.png","images/players/becker.png",
                        "images/players/istomin.png","images/players/ferrer.png","images/players/goffin.png","images/players/thiem.png","images/players/gulbis.png",
                        "images/players/fognini.png","images/players/fLopez.png","images/players/verdasco.png","images/players/monfils.png","images/players/muller.png",
                        "images/players/simon.png","images/players/dimitrov.png","images/players/gLopez.png","images/players/karlovic.png","images/players/sock.png",
                        "images/players/chardy.png","images/players/janowicz.png","images/players/tsonga.png","images/players/isner.png","images/players/benneteau.png",
                        "images/players/nishikori.png","images/players/anderson.png","images/players/mayer.png","images/players/rosol.png","images/players/cilic.png",
                        "images/players/klizan.png","images/players/youzhny.png","images/players/raonic.png","images/players/kyrgios.png","images/players/Djokovic.png",
                        "images/players/andujar.png","images/players/busta.png","images/players/cuevas.png","images/players/kohlschreiber.png","images/players/nadal.png",
                        "images/players/gasquet.png","images/players/agut.png","images/players/Federer.png","images/players/querrey.png","images/players/giraldo.png",
                        "images/players/wawrinka.png","images/players/johnson.png","images/players/berdych.png","images/players/robredo.png","images/players/lu.png");

flagArray = new Array("images/flags/fra.png","images/flags/ukr.png","images/flags/ita.png","images/flags/gbr.png","images/flags/ger.png",
                      "images/flags/uzb.png","images/flags/esp.png","images/flags/bel.png","images/flags/aut.png","images/flags/lat.png",
                      "images/flags/ita.png","images/flags/esp.png","images/flags/esp.png","images/flags/fra.png","images/flags/lux.png",
                      "images/flags/fra.png","images/flags/bul.png","images/flags/esp.png","images/flags/cro.png","images/flags/usa.png",
                      "images/flags/fra.png","images/flags/pol.png","images/flags/fra.png","images/flags/usa.png","images/flags/fra.png",
                      "images/flags/jpn.png","images/flags/rsa.png","images/flags/arg.png","images/flags/cze.png","images/flags/cro.png",
                      "images/flags/svk.png","images/flags/rus.png","images/flags/can.png","images/flags/aus.png","images/flags/srb.png",
                      "images/flags/esp.png","images/flags/esp.png","images/flags/uru.png","images/flags/ger.png","images/flags/esp.png",
                      "images/flags/fra.png","images/flags/esp.png","images/flags/sui.png","images/flags/usa.png","images/flags/col.png",
                      "images/flags/sui.png","images/flags/usa.png","images/flags/cze.png","images/flags/esp.png","images/flags/tpe.png");


ageArray = new Array("27","27","31","28","34",
                     "29","33","25","22","27",
                     "28","34","32","29","32",
                     "30","24","32","36","23",
                     "31","25","30","30","33",
                     "25","29","28","30","27",
                     "26","33","24","20","28",
                     "29","24","29","32","29",
                     "29","27","34","28","28",
                     "30","32","30","33","32");

birthdateArray = new Array("1988.06.29","1988.11.07","1984.02.21","1987.05.15","1981.06.16",
                           "1986.09.07","1982.04.02","1990.12.07","1993.09.03","1988.08.30)",
                           "1987.05.24","1981.09.20","1983.11.15","1986.09.01","1983.05.09",
                           "1984.12.27","1991.05.16","1983.06.04","1979.02.28","1992.09.24",
                           "1987.02.12","1990.11.13","1985.04.17","1985.04.26","1981.12.20",
                           "1989.12.29","1986.05.18","1987.05.15","1985.07.24","1988.09.28",
                           "1989.07.11","1982.06.25","1990.12.27","1995.04.27","1987.05.22",
                           "1986.01.23","1991.07.12","1986.01.01","1983.10.16","1986.06.03",
                           "1986.06.18","1988.04.14","1981.08.08","1987.10.07","1987.11.27",
                           "1985.03.28","1989.12.24","1985.09.17","1982.05.01","1983.08.14");

birthplaceArray = new Array("Montmorency, France","Kiev, Ukraine","Bolzano, Italy","Glasgow, Scotland","Merzig, Germany",
                            "Orenburg, Russia","Javea, Spain","Rocourt, Belgium","Wiener Neustadt, Austria","Riga, Latvia",
                            "Sanremo, Italy","Toledo, Spain","Madrid, Spain","Paris, France","Luxembourg",
                            "Nice, France","Haskovo, Bulgaria","Albacete, Spain","Zagreb, Croatia","Lincoln, USA",
                            "Pau, France","Lodz, Poland","Le Mans, France","Greensboro, USA","Bourg, France",
                            "Shimane, Japan","Johannesburg, Africa","Corrientes, Argentina","Czech Republic","Medjugorje, Bih",
                            "Slovak Republic","Moscow, Russia","Montenegro","Canberra, Australia","Belgrade, Serbia",
                            "Cuenca, Spain","Gijon, Spain","Concordia, Argentina","Augsburg, Germany","Mallorca, Spain",
                            "Beziers, France","Castellon, Spain","Basel, Switzerland","San Francisco, USA","Pereira, Colombia",
                            "Lausanne, Switzerland","Orange, California","Valasske, Czech","Hostalric, Spain","Chinese Taipei");

heightArray = new Array("180","180","191","191","178",
                        "188","175","180","185","191",
                        "178","188","188","193","193",
                        "183","191","188","211","191",
                        "188","203","188","208","185",
                        "180","203","191","196","198",
                        "191","183","196","193","188",
                        "180","188","180","178","185",
                        "185","183","185","198","188",
                        "183","188","196","180","180");

handArray = new Array("Left","Right","Right","Right","Right",
                      "Right","Right","Right","Right","Right",
                      "Right","Left","Left","Right","Left",
                      "Right","Right","Right","Right","Right",
                      "Right","Right","Right","Right","Right",
                      "Right","Right","Right","Right","Right",
                      "Left","Right","Right","Right","Right",
                      "Right","Right","Right","Right","Left",
                      "Right","Right","Right","Right","Right",
                      "Right","Right","Right","Right","Right");

rankArray = new Array("35","46","25","3","48",
                      "50","7","15","20","47",
                      "32","19","42","15","46",
                      "11","17","31","21","28",
                      "27","42","18","13","28",
                      "4","14","34","37","9",
                      "36","33","10","31","1",
                      "48","34","40","29","8",
                      "12","23","2","34","30",
                      "5","22","6","26","25");

pointsArray = new Array("1140","750","1430","8840","965",
                        "716","3695","2130","1645","585",
                        "1165","1665","1020","1975","945",
                        "2765","1735","1190","1620","1250",
                        "1300","850","1675","2235","1330",
                        "6025","2160","1125","582","3550",
                        "1125","546","2880","1020","14865",
                        "930","855","1065","1230","3680",
                        "2240","1510","9065","1165","790",
                        "5710","895","5230","1405","754");


// Player List
function changePlayer1() {
    var playerList1 = document.getElementById("playerList1");
    var index1 = playerList1.selectedIndex;
    var strUser1 = playerList1.options[index1].value;

    writeRadarChartTournaments1(index1);
    writeRadarChartSurface1(index1);

    document.getElementById("list1").innerHTML = strUser1;

    document.getElementById("player_photo1").src = imageArray[index1];
    document.getElementById("player_photo1").alt = playerArray[index1];

    document.getElementById("flag_photo1").src = flagArray[index1];

    document.getElementById("player_age").innerHTML = ageArray[index1];
    document.getElementById("player_birthdate").innerHTML = birthdateArray[index1];
    document.getElementById("player_birthplace").innerHTML = birthplaceArray[index1];
    document.getElementById("player_height").innerHTML = heightArray[index1];
    document.getElementById("player_hand").innerHTML = handArray[index1];

    document.getElementById("player_rank").innerHTML = rankArray[index1];
    document.getElementById("player_points").innerHTML = pointsArray[index1];




    //document.getElementById("list").value = playerList.options[playerList.selectedIndex].text;
}

function changePlayer2() {
    var playerList2 = document.getElementById("playerList2");
    var index2 = playerList2.selectedIndex;
    var strUser2 = playerList2.options[index2].value;

    document.getElementById("list2").innerHTML = strUser2;

    document.getElementById("player_photo2").src = imageArray[index2];
    document.getElementById("player_photo2").alt = playerArray[index2];

    document.getElementById("flag_photo2").src = flagArray[index2];

    writeRadarChartTournaments2(index2);
    writeRadarChartSurface2(index2);



    //document.getElementById("list").value = playerList.options[playerList.selectedIndex].text;
}

function changePlayer3() {
    var playerList3 = document.getElementById("playerList3");
    var index3 = playerList3.selectedIndex;
    var strUser3 = playerList3.options[index3].value;

    document.getElementById("list3").innerHTML = strUser3;


    document.getElementById("player_photo3").src = imageArray[index3];
    document.getElementById("player_photo3").alt = playerArray[index3];

    document.getElementById("flag_photo3").src = flagArray[index3];

    writeRadarChartTournaments3(index3);
    writeRadarChartSurface3(index3);


    //document.getElementById("list").value = playerList.options[playerList.selectedIndex].text;
}

function changePlayer4() {
    var playerList1 = document.getElementById("playerList1");
    var index1 = playerList1.selectedIndex;
    var strUser1 = playerList1.options[index1].value;

    document.getElementById("list1").innerHTML = strUser1;
    //document.getElementById("playerList1").selectedIndex = 0;

    document.getElementById("player_photo1").src = imageArray[index1];
    document.getElementById("player_photo1").alt = playerArray[index1];

    document.getElementById("flag_photo1").src = flagArray[index1];

    document.getElementById("player_age").innerHTML = ageArray[index1];
    document.getElementById("player_birthdate").innerHTML = birthdateArray[index1];
    document.getElementById("player_birthplace").innerHTML = birthplaceArray[index1];
    document.getElementById("player_height").innerHTML = heightArray[index1];
    document.getElementById("player_hand").innerHTML = handArray[index1];

    document.getElementById("player_rank").innerHTML = rankArray[index1];
    document.getElementById("player_points").innerHTML = pointsArray[index1];

    //lineChart();
    //multiChart();

}

function myYear() {
    //var dateList = document.getElementById("yearList");
    //var index = dateList.selectedIndex;

   lineChart();
   multiChart();
    //optionYear(index);
//    rank_teste(index);

}

/* Sidebar Menu active class */
$(function () {
    var url = window.location;
    $('#sidebar-menu a[href="' + url + '"]').parent('li').addClass('current-page');
    $('#sidebar-menu a').filter(function () {
        return this.href == url;
    }).parent('li').addClass('current-page').parent('ul').slideDown().parent().addClass('active');
});

/** ******  /left menu  *********************** **/



    /** ******  progressbar  *********************** **/
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar(); // bootstrap 3
}
/** ******  /progressbar  *********************** **/
/** ******  switchery  *********************** **/
if ($(".js-switch")[0]) {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function (html) {
        var switchery = new Switchery(html, {
            color: '#26B99A'
        });
    });
}
/** ******  /switcher  *********************** **/
/** ******  collapse panel  *********************** **/
// Close ibox function
$('.close-link').click(function () {
    var content = $(this).closest('div.x_panel');
    content.remove();
});



//    vertical-align: -6px;




// Collapse ibox function
$('.collapse-link').click(function () {
    var x_panel = $(this).closest('div.x_panel');
    var button = $(this).find('i');
    var content = x_panel.find('div.x_content');
    content.slideToggle(200);
    (x_panel.hasClass('fixed_height_390') ? x_panel.toggleClass('').toggleClass('fixed_height_390') : '');
    (x_panel.hasClass('fixed_height_320') ? x_panel.toggleClass('').toggleClass('fixed_height_320') : '');
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    setTimeout(function () {
        x_panel.resize();
    }, 50);
});
/** ******  /collapse panel  *********************** **/
/** ******  iswitch  *********************** **/
if ($("input.flat")[0]) {
    $(document).ready(function () {
        $('input.flat').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        });
    });
}
/** ******  /iswitch  *********************** **/
/** ******  star rating  *********************** **/
// Starrr plugin (https://github.com/dobtco/starrr)
var __slice = [].slice;

(function ($, window) {
    var Starrr;

    Starrr = (function () {
        Starrr.prototype.defaults = {
            rating: void 0,
            numStars: 5,
            change: function (e, value) {}
        };

        function Starrr($el, options) {
            var i, _, _ref,
                _this = this;

            this.options = $.extend({}, this.defaults, options);
            this.$el = $el;
            _ref = this.defaults;
            for (i in _ref) {
                _ = _ref[i];
                if (this.$el.data(i) != null) {
                    this.options[i] = this.$el.data(i);
                }
            }
            this.createStars();
            this.syncRating();
            this.$el.on('mouseover.starrr', 'span', function (e) {
                return _this.syncRating(_this.$el.find('span').index(e.currentTarget) + 1);
            });
            this.$el.on('mouseout.starrr', function () {
                return _this.syncRating();
            });
            this.$el.on('click.starrr', 'span', function (e) {
                return _this.setRating(_this.$el.find('span').index(e.currentTarget) + 1);
            });
            this.$el.on('starrr:change', this.options.change);
        }

        Starrr.prototype.createStars = function () {
            var _i, _ref, _results;

            _results = [];
            for (_i = 1, _ref = this.options.numStars; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--) {
                _results.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"));
            }
            return _results;
        };

        Starrr.prototype.setRating = function (rating) {
            if (this.options.rating === rating) {
                rating = void 0;
            }
            this.options.rating = rating;
            this.syncRating();
            return this.$el.trigger('starrr:change', rating);
        };

        Starrr.prototype.syncRating = function (rating) {
            var i, _i, _j, _ref;

            rating || (rating = this.options.rating);
            if (rating) {
                for (i = _i = 0, _ref = rating - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                    this.$el.find('span').eq(i).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
                }
            }
            if (rating && rating < 5) {
                for (i = _j = rating; rating <= 4 ? _j <= 4 : _j >= 4; i = rating <= 4 ? ++_j : --_j) {
                    this.$el.find('span').eq(i).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
                }
            }
            if (!rating) {
                return this.$el.find('span').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
            }
        };

        return Starrr;

    })();
    return $.fn.extend({
        starrr: function () {
            var args, option;

            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            return this.each(function () {
                var data;

                data = $(this).data('star-rating');
                if (!data) {
                    $(this).data('star-rating', (data = new Starrr($(this), option)));
                }
                if (typeof option === 'string') {
                    return data[option].apply(data, args);
                }
            });
        }
    });
})(window.jQuery, window);

$(function () {
    return $(".starrr").starrr();
});

$(document).ready(function () {

    $('#stars').on('starrr:change', function (e, value) {
        $('#count').html(value);
    });


    $('#stars-existing').on('starrr:change', function (e, value) {
        $('#count-existing').html(value);
    });

});
/** ******  /star rating  *********************** **/
/** ******  table  *********************** **/
$('table input').on('ifChecked', function () {
    check_state = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    check_state = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var check_state = '';
$('.bulk_action input').on('ifChecked', function () {
    check_state = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    check_state = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    check_state = 'check_all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    check_state = 'uncheck_all';
    countChecked();
});

function countChecked() {
        if (check_state == 'check_all') {
            $(".bulk_action input[name='table_records']").iCheck('check');
        }
        if (check_state == 'uncheck_all') {
            $(".bulk_action input[name='table_records']").iCheck('uncheck');
        }
        var n = $(".bulk_action input[name='table_records']:checked").length;
        if (n > 0) {
            $('.column-title').hide();
            $('.bulk-actions').show();
            $('.action-cnt').html(n + ' Records Selected');
        } else {
            $('.column-title').show();
            $('.bulk-actions').hide();
        }
    }
    /** ******  /table  *********************** **/
    /** ******    *********************** **/
    /** ******    *********************** **/
    /** ******    *********************** **/
    /** ******    *********************** **/
    /** ******    *********************** **/
    /** ******    *********************** **/
    /** ******  Accordion  *********************** **/

$(function () {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});
