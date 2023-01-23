let angle = 0, precision, circleRadius, dotSize, nb;
let circlesX = [], circlesY = []
let shapes = []
let points
function setup() {
  let size = window.innerHeight-21
  createCanvas(size, size);
  init()
}
function init(){
  nb = parseInt(document.getElementById("nb").value)
  precision = parseInt(document.getElementById("precision").value)
  circlesX = [], circlesY = [], shapes = [], angle = 0
  // precision = parseInt(prompt("precision (1 est le + précis)"))
  circleRadius = width / (nb * 4 + 2)
  dotSize = circleRadius / 2
  points = Array.from(new Array(nb), e => Array.from(new Array(nb), ee => new Array()))
  for (let i = 1; i < nb + 1; i++) {
    circlesX.push(new Circle(circleRadius * 3 * (i + 1), circleRadius * 3, i))
    circlesY.push(new Circle(circleRadius * 3, circleRadius * 3 * (i + 1), i))
  }
}

function draw() {
  background(220);
  angle += .01;
  if (angle >= TWO_PI) {//Reset shapes
    points = Array.from(new Array(nb), e => Array.from(new Array(nb), ee => new Array()))
    angle = 0
  }
  //lines
  for (let i = 0; i < nb; i++) {
    stroke(200)
    line(circlesY[i].ptX, circlesY[i].ptY, circlesX[nb - 1].ptX, circlesY[i].ptY)
    line(circlesX[i].ptX, circlesX[i].ptY, circlesX[i].ptX, circlesY[nb - 1].ptY)
    stroke(0)
  }
  //cercles 
  circlesX.forEach(e => e.update())
  circlesY.forEach(e => e.update())
  for (let x = 0; x < nb; x++) {
    for (let y = 0; y < nb; y++) {
      //points
      fill(0)
      if (frameCount % precision == 0) points[x][y].push(new Pt(circlesX[x].ptX, circlesY[y].ptY))
      circle(circlesX[x].ptX, circlesY[y].ptY, dotSize)
      //shapes
      noFill()
      beginShape()
      points[x][y].forEach(pt => vertex(pt.x, pt.y))
      endShape()
    }
  }
}

class Circle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  update() {
    noFill();
    circle(this.x, this.y, circleRadius * 2);
    fill(0)
    this.ptX = this.x + circleRadius * cos(angle * this.speed);
    this.ptY = this.y + circleRadius * sin(angle * this.speed)
    circle(this.ptX, this.ptY, dotSize)
  }
}

class Pt {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
