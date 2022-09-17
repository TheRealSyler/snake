const awd3 = document.createElement("canvas")
document.body.append(awd3)

awd3.width = window.innerWidth
awd3.height = window.innerHeight

const ctx = awd3.getContext("2d")!

let posX = 0
let posY = 0

let isMoving = false

window.addEventListener("keydown", (awd4) => {
  if (awd4.key.toLowerCase() === "d") {
    isMoving = true
  }
})

window.addEventListener("keyup", (awd4) => {
  if (awd4.key.toLowerCase() === "d") {
    isMoving = false
  }
})

function loooop() {

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = 'black';
  ctx.fill()


  ctx.beginPath();
  ctx.rect(posX, posY, 20, 20);

  ctx.fillStyle = 'red'
  ctx.fill()

  if (isMoving) {
    posX = posX + 1.1
  }


  requestAnimationFrame(loooop)
}

requestAnimationFrame(loooop)