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

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
