class Particle {
    pos;
    acc;
    vel;
    maxspeed;
    prevPos;
    constructor() {
        this.pos = createVector(random(width - 10), random(height - 10));
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0);
        this.maxspeed = 2;
        this.prevPos = this.pos.copy();
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed)
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = width - 1;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        }
        if (this.pos.y < 0) {
            this.pos.y = height - 1;
        }
    }

    follow(vectors) {
        let x = floor(this.pos.x / scale)
        let y = floor(this.pos.y / scale)
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    show() {
        strokeWeight(size);
        stroke('cyan'); // color
        point(this.pos.x, this.pos.y)
        // this.updatePrev();
    }

}