// GLOBAL VARIABLES
var hit=false;
var tetrad=[];
var buildup=[];

var w = 30;
var xpos = 120;
var ypos = 0;

// TETRAD CLASS
  
function Tetrad(x,y){
  this.x=x;
  this.y=y;
  
  var letters = [ "O", "T", "J", "L", "Z", "S", "I"];
  var index = floor(random(letters.length));
  var pieces = [];
  
  this.generate=function(){
    var piece = {"x":this.x,  "y": this.y};
    var pieceO={"x":{this.x+w, this.x, this.x+w}, "y":{this.y, this.y+w, this.y+w};
    var pieceT={"x":{this.x+w, this.x-w, this.x}, "y":{this.y, this.y, this.y-w};
    var pieceJ={"x":this.x,   "y":this.y-w, "x":this.x,   "y":this.y+w, "x":this.x+w,"y":this.y-w};
    var pieceL={"x":this.x,   "y":this.y-w, "x": this.x,  "y":this.y+w, "x": this.x+w,"y":this.y+w};
    var pieceZ={"x":this.x+w, "y":this.y,   "x":this.x,   "y":this.y-w, "x":this.x-w,"y":this.y-w};
    var pieceS={"x":this.x+w, "y":this.y,   "x":this.x,   "y":this.y+w, "x":this.x-w,"y":this.y+w};
    var pieceI={"x":this.x-w, "y":this.y,   "x":this.x+w, "y":this.y,   "x":this.x+w+w,"y":this.y};
    pieces.push(piece);
    
    if(letters[index] === "O"){
      fill('yellow');
      pieces.push(pieceO);
    } else if(letters[index] === "T"){
      fill('purple');
      pieces.push(pieceT);
    } else if(letters[index] === "J"){
      fill('blue');
      pieces.push(pieceJ);
    } else if(letters[index] === "L"){
      fill('orange');
      pieces.push(pieceL);
    } else if(letters[index] === "Z"){
      fill('red');
      pieces.push(pieceZ);
    } else if(letters[index] === "S"){
      fill('green');
      pieces.push(pieceS);
    } else if(letters[index] === "I"){
      fill('#89f');
      pieces.push(pieceI);
    }
  }
      
  this.display=function(){
    strokeWeight(1.2);
    stroke('black');
    for(var i=0; i<pieces.length; i++){
      rect(constrain(pieces[i].x,0,width),constrain(pieces[i].y,0,height),w,w);
    }
  }
  
  this.move=function(){
    if (keyIsPressed === false ){   // moving in ticks
      for(var i=0; i<pieces.length; i++){
        pieces[i].y+=w;
      }
      frameRate(1.5);
    } else if (keyIsDown(DOWN_ARROW)){  // smooth movement
      frameRate(30);
    }
  }
  
  // detet collisions of tetrads, then store in new array)
  this.deactivate=function(){
    hit=collideRectRect(0,height,width,w,tetrad[0].x,tetrad[0].y, 30,30);
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
  if (keyCode === RIGHT_ARROW ) {
    tetrad[0].x+=30;
  } else if (keyCode === LEFT_ARROW) {
    tetrad[0].x-=30;
  } else if (keyCode === DOWN_ARROW) {
    tetrad[0].y+=30;
  } else if (keyCode === 32) {
    tetrad[0].y=height-30;
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
}
