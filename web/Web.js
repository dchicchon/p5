let colors = ['rgba(0,255,255,0.5)', 'rgba(255,105,180,0.5)', 'rgba(255,255,255,0.5)']

class Web {
    xPos = 0;
    yPos = 0;
    size = 0;
    lines = [];
    constructor(xPos, yPos, size) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.size = size;
    }

    // return true if in bounds
    // checkBounds(xPos, yPos) {
    //     return xPos > this.xPos && xPos < this.xPos + this.size && yPos > this.yPos && yPos < this.yPos + this.size
    // }

    checkXBounds(xPos) {
        return xPos >= this.xPos && xPos <= this.xPos + this.size
    }

    checkYBounds(yPos) {
        return yPos >= this.yPos && yPos <= this.yPos + this.size;
    }

    setup() {
        for (let i = 0; i < 75; i += 1) {
            let colorIndex = i % 3;
            let walkingLine = this.makeWalkingLine(colorIndex)
            this.lines.push(walkingLine)
        }
    }

    makeWalkingLine(index) {
        let side = Math.random() < 0.5 ? 0 : 1
        let color = colors[index];
        // y is constant    
        if (side === 0) {
            let xStart = this.xPos + (Math.random() * this.size)
            let xEnd = this.xPos + (Math.random() * this.size)
            let walkingLine = new WalkingLine(color, xStart, this.yPos, xEnd, this.yPos + this.size, 0, 2)
            return walkingLine;
        }
        // x is constant
        else {
            let yStart = this.yPos + (Math.random() * this.size)
            let yEnd = this.yPos + (Math.random() * this.size);
            let walkingLine = new WalkingLine(color, this.xPos, yStart, this.xPos + this.size, yEnd, 1, 3)
            return walkingLine
        }
    }

    makeLine() {
        let side = Math.random() < 0.5 ? 0 : 1
        // y is constant    
        if (side === 0) {
            let xStart = this.xPos + (Math.random() * this.size)
            let xEnd = this.xPos + (Math.random() * this.size)
            line(xStart, this.yPos, xEnd, this.yPos + this.size)
        }
        // x is constant
        else {
            let yStart = this.yPos + (Math.random() * this.size)
            let yEnd = this.yPos + (Math.random() * this.size);
            line(this.xPos, yStart, this.xPos + this.size, yEnd)
        }
        // along a random point of the bounding box, start a line, and
        // end the line at some point along any other side
        // line(this.xPos, this.yPos, this.xPos + this.size, this.yPos + this.size)
    }

    // basic making of a web
    // draw() {
    //     stroke(255)
    //     noFill();
    //     rect(this.xPos, this.yPos, this.size, this.size) // within these bounds
    //     for (let i = 0; i < 100; i += 1) {
    //         this.makeLine();
    //     }
    // }

    // making walking lines
    draw() {
        stroke(255)
        noFill();
        rect(this.xPos, this.yPos, this.size, this.size) // within these bounds
        for (let i = 0; i < this.lines.length; i += 1) {
            let walkingLine = this.lines[i];
            walkingLine.draw();

            // if out of bounds on x, do something
            if (walkingLine.startSide === 0 || walkingLine.startSide === 2) {
                // check xbounds here
                if (!this.checkXBounds(walkingLine.xPos)) {
                    // add a couple
                    if (walkingLine.xPos <= this.xPos) {
                        walkingLine.xPos += 2;
                    } else if (walkingLine.xPos >= this.xPos + this.size) {
                        walkingLine.xPos -= 2;
                    }

                    walkingLine.startSide = (walkingLine.startSide + 1) % 4;
                }
            }

            if (walkingLine.startSide === 1 || walkingLine.startSide === 3) {
                if (!this.checkYBounds(walkingLine.yPos)) {
                    if (walkingLine.yPos <= this.yPos) {
                        walkingLine.yPos += 2;
                    } else if (walkingLine.yPos >= this.yPos + this.size) {
                        walkingLine.yPos -= 2;
                    }
                    walkingLine.startSide = (walkingLine.startSide + 1) % 4;
                }
            }

            if (walkingLine.endSide === 0 || walkingLine.endSide === 2) {
                if (!this.checkXBounds(walkingLine.xEnd)) {

                    if (walkingLine.xEnd <= this.xPos) {
                        walkingLine.xEnd += 2;
                    } else if (walkingLine.xEnd >= this.xPos + this.size) {
                        walkingLine.xEnd -= 2;
                    }
                    walkingLine.endSide = (walkingLine.endSide + 1) % 4

                }
            }

            if (walkingLine.endSide === 1 || walkingLine.endSide === 3) {
                if (!this.checkYBounds(walkingLine.yEnd)) {
                    if (walkingLine.yEnd <= this.yPos) {
                        walkingLine.yEnd += 2;
                    } else if (walkingLine.yEnd >= this.yPos + this.size) {
                        walkingLine.yEnd -= 2;
                    }
                    walkingLine.endSide = (walkingLine.endSide + 1) % 4

                }
            }

            // this.makeLine();
        }
    }
}