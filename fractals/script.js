let { innerWidth: width, innerHeight: height } = window;

let grid = []
const gridConstant = 10
const gridPadding = 5
const trailLength = 500
const timingPreference = 10
let numAcross;
let numDown

// have each particle move?
function setup() {
    // background(0)
    width += 200
    height += 200
    createCanvas(width, height)
    numAcross = floor(width / gridConstant); // num of dots across
    numDown = floor(height / gridConstant) // num of dots down
    for (let i = 0; i < numAcross; i++) {
        grid[i] = []
        for (let j = 0; j < numDown; j++) {
            let x = (i * gridConstant) + gridPadding
            let y = (j * gridConstant) + gridPadding
            let particle = new Particle(x, y)
            grid[i][j] = particle
        }
    }
}


function movement(x, y) {
    // find movement!
    let moveX = random(1) > 0.5 ? 1 : -1
    let moveY = random(1) > 0.5 ? 1 : -1
    let xPos = x + moveX
    let yPos = y + moveY
    return [xPos, yPos]
}

function makeGrid() {
    push()
    for (let i = 0; i < numAcross - 1; i++) {
        for (let j = 0; j < numDown; j++) {
            let particle = grid[i][j]
            particle.draw()
        }
    }
    pop()
}

async function createFractals(num) {
    let color = colors(floor(random() * 6), 6)
    try {
        if (num % 2 === 0) background(0)
        let x = floor(grid.length / 2.05)
        let y = floor(grid[0].length / 2.0)
        let currentParticle = grid[x][y]

        for (let i = 0; i < trailLength; i++) {
            // pick 3 random points
            let points = []

            for (let j = 0; j < 3; j++) {
                let xValid = false;
                let yValid = false;

                // make this place valid
                while (!xValid && !yValid) {
                    let coords = movement(x, y)
                    x = coords[0]
                    y = coords[1]
                    // console.log('length of gridx:', grid.length)
                    // console.log('length of gridy:', grid[0].length)
                    // console.log('xPos:', x)
                    // console.log('yPos:', y)
                    if (x >= 0 && x < numAcross) {
                        xValid = true
                    } else {
                        console.log("invalid x, run again")
                    }

                    if (y >= 0 && y < grid[0].length) {
                        yValid = true
                    } else {
                        console.log("invalid y, run again")
                    }
                }


                let particle = grid[x][y]
                // check if this point is in the points array
                points[j] = currentParticle
                currentParticle = particle;
            }

            // now make lines between all the points here
            for (let k = 0; k < 3; k++) {
                let start = points[k]
                let endIndex = k + 1
                if (endIndex > 2) endIndex = 0
                let end = points[endIndex]
                await sleep(timingPreference)
                stroke(color)
                line(start.x, start.y, end.x, end.y)
            }
            points = []

        }
    }
    finally {
        num++
        createFractals(num)
    }

}

function draw() {
    noLoop();
    background(0)
    // makeGrid()
    let num = 0;
    // fade in and fade out with new designs!
    createFractals(num)

    // start function that begins drawing triangles from the center
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}