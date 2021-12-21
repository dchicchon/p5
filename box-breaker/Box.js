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
    movement = 0
    color = ''

    constructor(x, y, z, color) {
        this.size = 50
        this.offset = this.size / 2
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;
        this.initialX = x * this.offset
        this.initialY = y * this.offset
        this.initialZ = z * this.offset
        this.xPos = this.initialX
        this.yPos = this.initialY
        this.zPos = this.initialZ
    }

    setup() {
    }

    move() {
        push()
        fill(this.color);
        translate(this.xPos, this.yPos, this.zPos)
        this.xPos = map(sin(this.movement), -1, 1, this.initialX, this.size * this.x)
        this.yPos = map(sin(this.movement), -1, 1, this.initialY, this.size * this.y)
        this.zPos = map(sin(this.movement), -1, 1, this.initialZ, this.size * this.z)
        box(this.size);
        pop()
        this.movement += 0.05
    }
}