var brojacTeksta = 0;
var brojacPotpisa = 0;
var kuckanjeInterval;

const podaci = {
  "tekst": "Po mišljenju komandanta Srbije, a u suprotnosti sa iznetim za Hrvatsku, nemiri se u prvom redu i gotovo isključivo imaju pripisati komunističkom uticaju.",
  "potpis": "Nemački izveštaj od 11. avgusta 1941."
}

export class Izvestaj {
  constructor() {
    this.zvuk = new Audio('kuckanje.mp3');
    this.start()
  }

  start() {
    this.elementTekst = document.querySelector('#tekst')
    this.elementPotpis = document.querySelector('#potpis')
    kuckanjeInterval = window.setInterval(this.kucaj.bind(this), 80);
    this.zvuk.play();
  }

  kucaj() {
    this.elementTekst.innerHTML += podaci.tekst.charAt(brojacTeksta);
    brojacTeksta++;
    if (brojacTeksta > podaci.tekst.length) {
      this.elementPotpis.innerHTML += podaci.potpis.charAt(brojacPotpisa);
      brojacPotpisa++;
    }
    if (brojacPotpisa >= podaci.potpis.length) {
      this.zvuk.pause();
      clearInterval(kuckanjeInterval);
    }
  }
}
