class Particle {

    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        stroke('yellow');
        point(this.x, this.y)
    }

}