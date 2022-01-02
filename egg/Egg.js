class Egg {
    xPos
    yPos
    size
    rotation
    colors = ['rgba(0,255,255,1)', 'rgba(255,105,180,1)', 'rgba(255,255,255,1)']
    bubbles = []
    constructor(xPos, yPos, width, height, rotation) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.rotation = rotation;

    }

    setup() {
        for (let i = 0; i < 500; i += 1) {
            let colorIndex = i % 3;
            let xPos = this.xPos + (Math.random() * this.width)
            let yPos = this.yPos + (Math.random() * this.height)
            let size = Math.random() * 30;
            let bubble = new Bubble(xPos, yPos, size, this.colors[colorIndex])
            this.bubbles.push(bubble);
        }
    }

    draw() {
        // rotate(PI / 2, 0)
        for (let bubble of this.bubbles) {
            bubble.draw();
            if (bubble.yPos < this.yPos - 25) {
                bubble.yPos = this.yPos + this.height + 25
            }
        }
        push();
        noFill();
        noStroke();
        // stroke(255);
        rect(this.xPos, this.yPos, this.size, this.size);
        pop();

    }
}