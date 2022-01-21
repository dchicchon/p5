const { innerWidth, innerHeight } = window

// const width = 1000;
// const height = 1000;
let left_x = parseInt(innerWidth * -0.1)
let right_x = parseInt(innerWidth * 1.1)
let top_y = parseInt(innerHeight * -0.1);
let bottom_y = parseInt(innerHeight * 1.1)
// let width = right_x - left_x;
// let height = bottom_y - top_y
let width = innerWidth;
let height = innerHeight

// let resolution = parseInt(width * 0.01);

let cols, rows;
let scl = 10;
let inc = 0.1;

let particles = []
let flowfield = []

function setup() {
    createCanvas(width, height)

    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = new Array(cols * rows);
    // create the particles here
    for (let i = 0; i < 500; i++) {
        let particle = new Particle();
        particles[i] = particle
    }
    background(0);

}

// now we can make  a line follow the flow field

let zOff = 0;
function draw() {
    // background(255);
    // 
    // make some lines and have them go across the screen

    let yOff = 0;
    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);
            let angle = noise(xOff, yOff, zOff) * TWO_PI * 2;
            xOff += inc;
            // let angle = (y / float(rows)) * PI;
            let v = p5.Vector.fromAngle(angle);
            flowfield[index] = v;
            v.setMag(0.5)
            stroke(0, 50);
            push();
            translate(x * scl, y * scl);
            rotate(angle)
            // line(0, 0, scl, 0)
            pop();
        }
        yOff += inc;
    }
    zOff += 0.01

    for (let i = 0; i < particles.length; i++) {
        // get position of particle;
        particles[i].follow(flowfield)
        particles[i].update();
        particles[i].show();
        particles[i].edges();
    }
}