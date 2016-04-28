// GLOBAL VARIABLES
var hit=false;
var tetrad=[];
var buildup=[];
var pieces_x = [];
var pieces_y = [];

var w = 30;
var xpos = 120;
var ypos = 0;

// TETRAD CLASS
  
function Tetrad(x,y){
  this.x=x;
  this.y=y;
  
  var letters = [ "O", "T", "J", "L", "Z", "S", "I"];
  var index = floor(random(letters.length));
  
  this.generate=function(){
    pieces_x.push(this.x);
    pieces_y.push(this.y);
    
    
    if(letters[index] === "O"){
      fill('yellow');
      pieces_x.push(this.x+w,this.x,this.x+w);
      pieces_y.push(this.y,this.y+w,this.y+w);
    } else if(letters[index] === "T"){
      fill('purple');
      pieces_x.push(this.x+w,this.x-w,this.x);
      pieces_y.push(this.y,this.y,this.y-w);
    } else if(letters[index] === "J"){
      fill('blue');
      pieces_x.push(this.x,this.x,this.x+w);
      pieces_y.push(this.y-w,this.y+w,this.y-w);
    } else if(letters[index] === "L"){
      fill('orange');
      pieces_x.push(this.x,this.x,this.x+w);
      pieces_y.push(this.y-w,this.y+w,this.y+w);
    } else if(letters[index] === "Z"){
      fill('red');
      pieces_x.push(this.x+w,this.x,this.x-w);
      pieces_y.push(this.y,this.y-w,this.y-w);
    } else if(letters[index] === "S"){
      fill('green');
      pieces_x.push(this.x+w,this.x,this.x-w);
      pieces_y.push(this.y,this.y+w,this.y+w);
    } else if(letters[index] === "I"){
      fill('#89f');
      pieces_x.push(this.x-w,this.x+w,this.x+w+w);
      pieces_y.push(this.y,this.y,this.y);
    }
  }
      
  this.display=function(){
    strokeWeight(1.2);
    stroke('black');
    for(var i=0; i<pieces_x.length; i++){
      rect(constrain(pieces_x[i],0,width),constrain(pieces_y[i],0,height),w,w);
    }
  }
  
  this.move=function(){
    if (keyIsPressed === false ){   // moving in ticks
      for(var i=0; i<pieces_y.length; i++){
        pieces_y[i]+=w;
      }
      frameRate(1.5);
    } else if (keyIsDown(DOWN_ARROW)){  // smooth movement
      frameRate(30);
    }
  }
  
  // detet collisions of tetrads, then store in new array)
  this.deactivate=function(){
    hit=collideRectRect(0,height,width,w,pieces_x,pieces_y, w,w);
    if(hit){
      var temp = new Tetrad(xpos,ypos);
      buildup.push(pieces_x,pieces_y);
      pieces_x.splice(0,4);
      pieces_y.splice(0,4);
      
      for(var i=0; i<pieces_x.length; i+=2){
        pieces_x.push(temp);
      }
    }
    
  }
  
  this.render=function(){
    this.generate();
    this.display();
    this.move();
    this.deactivate();
  }
}

// KEY PRESSES

function keyPressed() {
  if (keyCode === RIGHT_ARROW ) {
    for(var i=0; i<pieces.length; i+=2){
      pieces[i]+=w;
    }
  } else if (keyCode === LEFT_ARROW) {
    for(var i=0; i<pieces.length; i+=2){
      pieces[i]-=w;
    }
  } else if (keyCode === DOWN_ARROW) {
    for(var i=1; i<pieces.length; i+=2){
      pieces[i]+=w;
    }
  } else if (keyCode === 32) {
    tetrad[1]=height-30;
  }
}


// SETUP + DRAW FUNCTION

function setup(){
  createCanvas(300,690);
  
  // PUSHING NEW TETRADS TO ARRAY
  var temp = new Tetrad(xpos,ypos);
  tetrad.push(temp);
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
  
//  console.log(buildup[0]);
}
