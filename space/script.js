const height = window.innerHeight;
const width = window.innerWidth;

let isRecording = false;
let firstFrame = 10;
let lastFrame = 410;
let capturer = new CCapture({
    framerate: 60,
    format: 'gif',
    workersPath: '../libraries/',
    verbose: true
})

// helpers
function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}
function recordGIF() {
    if (isRecording) {
        if (frameCount === firstFrame) {
            capturer.start();
        }
        if (frameCount < lastFrame) {
            capturer.capture(canvasToRecord);
        } else if (frameCount === lastFrame) {
            capturer.stop();
            capturer.save();
            isRecording = false;
        }
    }
}
let colors = [
    rgb(94, 221, 145), rgb(164, 253, 194), rgb(37, 246, 231), rgb(101, 161, 216),
]


let stars = []
let shooters = []

function setup() {
    isRecording = true;
    canvasToRecord = createCanvas(width, height).canvas
    for (let i = 0; i < 250; i++) {
        let x = random(width);
        let y = random(height);
        stars.push({ x, y })
    }
    background(0)
    frameRate(60)
}

// there are orbits and there are planets
// let planets = []
// let venus = new Planet({ size: 2.5, orbit: 50 })
// let mercury = new Planet({ size: 3.5, orbit: 60 })
// let earth = new Planet({ size: 10, orbit: 100 });
// let mars = new Planet({ size: 25, orbit: 250 });
// let jupiter = new Planet({ size: 75, orbit: 550 });
// let uranus = new Planet({ size: 20, orbit: 700 });
// planets.push(venus);
// planets.push(mercury);
// planets.push(earth);
// planets.push(mars);
// planets.push(jupiter);
// planets.push(uranus)
// add stars in the background
// draw planets and their orbits
let angle = 0;

// make a shooting star across the sky too

function draw() {
    // orbits
    recordGIF();
    translate(width / 2, height / 2)
    angle += 0.0025;
    rotate(angle);
    translate(-width / 2, -height / 2)
    for (let i = 0; i < stars.length; i += 1) {
        stroke(255);
        strokeWeight(random())
        point(stars[i].x, stars[i].y)
    }

}

// old draw with planets
// function draw() {
//     // background(0)
//     // orbits
//     translate(width / 2, width / 2)
//     angle += 0.001;
//     iter += 1;
//     rotate(angle);
//     translate(-width / 2, -width / 2)
//     for (let star of stars) {
//         stroke(255);
//         strokeWeight(random(1.5))
//         point(star.x, star.y)
//     }

//     for (let shoots of shooters) {
//         // make a shoooting star move across the sky
//     }

//     translate(width / 2, width / 2)
//     circle(0, 0, 20); // sun
//     for (let planet of planets) {
//         planet.draw();
//     }
// }


