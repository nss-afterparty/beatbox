let Boot = {
  create: function () {

    // Scale to show the full screen
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // Start physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Start the "preload" state of the game
    game.state.start('Preload');
  }
}