const height = window.innerHeight;
const width = window.innerWidth;

let isRecording = false;
let firstFrame = 10;
let lastFrame = 400;
let capturer = new CCapture({
    framerate: 30,
    format: 'gif',
    workersPath: '../libraries/',
    verbose: true
})

// helpers
function rgb(r, g, b) {
    return `${r},${g},${b}`
}

function createCircle() {
    let colorIndex = Math.floor(Math.random() * 4)
    let size = Math.round(Math.random() * 750) + 25;
    let color = colors[colorIndex];
    let newCircle = new FlashingCircle(0, 0, size, color)
    return newCircle
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

let colors = [rgb(20, 100, 213), rgb(7, 254, 223), rgb(9, 238, 227), rgb(32, 76, 74)]
let circles = {}
let angle = 0;

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    isRecording = true;
    frameRate(30);
    for (let i = 0; i <= 25; i += 1) {
        circles[i] = createCircle();
    }

}

// create circles in object
// create a self sustaining program. Meaning the number of circles will never exceed x;
function draw() {
    // recordGIF()
    background(0);
    translate(width / 2, height / 2)

    for (let key in circles) {
        let circ = circles[key]
        circ.draw();
        if (circ.iters > 3) {
            circles[key] = createCircle()
        }

    }
    // stroke('rgba(200,200,200,1)')
    // fill(0)
    // rotate(angle)
    // rect(-400, -5, 800, 10)
    angle += 0.1
}
