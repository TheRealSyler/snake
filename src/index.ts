
const awd3 = document.createElement("canvas")
document.body.append(awd3)

awd3.width = window.innerWidth
awd3.height = window.innerHeight

const ctx = awd3.getContext("2d")!

const SIZE = 8
const SPEED = 1

const snakeHead = snakepart(0, 2)
const snakebody = [snakepart(0, 1), snakepart(0, 0)]
type Direction = "Up" | "Down" | "Left" | "Right"

let direction: Direction = "Right"
let lastupdate = 0


window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "a") {
    direction = "Left"
  }
  if (event.key.toLowerCase() === "d") {
    direction = "Right"
  }
  if (event.key.toLowerCase() === "w") {
    direction = "Up"
  }
  if (event.key.toLowerCase() === "s") {
    direction = "Down"
  }
})


function loop(delta: number) {

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  ctx.beginPath()
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'black';
  ctx.fill()




  const startX = snakeHead.x
  const startY = snakeHead.y
  const time = 200
  const updatepos = delta - lastupdate > time

  if (updatepos) {
    lastupdate = delta

    if (direction === "Left") {
      snakeHead.x -= 1
    } else if (direction === "Right") {

      snakeHead.x += 1
    }
    else if (direction === "Up") {
      snakeHead.y -= 1
    }
    else if (direction === "Down") {
      snakeHead.y += 1
    }

    snakeHead.prevX = startX
    snakeHead.prevY = startY

  }
  const t = (delta - lastupdate) / time

  ctx.beginPath()
  ctx.rect(lerp(snakeHead.prevX, snakeHead.x, t) * SIZE, lerp(snakeHead.prevY, snakeHead.y, t) * SIZE, SIZE, SIZE);
  ctx.fillStyle = 'green'
  ctx.fill()


  let prevX = startX
  let prevY = startY
  const moveX = (snakeHead.x - startX) !== 0
  const moveY = (snakeHead.y - startY) !== 0

  for (const part of snakebody) {

    if (moveX || moveY) {
      const y = part.y
      const x = part.x

      part.x = prevX
      part.y = prevY

      part.prevX = x
      part.prevY = y

      prevX = x
      prevY = y
    }
    ctx.beginPath()
    ctx.rect(lerp(part.prevX, part.x, t) * SIZE, lerp(part.prevY, part.y, t) * SIZE, SIZE, SIZE);
    ctx.fillStyle = 'red'
    ctx.fill()
  }




  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

type Snakepart = {
  x: number
  y: number
  prevX: number
  prevY: number
}


function snakepart(x: number, y: number): Snakepart {
  return {
    x,
    y,
    prevX: x,
    prevY: y
  }


}


const lerp = (a0: number, a1: number, w: number) => {
  return (a1 - a0) * w + a0;
}

