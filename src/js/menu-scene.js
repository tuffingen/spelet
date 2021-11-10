class PreloadScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        this.input.once('pointerdown', function () {

            this.scene.resume('PlayScene');

        }, this);
    }
}

export default PreloadScene;