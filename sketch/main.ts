type LineData = {
    x1:number, 
    y1:number, 
    x2:number,
    y2:number
}

let lines:Line[] = []
const nbLines = 1;
let scrollValue = 0
function setup(): void {
    createCanvas(windowWidth, windowHeight)
    data.forEach(e=>lines.push(new Line(e.x1, e.y1, e.x2, e.y2)))
}


function draw() {
    background(255);
    lines[0].display()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event:WheelEvent){
    scrollValue += event.deltaY
    lines[0].update(scrollValue)
}
