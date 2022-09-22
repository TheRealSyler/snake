const canvas = document.createElement("canvas")
document.body.append(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")!

const SIZE = 20

const rectangles = [
  {
    x: 100, y: 640, color: "red"
  },
  {
    x: 500, y: 80, color: "green"
  },
  {
    x: 800, y: 740, color: "yellow"
  },
  {
    x: 1500, y: 443, color: "lightblue"
  }
]

rectangles[0].x = 150
rectangles[0].color = "blue"


export function draw() {

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  ctx.beginPath()
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'black';
  ctx.fill()


  for (const rectangle of rectangles) {
    ctx.beginPath()
    ctx.rect(rectangle.x, rectangle.y, SIZE, SIZE);
    ctx.fillStyle = rectangle.color;
    ctx.fill()
  }
}


const a = '364564324'

type CustomStringType = 'awd' | 'test'

const b: CustomStringType = 'test'