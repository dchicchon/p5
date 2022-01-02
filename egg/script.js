const height = window.innerHeight;
const width = window.innerWidth;

let isRecording = false;
let firstFrame = 10;
let lastFrame = 410;
let capturer = new CCapture({
    framerate: 60,
    format: 'gif',
    workersPath: '../libraries/',
    verbose: true
})

// helpers
function rgb(r, g, b) {
    return `${r},${g},${b}`
}

function recordGIF() {
    if (isRecording) {
        if (frameCount === firstFrame) {
            capturer.start();
        }
        if (frameCount < lastFrame) {
            capturer.capture(canvasToRecord);
        } else if (frameCount === lastFrame) {
            capturer.stop();
            capturer.save();
            isRecording = false;
        }
    }
}

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    // isRecording = true;
    // frameRate(30);  
    frameRate(60);
    // frameRate(120);
}

let egg1 = new Egg(width / 2.5, 0, 300, height, 0);
// let egg2 = new Egg(width /2, -height/ 3.5, 100, width, 0);
egg1.setup();
// egg2.setup();
function draw() {
    recordGIF()
    // inside this shape, i want to add lines
    // draw a bunch of circles inside this box
    // noLoop()
    background(0);
    egg1.draw();
    // translate(width/ 1.2, -height/2);
    // rotate(PI/2,0)
    // egg2.draw();
    // fill(0)
    // rect(0, 0, width, 200)
    // rect(0, height - 200, width, 200)
    // rect(0, 0, 500, height)
    // rect(width - 500, 0, 500, height)



}
