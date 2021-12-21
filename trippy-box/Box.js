class Box {
    x = 0
    y = 0
    z = 0
    xPos = 0
    yPos = 0
    zPos = 0
    initialX = 0;
    initialY = 0;
    initialZ = 0;
    size = 0
    offset = 0
    color
    movement = 0
    frame = 0;

    constructor(x, y, z, color) {
        this.size = 100
        this.offset = this.size / 2
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
        this.initialX = x * this.offset;
        this.initialY = y * this.offset;
        this.initialZ = z * this.offset;
    }

    setup() {
    }

    // currently all going in the same direction
    // move away from center
    move() {
        push()
        fill(this.color);
        this.xPos = map(sin(this.movement), -1, 1, this.initialX, this.size)
        this.yPos = map(sin(this.movement), -1, 1, this.initialY, this.size)
        this.zPos = map(sin(this.movement), -1, 1, this.initialZ, this.size)
        translate(this.xPos, this.yPos, this.zPos)
        box(this.size);
        pop()
        this.movement += 0.01
        this.frame += 1
    }
}