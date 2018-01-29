const inputs = document.querySelectorAll('.controls input')

function handleUpdate () {
  const suffix = this.dataset.sizing || ''
  // console.log(this.name) // js have access to DOM when there's a name attr in it
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate)
  input.addEventListener('mousemove', handleUpdate)
})