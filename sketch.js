// GLOBAL VARIABLES

var tetrad=[];
var buildUp=[]
var w = 30;

var xpos = 120;
var ypos = 0

// UNIT FUNCTION

function unit (x,y){
  strokeWeight(1.2)
  stroke('black');
  rect(x,y,30,30);
}

// BLOCK FUNCTIONS

function block(x,y,type){

  if(type=="O"){
    fill('yellow');
    unit(x,y);
    unit(x+w,y);
    unit(x,y+w);
    unit(x+w,y+w);
  }
  
  else if(type=="T"){
    fill('purple');
    unit(x,y);
    unit(x+w,y);
    unit(x-w,y);
    unit(x,y-w);
  }
  
  else if(type=="J"){
    fill('blue');
    unit(x,y);
    unit(x,y-w);
    unit(x,y+w);
    unit(x+w,y-w);
  }
  
  else if(type=="L"){
    fill('orange');
    unit(x,y);
    unit(x,y-w);
    unit(x,y+w);
    unit(x+w,y+w);
  }
  
  else if(type=="Z"){
    fill('red');
    unit(x,y);
    unit(x+w,y);
    unit(x,y-w);
    unit(x-w,y-w);
  }
  
  else if(type=="S"){
    fill('green');
    unit(x,y);
    unit(x+w,y);
    unit(x,y+w);
    unit(x-w,y+w);
  }
  
  else if(type=="I"){
    fill('#89f');
    unit(x,y);
    unit(x-w,y);
    unit(x+w,y);
    unit(x+w+w,y);
  }
}

// TETRAD CLASS

function Tetrad(x,y,type){
  this.x=x;
  this.y=y;
  
  var letters = [ "O", "T", "J", "L", "Z", "S", "I"];
  var index = floor(random(letters.length));
      
  this.display=function(){
      block(constrain(this.x,0,300),constrain(this.y,0,630), letters[index]);
  }
  
  this.move=function(){
    this.y+=1;
  }
  
  this.render=function(){
    this.move();
    this.display();
  }
}

// GENERATE TETRAD

function mousePressed(){
  var temp = new Tetrad(xpos,ypos);
  tetrad.push(temp);
}

// KEY PRESSES

function keyPressed() {
  if (keyCode === RIGHT_ARROW && tetrad[tetrad.length-1].x<width ) {
    tetrad[tetrad.length-1].x+=w;
  } else if (keyCode === LEFT_ARROW && tetrad[tetrad.length-1].x>0) {
    tetrad[tetrad.length-1].x-=w;
  } else if (keyCode === DOWN_ARROW && tetrad[tetrad.length-1].y<height ) {
    tetrad[tetrad.length-1].y+=w;
    return false;
  } else if (keyCode === 32) {
    tetrad[tetrad.length-1].y=height-30;
  }
}

// SETUP + DRAW FUNCTION

function setup(){
    createCanvas(300,660);
}

function draw() {
    background(20,20,20);
    for (var i=0; i<tetrad.length; i++){
      tetrad[i].render();
    }
}
