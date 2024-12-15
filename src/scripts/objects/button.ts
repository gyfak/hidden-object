export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, callBack) {
    super(scene, x, y)
    scene.add.existing(this)

    const button: Phaser.GameObjects.Image = scene.add.image(0, 0, 'btn')
    this.add(button)
    let txt = this.scene.add
      .text(0, 0, `Play Now`, {
        color: '#FFFFFF',
        fontSize: '33px'
      })
      .setOrigin(0.5, 0.5)
    this.add(txt)
    button.setInteractive()

    button.on('pointerdown', callBack)
  }
}
