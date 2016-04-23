//updated code
var s;
var steps = 20; //grid for background

function setup() {
  createCanvas(600,600);
  s = new Snake();
  frameRate= 10;
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



