import MainScene from '../scenes/mainScene'

export default class HiddenObj extends Phaser.GameObjects.Container {
  private isShowed: Phaser.GameObjects.Sprite
  public obj_Hor: any
  public obj_Ver: any
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture) {
    super(scene, x, y)
    scene.add.existing(this)

    // const shape = new Phaser.Geom.Polygon([
    //   0, 109, 147, 109, 147, 0, 0, 0
    // ])

    let anim = scene.add.sprite(0, 0, texture)
    this.add(anim)
    anim.setInteractive()
    anim.addListener('pointerdown', this.showAnim, this)
  }

  private showAnim() {
    if (this.isShowed === undefined && MainScene.enableGame) {
      MainScene.countClick++
      this.isShowed = this.scene.add.sprite(0, 0, 'circle_1')
      this.isShowed.play('circle_add')
      this.add(this.isShowed)
      //   this.emit('hidden_over')
    }
  }
  public addHorizontalPos(_obj: any) {
    this.obj_Hor = _obj
  }
  public addVerticalPos(_obj: any) {
    this.obj_Ver = _obj
  }
  public updateScale(obj) {
    this.x = obj.x
    this.y = obj.y
    this.rotation = obj.r
    this.scaleX = obj.sclX
    this.scaleY = obj.sclY

    // this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`)
  }
}
