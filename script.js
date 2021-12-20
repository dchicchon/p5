const width = window.innerWidth
const height = window.innerHeight

function setup() {
    angleMode(DEGREES);
    createCanvas(width, height, WEBGL);
}

const mybox = new Box(0, 0)
function draw() {
    background(0);
    mybox.start();
    mybox.move();
    // this does something interesting. Look into trig ratios and see tan value goes to infinity
    // let x = map(tan(posX), -1, 1, -100, 100) 
}