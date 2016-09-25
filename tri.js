var canvasWidth = $(window).width();
var canvasHeight = $(window).height();

//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
    .attr("width", canvasWidth)
    .attr("height", canvasHeight);

var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e'];

setInterval(function () {
    var randomX = Math.floor(Math.random() * canvasWidth);
    var randomY = Math.floor(Math.random() * canvasHeight);

    for (var i = 20; i > 0; i--) {
        svgContainer.append("circle")
            .attr("fill", colors[Math.floor(Math.random() * colors.length)])
            .attr("cx", randomX)
            .attr("cy", randomY)
            .attr("r", 0)
	    .transition().attr("r", 5*i);
    }
}, 100);
