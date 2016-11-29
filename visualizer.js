var fft, mySound

function preload() {
    mySound = loadSound('https://dl.dropboxusercontent.com/u/265913/quantic.mp3')
}

function setup() {
    mySound.setVolume(0.1)
    mySound.play()

    createCanvas(710,400)
    noFill()

    fft = new p5.FFT()
    fft.setInput(mySound)
}

function draw() {
    background(200)

    var spectrum = fft.analyze()

    beginShape()
    for (var i = 0; i<spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0))
    }
    endShape()
}
