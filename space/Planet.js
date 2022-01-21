class Planet {
    x;
    y;
    size;
    orbit; // distance from the sun
    theta;
    constructor({ size, orbit }) {
        this.size = size;
        this.orbit = orbit;
        this.x = this.orbit / 2; // this is a circle so we are always at the radius
        this.y = 0;
        this.theta = 0;
    }

    // the planet should be moving along the orbit

    makeOrbit() {
        push()
        noFill();
        stroke(255);
        strokeWeight(0.5)
        circle(0, 0, this.orbit)
        pop()
    }

    makePlanet() {
        push();
        // dunno how this works
        this.x = sin(this.theta) * this.orbit / 2;
        this.y = cos(this.theta) * this.orbit / 2;
        let increase = map(this.size, 0, 75, 0.01, 0.001)
        this.theta += increase
        circle(this.x, this.y, this.size);
        // this.x and this.y should be going along the axis
        pop();
    }

    draw() {
        this.makeOrbit();
        this.makePlanet();
    }
}