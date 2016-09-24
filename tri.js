var canvasWidth = $(window).width();
var canvasHeight = $(window).height();

//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
    .attr("width", canvasWidth)
    .attr("height", canvasHeight);

var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e'];

$('body').click(function (e) {
    for (var i = 20; i > 0; i--) {
        svgContainer.append("circle")
            .attr("fill", colors[Math.floor(Math.random() * colors.length)])
            .attr("cx", e.pageX)
            .attr("cy", e.pageY)
            .attr("r", 0)
	    .transition().attr("r", 5*i);
    }
});
