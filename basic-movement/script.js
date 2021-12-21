let isRecording = false;
let firstFrame = 226;
let lastFrame = 496;
// let lastFrame = 1981;
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
    // recordGIF(); // use this to record
    // this does something interesting. Look into trig ratios and see tan value goes to infinity
    // let x = map(tan(posX), -1, 1, -100, 100) 
}