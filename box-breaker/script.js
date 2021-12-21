const { innerWidth, innerHeight } = window



let y = 0;
let arr = [];
let index = 0;

// make 8 boxes that make 1 box total

const boxBreaker = new BoxBreaker();

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL)
}

function draw() {
    rotateX(-PI / 5)
    rotateY(PI / 4)
    background(0);
    stroke(0);
    rotateY(y)
    boxBreaker.move()
    y += 0.01
}