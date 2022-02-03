const height = window.innerHeight;
const width = window.innerWidth;

function createCircle() {
    let colorIndex = Math.floor(Math.random() * 4)
    let size = Math.round(Math.random() * 750) + 25;
    let color = colors(colorIndex, 4);
    let newCircle = new FlashingCircle(0, 0, size, color)
    return newCircle
}

let circles = {}
let angle = 0;

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    frameRate(30);
    for (let i = 0; i <= 25; i += 1) {
        circles[i] = createCircle();
    }

}

// create circles in object
// create a self sustaining program. Meaning the number of circles will never exceed x;
function draw() {
    background(0);
    translate(width / 2, height / 2)
    for (let key in circles) {
        let circ = circles[key]
        circ.draw();
        if (circ.iters > 3) {
            circles[key] = createCircle()
        }

    }
    angle += 0.1
}
