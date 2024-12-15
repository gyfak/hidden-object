import Button from '../objects/button'
import MainScene from './mainScene'

export default class IntroScene extends Phaser.Scene {
  private alphaAll = 0.5
  private contAll
  private btn: Button
  constructor() {
    super({ key: 'IntroScene' })
  }

  create() {
    this.contAll = this.add.container(0, 0)
    let graphics = this.add.graphics()
    let color = 0x000000

    graphics.fillStyle(color, 1)
    graphics.fillRect(0, 0, 1075, 767)
    // `Phaser v${Phaser.VERSION}`
    let txt1 = this.add.text(-170 + this.cameras.main.width / 2, -40 + this.cameras.main.height / 2, `5 Hidden Dogs`, {
      color: '#FFFFFF',
      fontSize: '32px'
    })
    let txt2 = this.add.text(
      -175 + this.cameras.main.width / 2,
      40 + this.cameras.main.height / 2,
      `Can you spot them?`,
      {
        color: '#FFFFFF',
        fontSize: '32px'
      }
    )

    let dog = this.add.sprite(120 + this.cameras.main.width / 2, -40 + this.cameras.main.height / 2, 'doggy')
    dog.scaleX = -0.75
    dog.scaleY = 0.75

    this.btn = new Button(this, this.cameras.main.width / 2, this.cameras.main.height * 0.89, () => {
      const url = 'https://www.g5.com'
      const s = window.open(url, '_blank')
    })

    this.contAll.add(graphics)
    this.contAll.add(txt1)
    this.contAll.add(txt2)
    this.contAll.add(dog)
    // this.contAll.add(this.btn)

    this.contAll.alpha = 0.45
    this.tweens.add({
      targets: this.contAll,
      alpha: 0.95,
      // ease: 'sine.inout',
      duration: 700,
      delay: 0,
      repeat: 0
    })

    this.tweens
      .add({
        targets: this.contAll,
        alpha: 0,
        // ease: 'sine.inout',
        duration: 300,
        delay: 2000,
        repeat: 0
      })
      .once('complete', this.onComplete, this)
    // this.scene.sleep('MainScene')
  }

  onComplete() {
    console.log('complete')
    this.contAll.visible = false
    // this.scene.wake('MainScene')
    MainScene.enableGame = true
    // this.scene.remove('IntroScene')
  }

  update() {
    // alphaAll
    // this.fpsText.update()
  }
}
