const element = document.querySelector('#tekst')
const audio = new Audio('kuckanje.mp3')
const text = `Po mišljenju komandanta Srbije, a u suprotnosti sa iznetim za Hrvatsku, nemiri se u prvom redu i gotovo isključivo imaju pripisati komunističkom uticaju.

Nemački izveštaj od 11. avgusta 1941.`

let i = 0
let intervalId

function kucaj() {
  element.innerHTML += text.charAt(i)
  element.innerHTML = element.innerHTML.replace(/\n/g, '<br>')
  i++
  if (i > text.length) {
    audio.pause()
    clearInterval(intervalId)
  }
}

function init() {
  intervalId = window.setInterval(kucaj, 80)
  audio.play()
}

init()
