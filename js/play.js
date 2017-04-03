let Play = {

  create: function() {
    // Set starting score
    score = 0;

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //==================================[ CONTROLS ]======================================//
    cursors = game.input.keyboard.createCursorKeys();
    cursors.up.onDown.add(isUp);
    cursors.right.onDown.add(moveRight);

    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);

    // Show the score to the user
    scoreText = game.add.text(16, 16, `score: ${score}`, { fontSize: '32px', fill: '#000' });
    // Make the score text stay put

    // Make the camera follow the player so it's a "sidescroller"
    game.camera.follow(player);
  },



  // Restart the "Game" state to start from the beginning
  restartGame: function () {
    game.state.start('Play');
  },

  update: function() {
    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    player.animations.stop();
    player.frame = 4;

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down) {
      player.body.y -= 100;
    }

  }
}

function moveRight() {
  player.body.velocity.x = 2000;
  player.body.x += 30;
  console.log("hi-hat")
}

function isUp() {
  console.log("kick");
}