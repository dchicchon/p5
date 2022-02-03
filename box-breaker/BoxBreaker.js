
class BoxBreaker {
    rotY = 0
    boxArr = []
    posX = 0;
    posY = 0;
    rotating = false;
    ready = false;
    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        let index = 0;
        for (let i = -1; i <= 1; i += 2) {
            for (let j = -1; j <= 1; j += 2) {
                for (let k = -1; k <= 1; k += 2) {
                    let color = colors(index, 5)
                    let newBox = new Box(i, j, k, color)
                    index += 1
                    this.boxArr.push(newBox)
                }
            }
        }
    }

    move() {
        push()
        // translate(this.posX, this.posY)
        if (frameCount % 150 === 0) {
            this.rotating = !this.rotating
        }

        if (this.rotating) {
            // only rotate on the box is ready
            translate(this.posX, this.posY)

            rotateY(this.rotY)
            for (const thisBox of this.boxArr) {
                thisBox.move(false);
                thisBox.draw()
            }
            this.rotY += 0.01

        } else {
            rotateY(this.rotY)
            translate(this.posX, this.posY)
            for (const thisBox of this.boxArr) {
                thisBox.move(true);
                thisBox.draw()
            }
        }
        pop()
    }
}