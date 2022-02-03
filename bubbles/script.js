const height = window.innerHeight;
const width = window.innerWidth;

let egg;
const bubbleSize = 30;


// helpers
function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    egg = new Egg(0, 0, width, height, 0);
    egg.setup();
}


function draw() {
    background(0);
    egg.draw();
}
