const { innerWidth: width, innerHeight: height } = window

function setup() {
    createCanvas(width, height)
}

const startingX = 0 // starting x position
const startingY = 0 // starting y position
const xNum = 75 // number of lines x
const yNum = 36 // number of lines y 
const spacingFactor = 30 // spaces out the lines
const timingFunction = 1 // changes the timing of making the lines
const lineThickness = 10 // thickness of lines
const lineLengthMax = 100 // line length
const lineLengthMin = 20;
const lineIncrement = 10; // determines how much a line grows
const SLEEP = true; // on/off to see line growth or no growth
const RANDOM_LENGTH = true; // use random line length
const LOOP = false // let loop or not

async function draw() {
    if (!LOOP) noLoop()
    background(0);
    for (let k = 0; k < xNum; k++) { // row
        let xCurrent = (k * spacingFactor) + (startingX); // start from center x
        for (let j = 0; j < yNum; j++) { // col
            let yCurrent = (j * spacingFactor) + (startingY); // start from center y
            let randomNum = floor(random() * lineLengthMin) // get random number
            let color = colors(randomNum, 5) // get color
            let length = RANDOM_LENGTH ? floor((random() * lineLengthMax) + 10) : lineLengthMax // length
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