class Egg {
    xPos
    yPos
    size
    rotation
    bubbles = []
    constructor(xPos, yPos, width, height, rotation) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.rotation = rotation;

    }

    setup() {
        for (let i = 0; i < 300; i += 1) {
            let xPos = this.xPos + (Math.random() * this.width)
            let yPos = this.yPos + (Math.random() * this.height)
            let size = Math.random() * bubbleSize;
            let bubble = new Bubble(xPos, yPos, size, colors(i, 3))
            this.bubbles.push(bubble);
        }
    }

    draw() {
        for (let bubble of this.bubbles) {
            bubble.draw();
            if (bubble.yPos < this.yPos - 25) {
                bubble.yPos = this.yPos + this.height + 25
            }
        }
        push();
        noFill();
        noStroke();
        rect(this.xPos, this.yPos, this.size, this.size);
        pop();

    }
}