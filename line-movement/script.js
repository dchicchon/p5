const width = window.innerWidth
const height = window.innerHeight

const size = 35;
const numColors = 4;

let rotY = 320;
const rotateElm = document.getElementById('rotate')
rotateElm.textContent = rotY
const rotateInput = document.getElementById('rotateInput')
rotateInput.onchange = function (e) {
    rotateElm.textContent = e.target.value
    rotY = parseInt(e.target.value)
}

function setup() {
    createCanvas(width, height, WEBGL)
    angleMode(DEGREES);
}

let y = 0;
function draw() {
    rotateX(-25);
    rotateY(rotY);
    background(0);
    let offset = 0;
    for (let i = 0; i < 25; i++) {
        push();
        const yPos = map(sin(y + offset), -1, 1, -50, 50)
        translate((i * size) - width / 2, yPos)
        fill(colors((i % numColors), 5))
        box(size);
        pop();
        offset += 15
    }
    y += 5
}

