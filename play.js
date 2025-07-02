////for start
const start = document.getElementById('start')

////for time
const time = document.getElementById('cooldown')
let cooldown = 10
time.textContent = cooldown

function decrease() {
  cooldown--
  time.textContent = cooldown
  if (cooldown > 0) {
    console.log(cooldown)
    setTimeout(decrease, 1000)
  }
}

////for game

////for score
const score = document.getElementById('point')
let point = 0
if (true) {
  point++
  score.textContent = point
}
