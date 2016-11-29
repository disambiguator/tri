var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
    var randomX = Math.floor(Math.random() * windowWidth);
    var randomY = Math.floor(Math.random() * windowHeight);

    for (var i = 20; i > 0; i--) {
       fill(colors[Math.floor(Math.random() * colors.length)]);
       ellipse(randomX, randomY, 5*i);
    }
}
