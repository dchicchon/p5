const { innerWidth: width, innerHeight: height } = window

function setup() {
    createCanvas(width, height)
}

const startingX = width / 10 // starting x position
const startingY = height / 10 // starting y position
const xNum = 100 // number of lines x
const yNum = 50 // number of lines y 
const spacingFactor = 15 // spaces out the lines
const timingFunction = 5 // changes the timing of making the lines
const lineThickness = 7 // thickness of lines
const lineLength = 25 // line length
const lineIncrement = 2; // determines how much a line grows
const SLEEP = false; // on/off to see line growth or no growth
const RANDOM_LENGTH = false; // use random line length
const LOOP = false // let loop or not

async function draw() {
    if (!LOOP) noLoop()
    background(0);
    for (let k = 0; k < xNum; k++) { // row
        let xCurrent = (k * spacingFactor) + (startingX); // start from center x
        for (let j = 0; j < yNum; j++) { // col
            let yCurrent = (j * spacingFactor) + (startingY); // start from center y
            let randomNum = floor(random() * 5) // get random number
            let color = colors(randomNum, 5) // get color
            let length = RANDOM_LENGTH ? floor((random() * lineLength) + 10) : lineLength // length
            if (j % 2 !== 0) { 
                // make this squiggly by using a sin function?
                for (let i = 0; i < length; i += lineIncrement) {
                    let xNext = xCurrent + (i);
                    let yNext = yCurrent - (i);
                    stroke(color)
                    strokeWeight(lineThickness)
                    if (SLEEP) await sleep(timingFunction)
                    line(xCurrent, yCurrent, xNext, yNext)
                }
            }
        }
    }
}