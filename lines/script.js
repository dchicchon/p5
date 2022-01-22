const { innerWidth: width, innerHeight: height } = window;

// make a box somewhere here

let shape;
let angle;
let makeTriangles;

// make functions in here;
// should have a random direction that it is going in
function inBounds(x, y) {
    return (x > 0 && x < width && y > 0 && y < height)
}

function setup() {
    createCanvas(width, height)
    shape = new Shape(width / 4, height / 4)
    angle = radians(60)
    background(0);
    makeTriangles = async function (xPos, yPos) {
        if (!inBounds(xPos, yPos)) return;
        console.log("make triangle")
        stroke('yellow')
        let magnitude = 50;
        let angle = 60;
        let start = createVector(xPos, yPos);  // starting point
        let end;
        let prev;
        for (let i = 0; i < 3; i++) {
            // vectorList.push(start);
            end = p5.Vector.fromAngle(radians(angle), magnitude);
            end.add(start);
            line(start.x, start.y, end.x, end.y)
            angle += 120;
            prev = start;
            start = end;
        }
        // make a new triangle from here; 
        // for (let vector of vectorList) {
            // makeTriangles(vector.x, vector.y)
        // }
    }
    // angleMode(DEGREES)
}

function draw() {
    noLoop();
    makeTriangles(width / 2, height / 2)
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