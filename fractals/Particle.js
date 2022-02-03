class Particle {

    x
    y
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    draw() {
        strokeWeight(0.5);
        stroke('yellow');
        point(this.x, this.y)
    }
}