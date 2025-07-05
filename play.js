const img = ['cat.png', 'dog.png']
////for start
const start = document.getElementById('start')
start.addEventListener(
  'click',
  () => {
    setTimeout(decrease, 1000)
  },
  { once: true }
)
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
////for score
const score = document.getElementById('point')
let point = 30

score.textContent = point
////for game
let array = []
let flipArray = []
let sameArray = 0
const TsameArray = 2
function game() {
  create()
  random()
}
function create() {
  for (let i = 0; i < 4; ++i) {
    array.push(i)
  }
  console.log(array)
  function add() {
    const container = document.querySelector('#container')
    array.forEach((num) => {
      const createBoxes = document.createElement('div')

      createBoxes.setAttribute('class', 'box')
      return container.append(createBoxes)
    })
  }
  add()
  if (point >= 10) {
    add()
  }
  console.log(array)
  if (point >= 30) {
    add()
    add()
  }
}
