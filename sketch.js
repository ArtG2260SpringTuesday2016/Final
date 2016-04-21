var number;
var spr;
var wiggle;
var rainbow;
function preload(){

rainbow = loadAnimation("assets/Circle01.png","assets/Circle05.png")


number = loadAnimation("assets/Number00.png","assets/Number07.png");

wiggle = createSprite(100,200);
wiggle.addAnimation("1sthalf", "assets/Wiggle00.png","assets/Wiggle02.png")
wiggle.addAnimation("2ndhalf", "assets/Wiggle00.png","assets/Wiggle05.png")
var anim = wiggle.addAnimation("3rdquarter","assets/Wiggle00.png","assets/Wiggle08.png")

wiggle.setCollider("circle",0,0,70);

wiggle.onMouseOver = function(){
  this.changeAnimation("2ndhalf")
}

wiggle.onMouseOut = function(){
  this.changeAnimation("1sthalf")
}

wiggle.onMousePressed = function() {
  this.changeAnimation("3rdquarter");
  this.animation.goToFrame(this.animation.getLastFrame());
  }
  
  wiggle.onMouseReleased = function() {
  this.changeAnimation("3rdquarter");
  this.animation.goToFrame(0);
  }  
}

function setup() {
  createCanvas(600,600);
  rbw = createSprite(400,400);
  rbw.addAnimation("default",rainbow);
  spr = createSprite(30, 30);
  spr.addAnimation("default", number);
}

function draw() {
  background(255,255,255);
  spr.position.x = mouseX + 80;
  spr.position.y = mouseY +30;
  if (mouseIsPressed) {
    spr.rotation -= 2;
  }
  drawSprites();
}