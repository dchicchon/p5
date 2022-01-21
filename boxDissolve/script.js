const height = window.innerHeight;
const width = window.innerWidth;

let isRecording = false;
let firstFrame = 10;
let lastFrame = 400;
let capturer = new CCapture({
    framerate: 30,
    format: 'gif',
    workersPath: '../libraries/',
    verbose: true
})

// helpers
function rgb(r, g, b) {
    return `${r},${g},${b}`
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

let colors = [rgb(20, 100, 213), rgb(7, 254, 223), rgb(9, 238, 227), rgb(32, 76, 74)]
let angle = 0;
let elm = document.createElement('button')
elm.textContent = 'stop'
document.body.appendChild(elm);
elm.onclick = () => {
    noLoop();
}
function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    isRecording = true;
    frameRate(30);

}

function subdivide(posX, posY, size) {
    let newBoxSize = size / 4;
    
}

function draw() {
    // recordGIF()
    background(0);
    translate(width / 2, height / 2)

    // destroy a box;
    rect(0, 0, 100, 100)

    // divide this box into 4 pieces, then do it recursivley for every additional piece

}
