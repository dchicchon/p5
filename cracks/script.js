const height = window.innerHeight;
const width = window.innerWidth;

const triangleSize = 25;
const startingXPos = 0
const startingYPos = height / 7
const timeConstant = 10
const SLEEP = true

let triangles = []

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    background(0);
    for (let j = 0; j < 25; j++) {
        let yPos = triangleSize + j * triangleSize
        let offset = j % 2 === 0 ? 0 : triangleSize / 2
        for (let i = 0; i < 75; i++) {
            let type = i % 2 === 0 ? 0 : 1;
            let colorIndex = floor(random() * 10);
            let xPos = i * triangleSize + offset;
            let tri = new Triangle(xPos, yPos, triangleSize, colors(colorIndex, 5), type)
            triangles.push(tri)
        }
    }
}

async function draw() {
    noLoop();
    translate(startingXPos, startingYPos)

    for (let tri of triangles) {
        if (SLEEP) await sleep(timeConstant)
        let color = colors(floor(random() * 6), 6)
        tri.draw(color);
    }

}
