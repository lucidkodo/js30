function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0 //rewinding audio play time to start
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  // console.log(e) // all the transitions occured during the event
  // if (e.propertyName !== 'transform') return
  // console.log(e.propertyName)
  // console.log(e)
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', playSound) 
// dont have to (e) at the back beause the event is passed into the function playSound