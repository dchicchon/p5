class Triangle {
    xPos;
    yPos;
    size;
    color;
    type;
    constructor(xPos, yPos, size, color, type) {
        this.xPos = xPos
        this.yPos = yPos
        this.size = size;
        this.color = color;
        this.type = type
    }

    draw(color) {
        noStroke()
        fill(color)
        if (this.type === 0) {
            triangle(this.xPos, this.yPos,
                this.xPos + this.size / 2, this.yPos - this.size,
                this.xPos + this.size, this.yPos)
        } else {
            // type 1 is different
            triangle(this.xPos, this.yPos - this.size * 2,
                this.xPos + this.size / 2, this.yPos - this.size,
                this.xPos + this.size, this.yPos - this.size * 2)
        }
    }
}