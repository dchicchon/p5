// should fly up and dissapear
class Bubble {
    xPos;
    yPos;
    size;
    color;
    speed;
    constructor(xPos, yPos, size, color) {
        this.xPos = xPos;
        this.yPos = yPos
        this.size = size;
        this.color = color;
    }

    draw() {
        push();
        fill(this.color)
        // noStroke();
        circle(this.xPos, this.yPos, this.size)
        let ySpeed = map(this.size, 0, 30, 2.5, 0.75)
        let random = Math.random();
        let xSpeed = 0;
        if (random < 0.5) {
            xSpeed = 0;
        } else if (random >= 0.5 && random < 0.75) {
            xSpeed = map(this.size, 0, 30, 0.5, 0.25)
        } else {
            xSpeed = map(this.size, 0, 30, -0.5, -0.25)

        }
        // let xSpeed = Math.random() > 0.5 ? Math.random() : -1 * Math.random();
        this.xPos += xSpeed
        this.yPos -= ySpeed
        pop();
    }
}