setDate = () => {
  const now = new Date()
  const sec = now.getSeconds()
  const min = now.getMinutes()
  const hr = now.getHours()
  // console.log(hr, min, sec)
}

setInterval(setDate, 1000)