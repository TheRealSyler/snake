import { draw } from './examples'
const awd3 = document.createElement("canvas")
document.body.append(awd3)

awd3.width = window.innerWidth
awd3.height = window.innerHeight

const ctx = awd3.getContext("2d")!

const SIZE = 20
const SPEED = 40

let posX = (window.innerWidth / 2) - (SIZE / 2)
let posY = (window.innerHeight / 2) - (SIZE / 2)


let isMovingLeft = false
let isMovingRight = false
let isMovingUp = false
let isMovingDown = false

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "a") {
    isMovingLeft = true
  }
  if (event.key.toLowerCase() === "d") {
    isMovingRight = true
  }
  if (event.key.toLowerCase() === "w") {
    isMovingUp = true
  }
  if (event.key.toLowerCase() === "s") {
    isMovingDown = true
  }

})

window.addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "a") {
    isMovingLeft = false
  }
  if (event.key.toLowerCase() === "d") {
    isMovingRight = false
  }
  if (event.key.toLowerCase() === "w") {
    isMovingUp = false
  }
  if (event.key.toLowerCase() === "s") {
    isMovingDown = false
  }
})

function loop() {

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  ctx.beginPath()
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'black';
  ctx.fill()

  ctx.beginPath()
  ctx.rect(posX, posY, SIZE, SIZE);
  ctx.fillStyle = 'blue'
  ctx.fill()

  if (isMovingLeft) {
    posX = Math.max(posX - SPEED, 0)
  }
  if (isMovingRight) {
    posX = Math.min(posX + SPEED, window.innerWidth - SIZE)
  }
  if (isMovingUp) {
    posY = Math.max(posY - SPEED, 0)
  }
  if (isMovingDown) {
    posY = Math.min(posY + SPEED, window.innerHeight - SIZE)
  }


  requestAnimationFrame(loop)
}

// requestAnimationFrame(loop)

draw()