export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('back_five_dogs', 'assets/img/back_five_dogs.jpg')
    this.load.image('btn', 'assets/img/btn.png')
    this.load.image('char', 'assets/img/char.png')
    this.load.image('doggy', 'assets/img/doggy.png')
    // this.load.image('sparkle', 'assets/img/sparkle.png')
    this.load.image('logo', 'assets/img/logo.png')

    this.load.text('level_1_h', 'assets/lvl/level_1_h.json')
    this.load.text('level_1_v', 'assets/lvl/level_1_v.json')

    for (let i = 1; i < 9; i++) {
      this.load.image('circle_' + i, 'assets/anim/circle_' + i + '.png')
    }
  }

  create() {
    this.game.canvas.oncontextmenu = function (e: Event): void {
      console.log('oncontextmenu')
      e.preventDefault()
    }

    this.scene.launch('MainScene')
    this.scene.launch('IntroScene')
    this.scene.remove('PreloadScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
