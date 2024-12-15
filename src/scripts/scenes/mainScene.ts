import PhaserLogo from '../objects/button'
import HiddenObj from '../objects/hiddenObj'

export default class MainScene extends Phaser.Scene {
  private anim: any[]
  private parts: HiddenObj[]
  private bg
  public static enableGame
  public static countClick: number = 0
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    MainScene.enableGame = false
    this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'back_five_dogs')
    this.anim = []
    this.parts = []
    for (let i = 1; i < 9; i++) {
      this.anim.push({ key: 'circle_' + i })
    }
    this.anims.create({
      key: 'circle_add',
      frames: this.anim,
      frameRate: 24,
      repeat: 0
    })

    this.createLevel(1)
    this.scale.on('resize', this.resize, this)
    this.resize(null, null, this.scale.displaySize)
  }

  createLevel(i: number) {
    let data_h: any = JSON.parse(this.cache.text.get('level_' + i + '_h'))
    let data_v: any = JSON.parse(this.cache.text.get('level_' + i + '_v'))
    // console.log(data_h);
    // console.log(data_v);
    let h_obj: HiddenObj
    for (let index = 0; index < data_h.objects.length; index++) {
      const element = data_h.objects[index]
      h_obj = new HiddenObj(this, element.x, element.y, element.filename)
      h_obj.addHorizontalPos(element)
      h_obj.addVerticalPos(data_v.objects[index])
      this.parts.push(h_obj)
    }
  }
  public resize(gameSize, baseSize, displaySize) {
    if (displaySize._parent.width >= displaySize._parent.height) {
      for (let index = 0; index < this.parts.length; index++) {
        const element = this.parts[index]
        element.updateScale(element.obj_Hor)
      }
    } else {
      for (let index = 0; index < this.parts.length; index++) {
        const element = this.parts[index]
        element.updateScale(element.obj_Ver)
      }
    }
  }
  public update() {
    if (MainScene.countClick == 5) {
      if (!this.scene.isPaused('MainScene')) {
        this.scene.pause('MainScene')
        this.scene.launch('FinishScene')
      }
    }
  }
}
