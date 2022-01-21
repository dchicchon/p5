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
    return `rgb(${r},${g},${b})`
}
let colors = [
    rgb(17, 100, 150), rgb(49, 181, 116), rgb(98, 194, 251), rgb(65, 118, 202), rgb(118, 187, 195), rgb(18, 252, 100), rgb(4, 73, 212), rgb(123, 211, 154), rgb(17, 91, 204), rgb(69, 194, 216),
]

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

let triangles = []
function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    for (let j = 0; j < 200; j++) {
        let size = 2.9;
        let yPos = size + j * size
        let offset = j % 2 === 0 ? 0 : size / 2
        for (let i = 0; i < 500; i++) {
            let type = i % 2 === 0 ? 0 : 1;
            let colorIndex = floor(random() * 10);
            let xPos = i * size + offset;
            let tri = new Triangle(xPos, yPos, size, colors[colorIndex], type)
            triangles.push(tri)
        }
    }

    // isRecording = true;
    // frameRate(30);  
    // frameRate(60);
    // frameRate(120);
}

function draw() {
    // recordGIF()
    // inside this shape, i want to add lines
    noLoop();
    background(0);
    noFill();
    // stroke(255);
    translate(0, height/7)
    for (let tri of triangles) {
        let color = colors[floor(random() * 10)]
        tri.draw(color);
    }

    // circle(width / 2, height / 2, 500);
    // add even more circles in this circle


}
