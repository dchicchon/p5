let colorArr = [
    rgb(76, 92, 184), rgb(158, 109, 215), rgb(128, 189, 216), rgb(90, 3, 119), rgb(110, 66, 147), rgb(5, 119, 193), rgb(72, 28, 127), rgb(226, 102, 212),
]
function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}
class BoxBreaker {
    boxArr = []

    constructor() {
        let index = 0;
        for (let i = -1; i <= 1; i += 2) {
            for (let j = -1; j <= 1; j += 2) {
                for (let k = -1; k <= 1; k += 2) {
                    console.log(i, j, k)
                    let newBox = new Box(i, j, k, colorArr[index])
                    index += 1
                    this.boxArr.push(newBox)
                }
            }
        }
    }

    move() {
        for (const thisBox of this.boxArr) {
            thisBox.move();
        }
    }
}