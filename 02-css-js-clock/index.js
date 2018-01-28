const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

setDate = () => {
  const now = new Date()
 
  const sec = now.getSeconds()
  const secDeg = sec / 60 * 360 + 90
  secHand.style.transform = `rotate(${secDeg}deg)`
  // console.log(sec)

  const min = now.getMinutes()
  const minDeg = min / 60 * 360 + 90
  minHand.style.transform = `rotate(${minDeg}deg)`

  const hour = now.getHours()
  const hourDeg = hour / 12 * 360 + 90
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate, 1000)