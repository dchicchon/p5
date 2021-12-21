const { innerWidth, innerHeight } = window

function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}

let y = 0;
let arr = [];
let colorArr = [
    rgb(76, 92, 184), rgb(158, 109, 215), rgb(128, 189, 216), rgb(90, 3, 119), rgb(110, 66, 147), rgb(5, 119, 193), rgb(72, 28, 127), rgb(226, 102, 212),
]
let index = 0;

// make 8 boxes that make 1 box total
for (let i = -1; i <= 1; i += 2) {
    for (let j = -1; j <= 1; j += 2) {
        for (let k = -1; k <= 1; k += 2) {
            console.log(i, j, k)
            let newBox = new Box(i, j, k, colorArr[index])
            index += 1
            arr.push(newBox)
        }
    }
}

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL)
}

function draw() {
    rotateX(-PI / 5)
    rotateY(PI / 4)
    background(0);
    stroke(0);
    // rotateY(y)
    for (const thisBox of arr) {
        thisBox.move();
    }
    // y += 0.01
}