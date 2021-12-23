const { innerWidth, innerHeight } = window

function setup() {
    createCanvas(innerWidth, innerHeight)
}

let xPos = innerWidth / 2
let yPos = innerHeight / 2

// lines
// line(x1, y1, x2, y2)
function draw() {
    background(0);
    stroke('yellow')
    strokeWeight(10)
    // we want this line to wrap itself like a snake 
    // we can make a line loop by keeping track of the previous xPos and yPos

    translate(-xPos + 25, -yPos + 25)
    // columns
    for (let k = 0; k < width / 50; k++) {
        // rows
        for (let j = 0; j < height / 50; j++) {
            push()
            let xCurr = xPos;
            let yCurr = yPos;
            translate(0, j * 50)
            for (let i = 0; i < 10; i++) {
                let xNext = j % 2 === 0 ? xCurr + 15 : xCurr - 15;
                let yNext = yCurr + 25
                line(xCurr, yCurr, xNext, yNext)
                xCurr += 25;
                yCurr += 0;
            }
            pop()
        }
    }

}