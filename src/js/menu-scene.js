class PreloadScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        this.keyObj = this.input.keyboard.addKey('W', true, false);
    }

    update() {
        if (this.keyObj.isDown) {
            this.scene.resume('PlayScene');
        }
    }
}

export default PreloadScene;
