// Create a new Phaser Game
const game = new Phaser.Game(800, 600, Phaser.AUTO, '');
// Add the different named game states
game.state.add('Boot', Boot);
game.state.add('Preload', Preload);
game.state.add('Play', Play);

// Start the game on the "Boot" game state
game.state.start('Boot')