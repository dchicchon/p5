const height = window.innerHeight;
const width = window.innerWidth
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

let isRecording = false;
let firstFrame = 10;
let lastFrame = 260;
let capturer = new CCapture({
    framerate: 60,
    format: 'gif',
    workersPath: '../libraries/',
    verbose: true
})

// helpers
function rgb(r, g, b) {
    return `${r},${g},${b}`
}


function setup() {
    canvasToRecord = createCanvas(width, height).canvas
    isRecording = true;
    frameRate(60);
}

let web1 = new Web(width / 3, height/4, height /2)

// let web2 = new Web(100, 100, height / 5)
// let web3 = new Web(200, 200, height / 5)
// let web4 = new Web(300, 300, height / 5)
// let web5 = new Web(400, 400, height / 5)

// let web6 = new Web(400, 0, height / 5)
// let web7 = new Web(300, 100, height / 5)
// let web8 = new Web(100, 300, height / 5)
// let web9 = new Web(0, 400, height / 5)

web1.setup();

// alt web
// web2.setup();
// web3.setup();   
// web4.setup();   
// web5.setup();   

// web6.setup();   
// web7.setup();   
// web8.setup();   
// web9.setup();   


function draw() {
    // recordGIF()
    // inside this shape, i want to add lines
    background(0);
    // noLoop()    
    web1.draw();
    // web2.draw();
    // web3.draw();
    // web4.draw();
    // web5.draw();

    // web6.draw();
    // web7.draw();
    // web8.draw();
    // web9.draw();

}
