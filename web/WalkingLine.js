class WalkingLine {
    xPos;
    yPos;
    xEnd;
    yEnd;
    side;
    // will determine if this should be changing x or y vals 0,1,2,3
    startSide;
    endSide;
    speed;
    color;
    constructor(color, xPos, yPos, xEnd, yEnd, startSide, endSide) {
        this.color = color;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xEnd = xEnd;
        this.yEnd = yEnd;
        this.startSide = startSide;
        this.endSide = endSide;
        this.speed = 2
    }

    // make the line walk along the axis
    draw() {
        strokeWeight(1.5)
        stroke(this.color);
        line(this.xPos, this.yPos, this.xEnd, this.yEnd);
        //top
        if (this.startSide === 0) {
            this.xPos -= this.speed;
        }
        // left
        else if (this.startSide === 1) {
            this.yPos += this.speed;
        }
        // bottom
        else if (this.startSide === 2) {
            this.xPos += this.speed;
        }
        // right
        else if (this.startSide === 3) {
            this.yPos -= this.speed
        }

        if (this.endSide === 0) {
            this.xEnd -= this.speed
        }
        else if (this.endSide === 1) {
            this.yEnd += this.speed;
        }
        else if (this.endSide === 2) {
            this.xEnd += this.speed;
        } else if (this.endSide === 3) {
            this.yEnd -= this.speed;
        }

    }
}