var drakeTexturePath = require('../assets/drakebling.png')
var drakeTextureSpec = require('../assets/drakebling.json')

var speed = 4
var frameRate = 5

var animation
var graphics
var drake

var currentCol = 0
var currentRow = 1
var unit = 100
var grid = [
  [0,0,0,0,1,0,0,0],
  [1,1,1,1,1,1,1,1],
  [0,1,0,0,1,0,0,0],
  [0,1,0,0,1,0,0,0],
  [0,1,1,1,1,0,0,0],
  [0,1,0,0,0,0,0,0]
]

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'app', {
  preload: preload,
  create: create,
  update: update
})

function preload () {
  game.load.atlasJSONHash('bot', drakeTexturePath, null, drakeTextureSpec)
}

function create () {
  drawMap()

  drake = game.add.sprite(125, 150, 'bot')
  drake.x = 100
  drake.y = 150
  drake.scale.setTo(0.5)
  drake.anchor.setTo(0.5, 1)
  drake.animations.add('run')
}

function drawMap () {
  graphics = game.add.graphics()
  grid.forEach(function (row, rowIndex) {
    row.forEach(function (col, colIndex) {
      if (!col) return
      graphics.beginFill(0xa03894, 0.5)
      graphics.drawRect(colIndex * unit, rowIndex * unit, unit, unit)
      graphics.endFill()
    })
  })
}

function move (x, y) {
  if (!animation) animation = drake.animations.play('run', frameRate, true)

  drake.x += x || 0
  drake.y += y || 0

  if (animation.isPaused) animation.play(frameRate, true)
}

function update () {
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    move(-speed)
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    move(speed)
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    move(0, -speed)
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
    move(0, speed)
  } else {
    if (animation) animation.paused = true
  }
}