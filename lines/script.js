const { innerWidth: width, innerHeight: height } = window;

// make a box somewhere here

let shape;
let angle;
// should have a random direction that it is going in
function setup() {
    createCanvas(width, height)
    shape = new Shape(width / 4, height / 4)
    background(0);
    angle = PI / 4
    // angleMode(DEGREES)
}
// make a bunch of shapes that connect with each other

// draw a bunch of lines on the page
// if a line ends up hitting another line, it should go perpendicular?

// this is fun
// function draw() {
//     stroke('yellow')
//     let start = createVector(width / 2, height / 2);
//     let end;
//     for (let i = 0; i < 100; i++) {
//         end = p5.Vector.fromAngle(angle, 25);
//         end.add(start)
//         line(start.x, start.y, end.x, end.y)
//         start = end;
//         angle += PI / 21;
//     }
//     // shape.draw();
//     // shape = new Shape(shape.prev.x, shape.prev.y)
//     // make a new shape based on the previous one done
// }

// function draw() {
//     stroke('yellow')
//     let start = createVector(width / 2, height / 2);
//     let end;
//     for (let i = 0; i < 5; i++) {
//         end = p5.Vector.fromAngle(angle, 100);
//         end.add(start)
//         line(start.x, start.y, end.x, end.y)
//         start = end;
//         angle += PI / 3;
//     }
//     // shape.draw();
//     // shape = new Shape(shape.prev.x, shape.prev.y)
//     // make a new shape based on the previous one done
// }

function draw() {
    stroke('yellow')
    let start = createVector(width / 2, height / 2);
    let end;
    for (let i = 0; i < 19; i++) {
        end = p5.Vector.fromAngle(angle, 50);
        end.add(start)
        line(start.x, start.y, end.x, end.y)
        start = end;
        angle += PI / 5;
    }
    // shape.draw();
    // shape = new Shape(shape.prev.x, shape.prev.y)
    // make a new shape based on the previous one done
}
