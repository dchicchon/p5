const height = window.innerHeight;
const width = window.innerWidth

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
}


const startingXPos = width / 3
const startingYPos = height / 7
const webSize = width / 2.5

let web1 = new Web(startingXPos, startingYPos, webSize)
web1.setup();

function draw() {
    background(0);
    web1.draw();
}
