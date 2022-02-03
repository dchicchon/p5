const height = window.innerHeight;
const width = window.innerWidth;


let stars = []
let shooters = []

function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    for (let i = 0; i < 500; i++) {
        let x = random(width);
        let y = random(width);
        stars.push({ x, y })
    }
    // background(0)
}

let angle = 0;

// make a shooting star across the sky too

function draw() {
    background(0)
    translate(width/1.8, -height / 10)
    angle += 0.0005;
    rotate(angle);
    translate(-width / 2, -height / 2)
    for (let i = 0; i < stars.length; i += 1) {
        stroke(255);
        strokeWeight(random() * 4)
        point(stars[i].x, stars[i].y)
    }

}


