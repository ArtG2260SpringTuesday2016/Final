// GLOBAL VARIABLES
var hit=false;
var tetrad=[];
var buildup=[];
var allunits=[];
var w = 30;

var xpos = 120;
var ypos = 0;

// UNIT FUNCTION

function unit (x,y){
  strokeWeight(1.2)
  stroke('black');
  rect(x,y,30,30);
}

// 7 BLOCK TYPES

function block(x,y,type){
  x2=x+w;
  y2=y+w;
  x3=x-w;
  y3=y-w;
  x4=x+w+w;

  if(type=="O"){
    fill('yellow');
    unit(x,y);
    unit(x2,y);
    unit(x,y2);
    unit(x2,y2);
  }
  
  else if(type=="T"){
    fill('purple');
    unit(x,y);
    unit(x2,y);
    unit(x3,y);
    unit(x,y3);
  }
  
  else if(type=="J"){
    fill('blue');
    unit(x,y);
    unit(x,y3);
    unit(x,y2);
    unit(x2,y3);
  }
  
  else if(type=="L"){
    fill('orange');
    unit(x,y);
    unit(x,y3);
    unit(x,y2);
    unit(x2,y2);
  }
  
  else if(type=="Z"){
    fill('red');
    unit(x,y);
    unit(x2,y);
    unit(x,y3);
    unit(x3,y3);
  }
  
  else if(type=="S"){
    fill('green');
    unit(x,y);
    unit(x2,y);
    unit(x,y2);
    unit(x3,y2);
  }
  
  else if(type=="I"){
    fill('#89f');
    unit(x,y);
    unit(x3,y);
    unit(x2,y);
    unit(x4,y);
  }
}

// TETRAD CLASS
  
function Tetrad(x,y,type){
  this.x=x;
  this.y=y;
  
  var letters = [ "O", "T", "J", "L", "Z", "S", "I"];
  var index = floor(random(letters.length));
      
  this.display=function(){
    block(constrain(this.x,0,300),constrain(this.y,0,630),letters[index]);
  }
  
  this.move=function(){
    if (keyIsPressed === false ){   // moving in ticks
      this.y+=30;
      frameRate(1.5);
    } else if (keyIsDown(DOWN_ARROW)){  // smooth movement
      frameRate(30);
    }
  }
  
  // detet collisions of tetrads, then store in new array)
  this.deactivate=function(){
    hit=collideRectRect(0,660,300,30,tetrad[0].x,tetrad[0].y, 30,30);
    
    if(hit){
      var temp = new Tetrad(xpos,ypos);
      buildup.push(tetrad[0]);
      tetrad.splice(0,1);
      tetrad.push(temp);
    }
  }
  
  this.render=function(){
    this.display();
    this.move();
    this.deactivate();
  }
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
  createCanvas(300,690);
  
  // PUSHING NEW TETRADS TO ARRAY
  var temp = new Tetrad(xpos,ypos);
  tetrad.push(temp);
  
  // all units stored
  // var temp2 = new block(tetrad[0].x,tetrad[0].y, "T");
  // allunits.push(temp2);
  // console.log("see"+allunits[0]);
}

function draw() {
  background(20,20,20);

  for (var i=0; i<tetrad.length; i++){
    tetrad[i].render();
  }
  
  for (var i=0; i<buildup.length; i++){
    buildup[i].render();
  }
  
  fill('red');
  rect(0,660,300,30);
}
