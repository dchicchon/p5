class Box {

    moveSpeed = 2;
    rotateSpeed = 3;
    distance = 100
    x = 0;
    y = 0;
    z = 0;
    xR = 0;
    yR = 0;
    zR = 0;
    rotX = 0;
    rotY = 0;
    rotZ = 0;
    posX = 0;
    posY = 0;
    posZ = 0;
    passes = 0;
    movement = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    nearCenter() {
        return (this.posX < 1 && this.posX > -1 && this.posY < 1 && this.posY > -1 && this.posZ < 1 && this.posZ > -1)
    }

    nearAxis() {
        return (this.rotX < 1 && this.rotX > -1 && this.rotY < 1 && this.rotY > -1 && this.rotZ < 1 && this.rotZ > -1)
    }

    start() {
        rotateX(-25);
        rotateY(45);
    }

    increasePasses() {
        this.passes += 1
        if (this.passes % 5 === 0) {
            if (this.movement === 5) console.log(frameCount)
            this.movement = (this.movement + 1) % 6;
        }
    }

    move() {
        this.posX = map(sin(this.x), -1, 1, -this.distance, this.distance)
        this.posY = map(sin(this.y), -1, 1, -this.distance, this.distance)
        this.posZ = map(sin(this.z), -1, 1, -this.distance, this.distance)
        this.rotX = map(sin(this.xR), -1, 1, -45, 45)
        this.rotY = map(sin(this.yR), -1, 1, -45, 45)
        this.rotZ = map(sin(this.zR), -1, 1, -45, 45)
        translate(this.posX, this.posY, this.posZ);
        rotateX(this.rotX * 1);
        rotateY(this.rotY * 1)
        rotateZ(this.rotZ * 1)
        stroke(0);
        box(100);
        if (this.nearAxis() && this.movement > 2) {
            this.increasePasses();
        }
        else if (this.nearCenter() && this.movement <= 2) {
            this.increasePasses();
        }

        switch (this.movement) {
            case 5:
                this.yR += this.rotateSpeed
                break;
            case 4:
                this.zR += this.rotateSpeed
                break;
            case 3:
                this.xR += this.rotateSpeed;
                break;
            case 2:
                this.y += this.moveSpeed;
                break;
            case 1:
                this.z += this.moveSpeed
                break;
            default:
                this.x += this.moveSpeed
                break;


        }
    }

}