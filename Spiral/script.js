const height = window.innerHeight;
const width = window.innerWidth;

let isRecording = false;
let firstFrame = 200;
let lastFrame = 475;

let colors = ['violet', 'cyan', 'yellow']

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    isRecording = true;
}

let angle = 0;
function draw() {

    background(0);
    strokeWeight(2)

    let xPos = 0
    let yPos = 0
    let xNext = 0
    let yNext = 0;
    let mainMagnitude = 4;
    let offset = 0;

    translate(0, height / 2)
    // add offset for here
    for (let i = 0; i < 500; i++) {
        let colorIndex = i % 3;
        xNext = xPos + mainMagnitude;
        yNext = map(sin(angle + offset), 1, -1, 200, -200)
        stroke(colors[colorIndex])
        line(xPos, yPos, xNext, yNext)
        xPos = xNext;
        yPos = yNext;
        offset += 10.5;
    }
    angle += 0.01  

    // recordGIF()

}