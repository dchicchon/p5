const { innerWidth: width, innerHeight: height } = window;

function inBounds(x, y) {
    return (x > 0 && x < width && y > 0 && y < height)
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

let particles = [];

// item must be a multiple of 5
// make several particles;
function setup() {
    createCanvas(width, height)
    background(0);
    let numParticles = floor(height / 20)
    for (let i = 0; i < numParticles; i++) {
        // let pos = createVector(1, i * 25 + 1)
        let pos = createVector(1, i * 15 + 25)
        let random5 = () => (floor((random(26) / 5)) * 5) + 5
        // must have a vector that is greater than 1
        let velocity = createVector(random5(), random5())
        particles[i] = new Particle(pos, velocity)
    }
}

function draw() {
    for (let particle of particles) {
        if (particle.bounces >= particle.limit) {
            particles.splice(particles.indexOf(particle), 1)
        } else {
            particle.update();
            particle.draw();
        }
    }
    // I want a particle to go across the page 
    // and only go at certain angles

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