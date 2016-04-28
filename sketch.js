// GLOBAL VARIABLES
var hit=false;
var pieces = [];
var tetrad=[];
var buildup=[];
  
var w = 30;
var xpos = 120;
var ypos = 0;

// TETRAD CLASS
  
function Tetrad(xpos0,ypos0,xpos1,ypos1,xpos2,ypos2,xpos3,ypos3){
  this.xpos0=xpos0; //x,y
  this.ypos0=ypos0;
  
  this.xpos1=xpos1; //x+,y+
  this.ypos1=ypos1;
  
  this.xpos2=xpos2; //x-,x-
  this.ypos2=ypos2;

  this.xpos3=xpos3; //x++
  
  var unit1 = {"x":this.xpos1, "y":this.ypos0};
  var unit2 = {"x":this.xpos0, "y":this.ypos1};
  var unit3 = {"x":this.xpos1, "y":this.ypos1};
  var unit4 = {"x":this.xpos2, "y":this.ypos0};
  var unit5 = {"x":this.xpos0, "y":this.ypos2};
  var unit6 = {"x":this.xpos2, "y":this.ypos2}; 
  var unit7 = {"x":this.xpos1, "y":this.ypos2};
  var unit8 = {"x":this.xpos2, "y":this.ypos1};
  var unit9 = {"x":this.xpos3, "y":this.ypos0};
  var unit0 = {"x":this.xpos0, "y":this.ypos0};

  var letters = [ "O", "T", "J", "L", "Z", "S", "I"];
  var index = floor(random(letters.length));
  
  this.generate=function(){
    pieces.push(unit0);
    
    if(letters[index] === "O"){
      fill('yellow');
      pieces.push(unit1,unit2,unit3);
    } else if(letters[index] === "T"){
      fill('purple');
      pieces.push(unit1,unit4,unit5);
    } else if(letters[index] === "J"){
      fill('blue');
      pieces.push(unit5,unit2,unit7);
    } else if(letters[index] === "L"){
      fill('orange');
      pieces.push(unit5,unit2,unit3);
    } else if(letters[index] === "Z"){
      fill('red');
      pieces.push(unit1,unit5,unit6);
    } else if(letters[index] === "S"){
      fill('green');
      pieces.push(unit1,unit2,unit8);
    } else if(letters[index] === "I"){
      fill('#89f');
      pieces.push(unit1,unit4,unit9);
    }
  }
      
  this.move=function(){
    console.log(pieces[0]);
    console.log(tetrad[0]);
    if (keyIsPressed === false && pieces[0].y<630 && pieces[1].y<630 && pieces[2].y<630 && pieces[3].y<630){   // moving in ticks
      tetrad[0].ypos0+=w;
      tetrad[0].ypos1+=w;
      tetrad[0].ypos2+=w;
      tetrad[0].ypos3+=w;
      frameRate(1.5);
    } else if (keyIsDown(DOWN_ARROW)){  // smooth movement
      frameRate(30);
    }
  }
  
  this.display=function(){
    strokeWeight(1.2);
    stroke('black');
    for(var i=0; i<pieces.length; i++){
      rect(tetrad[0].xpos0,tetrad[0].ypos0,w,w);
      rect(tetrad[0].xpos1,tetrad[0].ypos1,w,w);
      rect(tetrad[0].xpos2,tetrad[0].ypos2,w,w);
      rect(tetrad[0].xpos3,tetrad[0].ypos3,w,w);
    }
  }

  // detet collisions of tetrads, then store in new array)
  this.deactivate=function(){
    hit=collideRectRect(0,height,width,w,tetrad[0].x,tetrad[0].y, 30,30);
    if(hit){
      var temp = new Tetrad(xpos,ypos,xpos+w,ypos+w,xpos-w,ypos-w,xpos+w+w)
      buildup.push(pieces[0],pieces[1],pieces[2],pieces[3]);
      pieces.splice(0,4);
      pieces.push(temp);
    }
  }
  
  this.render=function(){
    this.generate();
    this.move();
    this.display();
    this.deactivate();
  }
}

// KEY PRESSES

function keyPressed() {
  if (keyCode === RIGHT_ARROW && tetrad[0].xpos3<200) {
    tetrad[0].xpos3+=30;
  } else if (keyCode === LEFT_ARROW) {
    pieces[i].x-=30;
  } else if (keyCode === DOWN_ARROW) {
    pieces[i].y+=30;
  } else if (keyCode === 32) {
    pieces[i].y=height-w-pieces[i].y;
  }
}


// SETUP + DRAW FUNCTION

function setup(){
  createCanvas(300,690);
  
  // PUSHING NEW TETRADS TO ARRAY
  var temp = new Tetrad(xpos,ypos,xpos+w,ypos+w,xpos-w,ypos-w,xpos+w+w,null);
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
