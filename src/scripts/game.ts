import 'phaser'
import IntroScene from './scenes/introScene'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import FinishScene from './scenes/finishScene'

const DEFAULT_WIDTH = 1075
const DEFAULT_HEIGHT = 767

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.CENTER_HORIZONTALLY,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene, IntroScene, FinishScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
