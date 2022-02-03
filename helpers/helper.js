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

function inBounds(x, y) {
    return (x > 0 && x < width && y > 0 && y < height)
}

// current num, end num
function colors(currentNum, endNum) {
    let colors = ['cyan', 'violet', 'white', 'lightgreen', 'orange', 'yellow',]
    if (endNum > colors.length) throw "Color function: end number is too long!"
    return colors[currentNum % endNum]
}

function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
