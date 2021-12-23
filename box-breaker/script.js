const { innerWidth, innerHeight } = window



let y = 0;
let arr = [];
let index = 0;
const length = 1
// make 8 boxes that make 1 box total

for (let i = 0; i < length; i++) {
    const boxBreaker = new BoxBreaker(i * 200, 0);
    arr.push(boxBreaker)
}

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL)
}

function draw() {
    rotateX(-PI / 5)
    rotateY(PI / 4)
    background(0);
    stroke(0);
    for (const breaker of arr) {
        breaker.move();
    }
}