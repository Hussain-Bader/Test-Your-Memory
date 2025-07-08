const img = [
  'cat.png',
  'dog.png',
  'lion.png',
  'bird.png',
  'fox.png',
  'fish.png',
  'tiger.png',
  'elephant.png'
]
const hide = 'hide.png'
////game state
let cooldown = 10
let point = 0
let card = [...img]
let flipCard = []
let sameCard = 0
const TsameCard = 8
let timer
let allShowed = false
let active = false
////for start
const start = document.getElementById('start')

////for time
const time = document.getElementById('cooldown')
time.textContent = cooldown

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
  allShowed = false
  active = false
  container.innerHTML = ''
  random(card)
  create()
  showAll(10)
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
    front.appendChild(hiding)
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
function showAll(seconds) {
  const boxes = document.querySelectorAll('.box')

  boxes.forEach((box) => box.classList.add('flipped'))

  let remaining = seconds
  time.textContent = remaining

  const countdown = setInterval(() => {
    remaining--
    time.textContent = remaining

    if (remaining <= 0) {
      clearInterval(countdown)

      boxes.forEach((box) => box.classList.remove('flipped'))

      active = true

      startGameTimer()
    }
  }, 1000)
}
function startGameTimer() {
  cooldown = 60
  timer = setInterval(() => {
    cooldown--
    time.textContent = cooldown
    if (cooldown <= 0) {
      clearInterval(timer)
      active = false
      lert('Time up! Your score: ' + point)
    }
  }, 1000)
}
function flipCardHandler() {
  if (
    !active ||
    this.classList.contains('flipped') ||
    this.classList.contains('matched') ||
    flipCard.length >= 2
  ) {
    return
  }

  this.classList.add('flipped')
  flipCard.push(this)

  if (flipCard.length === 2) {
    const [card1, card2] = flipCard

    if (card1.dataset.image === card2.dataset.image) {
      card1.classList.add('matched')
      card2.classList.add('matched')
      flipCard = []
      sameCard++
      point += 5
      score.textContent = point

      if (sameCard === TsameCard) {
        setTimeout(() => {
          clearInterval(timer)
          alert(`You won!`)
        }, 500)
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped')
        card2.classList.remove('flipped')
        flipCard = []
      }, 1000)
    }
  }
}
start.addEventListener(
  'click',
  () => {
    game()
  },
  { once: true }
)
window.onload = () => {
  container.innerHTML = ''
}
