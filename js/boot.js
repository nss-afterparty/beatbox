class Boot extends Phaser.State {
  create() {

    // Scale to show the full screen
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // Start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Start the "preload" state of the game
    this.state.start('Preload');
  }
}