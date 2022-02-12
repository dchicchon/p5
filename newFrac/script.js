const { innerWidth: width, innerHeight: height } = window

// make grid
let grid = [];
const gridMargin = 10;
const gridPadding = 5;
const gridConstant = 10;
const weight = 2;
const timeConstant = 25;
const iterations = 500;

let xLength;
let yLength;

function setup() {
    createCanvas(width, height)
    background(0);
    xLength = floor(height / gridConstant)
    yLength = floor(width / gridConstant)
    for (let i = 0; i < yLength; i++) {
        let xPos = (i * gridPadding) + gridMargin
        grid[i] = []
        for (let j = 0; j < xLength; j++) {
            let yPos = (j * gridPadding) + gridMargin
            grid[i][j] = new Particle(xPos, yPos)
        }
    }
}

function makeGrid() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let particle = grid[i][j]
            particle.draw();
        }
    }
}

async function drawAlgo() {
    try {
        let y = floor(yLength / 1.5)
        let x = floor(xLength / 1.5)
        let startingParticle = grid[y][x]

        while (true) {
            await sleep(timeConstant)
            let xDir = random() > 0.5 ? 1 : -1
            let yDir = random() > 0.5 ? 1 : -1
            y = y + yDir
            x = x + xDir
            let nextParticle = grid[y][x]
            if (!inBounds(nextParticle.x, nextParticle.y)) {
                // if not in bounds pick another particle?
                break;
            }
            stroke(colors(floor(random(6)), 6))
            strokeWeight(weight)
            line(startingParticle.x, startingParticle.y, nextParticle.x, nextParticle.y)
            startingParticle = nextParticle
        }
    }
    finally {
        drawAlgo()
    }
}

function draw() {
    noLoop()
    // makeGrid()
    drawAlgo()
}