class Particle {
    pos;
    velocity;

    constructor(pos, velocity) {
        this.pos = pos;
        this.velocity = velocity;
    }

    update() {
        this.pos.add(this.velocity)
    }

    draw() {
        stroke('yellow');
        strokeWeight(2);
        point(this.pos.x, this.pos.y)
    }

}