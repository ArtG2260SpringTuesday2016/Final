// GLOBAL VARIABLES
var hit=false;
var tetrad=[];
var buildup=[];
var allunits=[];
var w = 30;

var xpos = 120;
var ypos = 0;

// TETRAD CLASS
  
function Tetrad(x,y,type){
  this.x=x;
  this.y=y;
  
  var pieces = [];
  
  var letters = [ "O", "T", "J", "L", "Z", "S", "I"];
  var index = floor(random(letters.length));
  
  this.generate=function(){
    pieces.push(this.x,this.y);
    if(letters[index] === "O"){
      fill('yellow');
      pieces.push(this.x+w,this.y,this.x,this.y+w,this.x+w,this.y+w);
    } else if(letters[index] === "T"){
      fill('purple');
      pieces.push(this.x+w,this.y,this.x-w,this.y,this.x,this.y-w)
    } else if(letters[index] === "J"){
      fill('blue');
      pieces.push(this.x,this.y-w,this.x,this.y+w,this.x+w,this.y-w);
    } else if(letters[index] === "L"){
      fill('orange');
      pieces.push(this.x,this.y-w,this.x,this.y+w,this.x+w,this.y+w);
    } else if(letters[index] === "Z"){
      fill('red');
      pieces.push(this.x+w,this.y,this.x,this.y-w,this.x-w,this.y-w);
    } else if(letters[index] === "S"){
      fill('green');
      pieces.push(this.x+w,this.y,this.x,this.y+w,this.x-w,this.y+w);
    } else if(letters[index] === "I"){
      fill('#89f');
      pieces.push(this.x-w,this.y,this.x+w,this.y,this.x+w+w,this.y);
    }
  }
      
  this.display=function(){
    strokeWeight(1.2);
    stroke('black');
    for(var i=0; i<7; i+2){
      rect(pieces[i],pieces[i+1],30,30);
    }
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
    this.generate();
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
