const colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e']

const max_size = 200

var targets = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()
    frameRate(15)
}

function draw() {
    if (_.isEmpty(targets)) { return }
   
    _.each(targets, drawCircles) 
    
    targets = _.filter(targets, function(coords) {
        return coords.numCircles < max_size
    })
}

function drawCircles(coords) {
    for (var i = coords.numCircles; i > 0; i--) {
        fill(randomColor())
        ellipse(coords.x, coords.y, 5*i)
    }
    
    coords.numCircles++
}

function mousePressed() {
    targets.push({
        x: mouseX,
        y: mouseY,
        numCircles: 0
    })
}

function randomColor() {
    return _.sample(colors)
}
