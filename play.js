const img = ['cat.png', 'dog.png', 'lion.png', 'bird.png']
const hide = 'hide.png'
////game state
let cooldown = 10
let point = 0
let card = [...img]
let flipCard = []
let sameCard = 0
const TsameCard = 2
let timer
let allShowed = false
let active = false
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
  card = [...img, ...img]
  allShowed = true
  active = false
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
  card.forEach((image, index) => {
    ////to create
    const box = document.createElement('div')
    box.className = 'box'
    box.dataset.index = index
    box.dataset.image = image

    ////front side
    const front = document.createElement('div')
    front.className = 'front'
    const hiding = document.createElement('img')
    hiding.src = 'hide.png'
    front.appendChild(hide)
    ////back side (imgae)
    const back = document.createElement('div')
    back.className = 'back'
    const cardImg = document.createElement('img')
    cardImg.src = image
    back.appendChild(cardImg)

    ////combine
    box.appendChild(front)
    box.appendChild(back)

    //// add to dom
    container.appendChild(box)

    //// click
    box.addEventListener('click', flipCardHandler)
  })
}
window.onload = game()
