var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var player;
var coins;

function setup() {
  createCanvas(550, 400);
  coins = new Group();
  block1 = createSprite(230, 50, 25, 300);
  block2 = createSprite(50, 50, 200, 25);
  block3 = createSprite(160, 87, 25, 100);
  block4 = createSprite(98, 125, 100, 25);
  block5 = createSprite(90, height/2, 180, 25);
  block6 = createSprite(400, 50, 200, 25);
  block7 = createSprite(300, 87, 25, 100);
  block8 = createSprite(402, 125, 180, 25)
  block9 = createSprite(352, height/2, 270, 25);
  block10 = createSprite(352, height/2, 270, 25);
  block11 = createSprite(260, 270, 420, 25);
  block12 = createSprite(480, 242, 25, 210);
  block13 = createSprite(63, 305, 25, 60);
  block14 = createSprite(185, 340, 270, 25);
  block15 = createSprite(440, 340, 100, 25);
  player = createSprite(0, 0, 25, 25);
  player.shapeColor = color('red');
  var c = createSprite(120,90,20, 20);
  var d = createSprite(100,305,20, 20);
  var e = createSprite(340,90,20, 20);
  var f = createSprite(440,165,20, 20);
  var g = createSprite(440,235,20, 20);
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
  background(150);
  player.velocity.x = (mouseX-player.position.x)*0.2;
  player.velocity.y = (mouseY-player.position.y)*0.2;
  player.overlap(coins, getCoin);
  player.collide(block1);
  player.collide(block2);
  player.collide(block3);
  player.collide(block4);
  player.collide(block5);
  player.collide(block6);
  player.collide(block7);
  player.collide(block8);
  player.collide(block9);
  player.collide(block10);
  player.collide(block11);
  player.collide(block12);
  player.collide(block13);
  player.collide(block14);
  player.collide(block15);
  drawSprites();
  if (coins.length == 0) {
   fill(150);
   rect(0,0,600,400);
   textSize(50);
   fill('red');
   text("you win!", 170, 200);
  }
}

function getCoin(player, coin) {
  coin.remove();
}