let Preload = {
    preload: function() {
        // Load Assets for the Game
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    },

    create: function() {
      // Start the "Game" state of the game
      game.state.start('Play');
    }
  }