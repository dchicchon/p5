const { innerWidth, innerHeight } = window


let colors = ['violet', 'cyan', 'yellow']

function setup() {
    createCanvas(innerWidth, innerHeight)
}

let rotateNum = 0;
let angle = 0;
function draw() {
    background(0);
    strokeWeight(5)
    // we want this line to wrap itself like a snake 
    // we can make a line loop by keeping track of the previous xPos and yPos
    // columns

    let xPos = 0
    let yPos = 0
    let xNext = 0
    let yNext = 0;

    let mainMagnitude = 2.5;
    let offset = 0;

    translate(innerWidth / 10, innerHeight / 2)

    // add offset for here
    for (let i = 0; i < 450; i++) {
        let colorIndex = i % 3;
        xNext = xPos + mainMagnitude;
        yNext = map(sin(angle + offset), 1, -1, 100, -100)
        stroke(colors[colorIndex])
        line(xPos, yPos, xNext, yNext)
        xPos = xNext;
        yPos = yNext;
        offset += 10;
    }

    angle += 0.01

}