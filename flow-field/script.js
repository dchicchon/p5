const { innerWidth: width, innerHeight: height } = window

let cols, rows;
const size = 10;
const scale = 50; // chose scale based on your window size! If its running slow, increase the scale
let inc = 0.1;

let particles = []
let flowfield = []

function setup() {
    createCanvas(width, height)
    cols = floor(width / scale);
    rows = floor(height / scale);
    flowfield = new Array(cols * rows);
    // create the particles here
    for (let i = 0; i < 500; i++) {
        let particle = new Particle();
        particles[i] = particle
    }
}

let zOff = 0;
function draw() {
    background(0);
    let yOff = 0;
    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);
            let angle = noise(xOff, yOff, zOff) * TWO_PI * 2;
            xOff += inc;
            let v = p5.Vector.fromAngle(angle);
            flowfield[index] = v;
            v.setMag(0.5)
            stroke(0, 50);
            push();
            translate(x * scale, y * scale);
            rotate(angle)
            pop();
        }
        yOff += inc;
    }
    zOff += 0.005

    for (let i = 0; i < particles.length; i++) {
        // get position of particle;
        particles[i].follow(flowfield)
        particles[i].update();
        particles[i].show();
        particles[i].edges();
    }
}