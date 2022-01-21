const height = window.innerHeight;
const width = window.innerWidth;

// let isRecording = false;
// let firstFrame = 10;
// let lastFrame = 410;
// let capturer = new CCapture({
//     framerate: 60,
//     format: 'gif',
//     workersPath: '../libraries/',
//     verbose: true
// })

// helpers
function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}
let colors = [
    rgb(17, 100, 150), rgb(49, 181, 116), rgb(98, 194, 251), rgb(65, 118, 202), rgb(118, 187, 195), rgb(18, 252, 100), rgb(4, 73, 212), rgb(123, 211, 154), rgb(17, 91, 204), rgb(69, 194, 216),
]

let drawing;



function setup() {
    drawing = loadImage('photo2.jpg')
    drawing.loadPixels()
    createCanvas(width, height)
    background(0)
    for (let x = 0; x < drawing.width; x++) {
        for (let y = 0; y < drawing.height; y++) {
            let index = x + y * drawing.width;
            let pix = drawing.pixels[index];
            let r = red(pix);
            let g = green(pix);
            let b = blue(pix);

            r = round(r / 255) * 255;
            g = round(g / 255) * 255;
            b = round(b / 255) * 255;
            drawing.pixels[index] = color(r, g, b)
        }
    }
    drawing.updatePixels()
}



function draw() {
    drawing.resize(0, height)
    image(drawing, 100, 0)
    // inside this shape, i want to add lines
    // noLoop();

}
