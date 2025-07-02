const inc = document.getElementById('inc')
const re = document.getElementById('re')
const dec = document.getElementById('dec')
const labelCount = document.getElementById('labelCount')
let cont = 0
inc.onclick = function () {
  cont++
  labelCount.textContent = cont
}
re.onclick = function () {
  cont = 0
  labelCount.textContent = cont
}
