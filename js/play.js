class Play extends Phaser.State {

  create() {
    // Set starting score
    this.score = 0;

    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true;

    // Here we create the ground.
    this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    this.ground.body.immovable = true;

    // The player and its settings
    this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    //==================================[ CONTROLS ]======================================//
    this.cursors = game.input.keyboard.createCursorKeys();
    this.cursors.up.onDown.add(isUp);
    this.cursors.right.onDown.add(function() {
      this.player.body.velocity.x = 2000;
      this.player.body.x += 30;
      console.log("hi-hat")
    });

    // function moveRight() {
    //   this.player.body.velocity.x = 2000;
    //   this.player.body.x += 30;
    //   console.log("hi-hat")
    // }

    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);

    // Show the score to the user
    this.scoreText = this.game.add.text(16, 16, `score: ${this.score}`, { fontSize: '32px', fill: '#000' });
    // Make the score text stay put

    // Make the camera follow the player so it's a "sidescroller"
    this.game.camera.follow(this.player);
  }

  // Restart the "Game" state to start from the beginning
  restartGame() {
    this.game.state.start('Play');
  }

  update() {
    //  Collide the player and the stars with the platforms
    this.game.physics.arcade.collide(this.player, this.platforms);

    //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;
    this.player.animations.stop();
    this.player.frame = 4;

    //  Allow the player to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.y -= 100;
    }

  };
}

function isUp() {
  console.log("kick");
}