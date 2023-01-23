class Line {
    position: p5.Vector
    vect: p5.Vector
    stepOffset = random() * .1
    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.position = createVector(x1, y1)
        this.vect = createVector(x2 - x1, y2 - y1)
    }
    update(step: number) {
        // step += this.stepOffset
        let dir = this.vect.copy().normalize().mult(-step)
        
        this.position.add(dir)
    }
    display() {
        line(this.position.x, this.position.y, this.position.x + this.vect.x, this.position.y + this.vect.y)
    }
}