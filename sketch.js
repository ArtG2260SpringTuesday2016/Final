//updated code
var s;
var steps = 10; //grid for background
var food;

function setup() {
  createCanvas(600,600);
  s = new Snake();
  frameRate= .5;
  pickLocation();
  //createVector(random(width),random(height));
}

function pickLocation(){
  var cols = floor(width/steps);
  var rows = floor(height/steps);
  food = createVector(floor(random(cols)), (random(rows))); //stay within grid
  food.mult(steps);
}

function draw() {
  background(51);
  s.update();
  s.show();
  
  if(s.eat(food)){
    pickLocation();
  }
  
  fill(255,0,255);
  rect(food.x,food.y,20,20);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-1);
  }
  else if (keyCode === DOWN_ARROW){
  s.dir(0,1);
  }
  else if (keyCode === RIGHT_ARROW){
  s.dir(1,0);
  }
  else if (keyCode === LEFT_ARROW){
  s.dir(-1,0);
  }
}



