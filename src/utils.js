export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function playRandomSound() {
  const sound1 = new Audio('https://song.nazvonok.ru/song/6c80/sms-uvedomlenie-na-iphone-zvuk-sms-na-telefonah-apple.mp3')
  const sound2 = new Audio('https://song.nazvonok.ru/song/bfc4/vystrel-s-glushitelya-prikol-na-sms---glushitelya.mp3')
  const sound3 = new Audio('https://song.nazvonok.ru/song/2e84/detskiy-chih-smeshnoy-zvuk-detskogo-chiha.mp3')
  const sound4 = new Audio('https://song.nazvonok.ru/song/e82a/ooo-chpok.mp3')
  let soundArr = [sound1, sound2, sound3, sound4]
  let random = Math.floor(Math.random() * soundArr.length)
  soundArr[random].play()
}

