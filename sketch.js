var s;

function setup() {
  createCanvas(600,600);
  s = new Snake();
}

function draw() {
  background(51);
  s.update();
  s.show();
}

function keyPressed(){
  if(keyCode === UP){
    s.dir(0,-1);
  }
  else if (keyCode === DOWN){
  s.dir(0,1);
  }
  else if (keyCode === RIGHT){
  s.dir(1,0);
  }
  else if (keyCode === LEFT){
  s.dir(-1,0);
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed= 1;
  this.ySpeed= 0;
  
  this.dir = function(x,y) {
    this.xspeed= x;
    this.yspeed= y;
  }
  
  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  
  this.show= function(){
    fill(255);
    rect(this.x,this.y,10,10);
  }
}
