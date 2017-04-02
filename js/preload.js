class Preload extends Phaser.State {
  preload() {
    // Load Assets for the Game
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    }

    create() {
      // Start the "Game" state of the game
      this.state.start('Play');
    }
  }