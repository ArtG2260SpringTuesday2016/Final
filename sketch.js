var blocks = [];
var cns = [];
var coins;

function setup() {
  createCanvas(550, 400);
  var blockade = [230, 50, 25, 300, 50, 50, 200, 25, 160, 87, 25, 100, 98, 125, 100, 25, 90, 50, 180, 25, 400, 50, 200, 25, 300, 87, 25, 100, 402, 125, 180, 25, 352, 50, 270, 25, 352, 50, 270, 25, 260, 270, 420, 25, 480, 242, 25, 210, 63, 305, 25, 60, 185, 340, 270, 25, 440, 340, 100, 25];
  coins = new Group();
  var bc = function() {
    for (var i = 0; i < 60; i += 4) {
      blocks.push(createSprite(blockade[i], blockade[i + 1], blockade[i + 2], blockade[i + 3]));
    }
  }
  bc();
  player = createSprite(0, 0, 25, 25);
  player.shapeColor = color('red');

  for (var i = 0; i < 5; i++) {
    cns[i] = new coinsss;
  }
}


function draw() {
  var blockade = [230, 50, 25, 300, 50, 50, 200, 25, 160, 87, 25, 100, 98, 125, 100, 25, 90, 50, 180, 25, 400, 50, 200, 25, 300, 87, 25, 100, 402, 125, 180, 25, 352, 50, 270, 25, 352, 50, 270, 25, 260, 270, 420, 25, 480, 242, 25, 210, 63, 305, 25, 60, 185, 340, 270, 25, 440, 340, 100, 25];
  background(150);
  player.velocity.x = (mouseX - player.position.x) * 0.2;
  player.velocity.y = (mouseY - player.position.y) * 0.2;
  player.overlap(coins, getCoin);
  var bc = function() {
    for (var i = 0; i < 15; i++) {
      player.collide(blocks[i]);
    }
  }

  for (var i = 0; i < cns.length; i++) {
    cns[i].display();
  }

  bc();
  drawSprites();
  /*  if (coins.length == 0) {
      fill(150);
      rect(0, 0, 600, 400);
      textSize(50);
      fill('red');
      text("you win!", 170, 200);
    }*/
}

function coinsss() {
  this.x = [120, 100, 340, 440, 440];
  this.y = [90, 305, 90, 165, 235];
  this.z = 20;
  this.w = 20;

  this.display = function() {
    for (var i = 0; i < 5; i += 1) {
      var c = createSprite(this.x[i], this.y[i], this.z, this.w);
      c.shapeColor = color(255, 255, 0);
      coins.add(c);
    }
  }
}

function getCoin(player, coin) {
  coin.remove();
}