const quitButton = document.getElementById('quit')

quitButton.addEventListener('click', () => {
  window.close()
})
const play = document.getElementById('Play')
play.addEventListener('click', () => {
  window.open('play.html', '_blank')
})
const Help = document.getElementById('Help')
Help.addEventListener('click', () => {
  window.open('help.html', '_blank')
})
