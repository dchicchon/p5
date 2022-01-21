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

    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }

    follow(vectors) {
        let x = floor(this.pos.x / scl)
        let y = floor(this.pos.y / scl)
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    show() {
        push()
        strokeWeight(0.1);
        stroke(0, 152, 145, 200);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
        // point(this.pos.x, this.pos.y)
        pop()
        this.updatePrev();
    }

}