const elementTekst = document.querySelector('#tekst')

let i = 0
let intervalId

const tekst = `Po mišljenju komandanta Srbije, a u suprotnosti sa iznetim za Hrvatsku, nemiri se u prvom redu i gotovo isključivo imaju pripisati komunističkom uticaju.

Nemački izveštaj od 11. avgusta 1941.`

export class Izvestaj {
  constructor() {
    this.zvuk = new Audio('kuckanje.mp3')
    this.start()
  }

  start() {
    intervalId = window.setInterval(this.kucaj.bind(this), 80)
    this.zvuk.play()
  }

  kucaj() {
    elementTekst.innerHTML += tekst.charAt(i)
    i++
    elementTekst.innerHTML = elementTekst.innerHTML.replace(/\n/g, '<br>')
    if (i > tekst.length) {
      this.zvuk.pause()
      clearInterval(intervalId)
    }
  }
}
