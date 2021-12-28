const { innerWidth, innerHeight } = window

function setup() {
    createCanvas(innerWidth, innerHeight)
    angleMode(DEGREES)
}


let rotateNum = 0;

function draw() {
    background(0);
    stroke('yellow')
    strokeWeight(10)
    // we want this line to wrap itself like a snake 
    // we can make a line loop by keeping track of the previous xPos and yPos
    // columns


    let xPos = 0
    let yPos = 0
    let mainMagnitude = 25;

    // go right,up,left,down
    let multiplier = 1
    let xNext = 0
    let yNext = 0;
    let xMagnitude = 0;
    let yMagnitude = 0;

    translate(innerWidth / 2, innerHeight / 2)
    // rotate(-rotateNum)
    // make initial line 
    xNext = xPos + mainMagnitude;
    yNext = yPos;
    line(xPos, yPos, xNext, yNext)
    xPos = xNext;
    yPos = yNext;

    for (let i = 0; i < 64; i += 1) {
        let vector = i % 4;
        console.log('Index', i)
        console.log('Vector', vector)

        if (vector === 3) {
            multiplier += 1
            xMagnitude = mainMagnitude * multiplier;
            yMagnitude = mainMagnitude * (multiplier - 1);
        }
        else {
            xMagnitude = 25 * multiplier;
            yMagnitude = 25 * multiplier;
        }
        console.log('Multiplier', multiplier)

        // if 3, increase multiplier for xMagnitude by 1,
        // if 0, increase multiplier for yMagnitude by 1
        switch (vector) {
            // right
            case 0:
                xNext = xPos - xMagnitude;
                yNext = yPos - yMagnitude;
                break;
            case 1:
                xNext = xPos - xMagnitude;
                yNext = yPos + yMagnitude;
                break;
            case 2:
                xNext = xPos + xMagnitude;
                yNext = yPos + yMagnitude
                break;
            case 3:
                xNext = xPos + xMagnitude;
                yNext = yPos - yMagnitude;
                break;
            default:
                break;
        }

        // don't edit this
        line(xPos, yPos, xNext, yNext)
        xPos = xNext;
        yPos = yNext
    }


}