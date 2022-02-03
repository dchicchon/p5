class FlashingCircle {

    color = null;
    phases = 0;
    iters = 0;
    size = 0;
    opacity = 0;
    strokeWeight = 0;
    xPos = 0;
    yPos = 0;

    constructor(xPos, yPos, size, color) {
        this.xPos = xPos;
        this.yPos = yPos
        this.color = color;
        this.size = size;
    }

    phaseDone() {
        return this.opacity < 0.01 && this.iters !== 0;
    }

    draw() {
        push()
        this.opacity = Math.pow(sin(this.iters), 2) // maybe go up then down
        noFill();
        this.strokeWeight = map(Math.pow(sin(this.iters), 2), 0, 1, 1, 5)
        strokeWeight(this.strokeWeight);
        stroke(this.color) // change the opacity
        circle(this.xPos, this.yPos, this.size)
        this.iters += Math.random() * 0.3;
        if (this.phaseDone()) {
            this.phases += 1
        }
        pop()
    }
}