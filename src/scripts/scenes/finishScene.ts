import Button from '../objects/button'

export default class FinishScene extends Phaser.Scene {
  private contAll
  private btn: Button
  private char: Phaser.GameObjects.Sprite
  private txt1: Phaser.GameObjects.Text
  private txt2: Phaser.GameObjects.Text
  private txt3: Phaser.GameObjects.Text
  constructor() {
    super({ key: 'FinishScene' })
  }

  create() {
    this.contAll = this.add.container(0, 0)
    let graphics = this.add.graphics()
    let color = 0x000000

    graphics.fillStyle(color, 0.95)
    graphics.fillRect(0, 0, 1075, 767)
    // `Phaser v${Phaser.VERSION}`
    this.txt1 = this.add.text(this.cameras.main.width / 2, 120 + this.cameras.main.height / 2, `Can you solve`, {
      color: '#FFFFFF',
      fontSize: '35px'
    })
    this.txt2 = this.add.text(this.cameras.main.width / 2, 160 + this.cameras.main.height / 2, `every mystery?`, {
      color: '#FFFFFF',
      fontSize: '35px'
    })
    this.txt3 = this.add.text(this.cameras.main.width / 2, -100 + this.cameras.main.height / 2, `Great Job`, {
      color: '#FFFFFF',
      fontSize: '55px'
    })
    this.txt1.setOrigin(0.5, 0.5)
    this.txt2.setOrigin(0.5, 0.5)
    this.txt3.setOrigin(0.5, 0.5)

    let logo = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height * 0.15, 'logo')
    logo.scaleX = 0.75
    logo.scaleY = 0.75
    this.char = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'char')

    this.btn = new Button(this, this.cameras.main.width / 2, this.cameras.main.height * 0.89, () => {
      const url = 'https://www.g5.com'
      const s = window.open(url, '_blank')
    })

    this.contAll.add(graphics)
    this.contAll.add(this.char)
    this.contAll.add(logo)
    this.contAll.add(this.txt1)
    this.contAll.add(this.txt2)
    this.contAll.add(this.txt3)

    this.contAll.alpha = 0.15
    this.tweens.add({
      targets: this.btn,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 750,
      delay: 250,
      repeat: -1,
      yoyo: true
    })
    this.tweens.add({
      targets: this.contAll,
      alpha: 1,
      duration: 700,
      delay: 0,
      repeat: 0
    })

    this.scale.on('resize', this.resize, this)
    this.resize(this.scale.gameSize, this.scale.baseSize, this.scale.displaySize)
  }

  public resize(gameSize, baseSize, displaySize) {
    if (displaySize._parent.width >= displaySize._parent.height) {
      this.char.scaleX = 0.9
      this.char.scaleY = this.char.scaleX
      this.char.x = 180
      this.char.y = this.cameras.main.height
      this.char.setOrigin(0.5, 1)
    } else {
      this.char.scaleX = -0.5
      this.char.scaleY = 0.5

      this.char.x = this.cameras.main.width / 2
      this.char.y = this.cameras.main.height * 0.58
      this.char.setOrigin(0.5, 0.5)
    }
  }
}
