const container = document.getElementById('container')
const top = document.getElementById('gridTop')
const left = document.getElementById('gridLeft')

const { width, height } = require('./constants').map

container.className += 'debug'

for (let i=0; i<=width; i++) {
  const div = document.createElement('div')
  div.innerHTML = i
  top.appendChild(div)
}

for (let i=1; i<=height; i++) {
  const div = document.createElement('div')
  div.innerHTML = i
  left.appendChild(div)
}
