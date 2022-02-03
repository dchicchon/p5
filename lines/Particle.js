
let colors = [rgb(69, 149, 248), rgb(82, 133, 244), rgb(58, 223, 82), rgb(132, 75, 88), rgb(149, 151, 132), rgb(149, 159, 110), rgb(146, 88, 119), rgb(247, 83, 146), rgb(22, 99, 253), rgb(220, 83, 34), rgb(192, 63, 52), rgb(99, 104, 132), rgb(109, 215, 48), rgb(215, 69, 254), rgb(106, 113, 73), rgb(25, 219, 251), rgb(173, 118, 150), rgb(242, 123, 169), rgb(30, 49, 69), rgb(79, 82, 246), rgb(24, 6, 202), rgb(136, 110, 244), rgb(171, 233, 167), rgb(221, 182, 160), rgb(118, 100, 195),]
function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}

class Particle {
    pos;
    velocity;
    index;
    bounces;
    limit;


    constructor(pos, velocity) {
        this.pos = pos;
        this.velocity = velocity;
        this.index = 0;
        this.limit = floor(random(10))
        this.bounces = 0;
    }

    checkBounds(x, y) {
        // do checks here;
        if (x - 1 < 0 || x + 1 > width) {
            this.bounces += 1;
            this.velocity.set(this.velocity.x * -1, this.velocity.y)
        }
        if (y - 1 < 0 || y + 1 > height) {
            this.bounces += 1;
            this.velocity.set(this.velocity.x, this.velocity.y * -1)
        }
        // return (x > 0 && x < width && y > 0 && y < height)
    }

    update() {
        this.checkBounds(this.pos.x, this.pos.y)
        this.pos.add(this.velocity)
    }

    draw() {
        stroke(colors[this.index % 25]);
        this.index++
        strokeWeight(5);
        point(this.pos.x, this.pos.y)
    }

}