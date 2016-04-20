var blocks = [];

function setup() {
  createCanvas(550, 400);
  var blockade = [230,50, 25, 300,50, 50, 200, 25,160, 87, 25, 100,98, 125, 100, 25,90, 50, 180, 25,400, 50, 200, 25,300, 87, 25, 100,402, 125, 180, 25,352, 50, 270, 25,352, 50, 270, 25,260, 270, 420, 25,480, 242, 25, 210,63, 305, 25, 60,185, 340, 270, 25,440, 340, 100, 25];
  coins = new Group();
  var bc = function() {
    for (var i = 0; i < 60; i+=4) {
    blocks.push(createSprite(blockade[i],blockade[i + 1],blockade[i + 2],blockade[i + 3]));
    } 
  }
  bc();
  console.log(blocks);
  player = createSprite(0, 0, 25, 25);
  player.shapeColor = color('red');
  var c = createSprite(120, 90, 20, 20);
  var d = createSprite(100, 305, 20, 20);
  var e = createSprite(340, 90, 20, 20);
  var f = createSprite(440, 165, 20, 20);
  var g = createSprite(440, 235, 20, 20);
  c.shapeColor = color(255, 255, 0);
  d.shapeColor = color(255, 255, 0);
  e.shapeColor = color(255, 255, 0);
  f.shapeColor = color(255, 255, 0);
  g.shapeColor = color(255, 255, 0);
  coins.add(c);
  coins.add(d);
  coins.add(e);
  coins.add(f);
  coins.add(g);
}

function draw() {
  var blockade = [230, 50, 25, 300,50, 50, 200, 25,160, 87, 25, 100,98, 125, 100, 25,90, 50, 180, 25,400, 50, 200, 25,300, 87, 25, 100,402, 125, 180, 25,352, 50, 270, 25,352, 50, 270, 25,260, 270, 420, 25,480, 242, 25, 210,63, 305, 25, 60,185, 340, 270, 25,440, 340, 100, 25];
  background(150);
  player.velocity.x = (mouseX - player.position.x) * 0.2;
  player.velocity.y = (mouseY - player.position.y) * 0.2;
  player.overlap(coins, getCoin);
  var bc = function() {
    for (var i = 0; i < 15; i++) {
      player.collide(blocks[i]);
    }
  }

  bc();
  drawSprites();
  if (coins.length == 0) {
    fill(150);
    rect(0, 0, 600, 400);
    textSize(50);
    fill('red');
    text("you win!", 170, 200);
  }
}

function getCoin(player, coin) {
  coin.remove();
}