const img = ['cat.png', 'dog.png', 'lion.png', 'bird.png', 'hide.png']
////game state
let cooldown = 10
let point = 0
let card = [...img]
let flipCard = []
let sameCard = 0
const TsameCard = 2
let timer
let allShowed = false
let Active = false
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

score.textContent = point
////for game

function game() {
  cooldown = 10
  point = 0
  sameCard = 0
  flipCard = []
  card = [...img]
  allShowed = true
  Active = false
  container.innerHTML = ''
  random(card)
  create()
  showAll()
}
function random(card) {
  for (let k = card.length - 1; k > 0; k--) {
    const Random = Math.floor(Math.random() * (k + 1))
    ;[card[k], card[Random]] = [card[Random], card[k]]
  }
  console.log(card)
}
function create() {
  for (let i = 0; i < 4; ++i) {
    card.push(i)
  }
  console.log(card)
  function add() {
    const container = document.querySelector('#container')
    card.forEach((num) => {
      const createBoxes = document.createElement('div')

      createBoxes.setAttribute('class', 'box')
      return container.append(createBoxes)
    })
  }
  add()
  if (point >= 10) {
    add()
  }
  console.log(card)
  if (point >= 30) {
    add()
    add()
  }
}

window.onload = game()
