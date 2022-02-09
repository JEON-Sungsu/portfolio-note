const content = 'Welcome to Howard`s Portfolio!'
const text = document.querySelector('.text-typing')
let index = 0

function typing() {
  text.textContent += content[index++]
  if (index > content.length) {
    text.textContent = ''
    index = 0
  }
}

setInterval(typing, 250)
