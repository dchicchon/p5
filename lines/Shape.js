
let colors = [rgb(8,83,249),rgb(148,254,223),rgb(41,171,229),]

function rgb(r,g,b) {
    return `rgb(${r},${g},${b})`
}
class Shape {
    // this box should 3 edges
    root;
    next;
    done;
    constructor(xPos, yPos) {
        this.root = createVector(xPos, yPos)
        this.prev = this.root
        this.done = false;
    }

    draw() {
        if (this.done) return;
        // really its making a line from this position
        // to another somewhere
        for (let edge = 0; edge < 3; edge++) {
            let xMag = random(100); // distance x
            let yMag = random(100); // distance y
            let next = edge === 2 ? this.root : p5.Vector.fromAngle(60, 100)
            console.log(next)
            // let next = edge === 2 ? this.root : createVector(this.root.x + xMag, this.root.y + yMag)
            stroke(colors[edge % colors.length])
            line(this.prev.x, this.prev.y, next.x, next.y)
            if (edge !== 2) {
                this.prev = next;
            }
            // make line to random pos;
        }
        // this.done = true;
    }

}