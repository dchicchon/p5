class Box {
    x = 0
    y = 0
    z = 0
    xPos = 0
    yPos = 0
    zPos = 0
    xInitial = 0;
    yInitial = 0;
    zInitial = 0;
    xDist = 0;
    yDist = 0;
    zDist = 0;
    size = 0
    offset = 0
    movement = 0
    color = ''

    constructor(x, y, z, color) {
        this.size = 50
        this.offset = this.size / 2
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
        this.xInitial = x * this.offset
        this.yInitial = y * this.offset
        this.zInitial = z * this.offset
        this.xPos = this.xInitial
        this.yPos = this.yInitial
        this.zPos = this.zInitial
        this.xDist = this.x * this.size;
        this.yDist = this.y * this.size;
        this.zDist = this.z * this.size;

    }


    checkIfCenter() {
        return Math.abs(this.xPos - this.xInitial) < 0.08 && Math.abs(this.yPos - this.yInitial) < 0.08 && Math.abs(this.zPos - this.zInitial) < 0.08
    }

    checkIfOut() {
        return Math.abs(this.xPos - this.xDist) < 0.1 && Math.abs(this.yPos - this.yDist) < 0.1 && Math.abs(this.zPos - this.zDist) < 0.1
    }
    // sets new position while moving
    move(moving) {
        if (moving) {
            const speed = 0.05 * this.movement
            this.xPos = map(sin(speed), -1, 1, this.xInitial, this.xDist)
            this.yPos = map(sin(speed), -1, 1, this.yInitial, this.yDist)
            this.zPos = map(sin(speed), -1, 1, this.zInitial, this.zDist)
            this.movement += 1
        } else {
            // i want it to finish moving before stopping
            // how to check if a x is close to y
            if (this.checkIfOut()) {
            } else if (this.checkIfCenter()) {
            } else {
                const speed = 0.05 * this.movement
                this.xPos = map(sin(speed), -1, 1, this.xInitial, this.xDist)
                this.yPos = map(sin(speed), -1, 1, this.yInitial, this.yDist)
                this.zPos = map(sin(speed), -1, 1, this.zInitial, this.zDist)
                this.movement += 1
            }

        }
    }

    // draws to page
    draw() {
        push()
        translate(this.xPos, this.yPos, this.zPos)
        fill(this.color);
        box(this.size);
        pop()
    }
}