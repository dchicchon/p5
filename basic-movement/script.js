let isRecording = false;
let firstFrame = 226;
let lastFrame = 496;
const width = window.innerWidth
const height = window.innerHeight

function setup() {
    angleMode(DEGREES);
    canvasToRecord = createCanvas(width, height, WEBGL).canvas;
    isRecording = true;
}

let newBox = new Box(0,0)

function draw() {

    background(0);
    newBox.start()
    newBox.move();
}