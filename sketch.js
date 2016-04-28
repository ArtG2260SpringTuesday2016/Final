var stemArray = []
var Stem = function (initialX, initialY) {

  this.x = initialX;
  this.y = initialY;
  this.width = 10;
  this.height = 10;
  
  this.renderEllipse = function() {
    fill('green');
    noStroke();
    ellipse(this.x, this.y, this.width, this.height)
  }
}


var flowerArray = []
var Flower = function (initialX, initialY) {
  



  this.x = initialX;
  this.y = initialY;
  this.width = 50;
  this.height = 50;
  
  this.renderEllipse = function() {
    fill('red');
    noStroke();
    ellipse(this.x-20, this.y-3, this.width, this.height)
    
    fill('red');
    noStroke();
    ellipse(this.x+20, this.y-3, this.width, this.height)
    
    fill('red');
    noStroke();
    ellipse(this.x+20, this.y-45, this.width, this.height)
    
    fill('red');
    noStroke();
    ellipse(this.x-20, this.y-45, this.width, this.height)
    
    
    fill('hotpink');
    noStroke();
    ellipse(this.x, this.y, this.width, this.height)
    
    fill('hotpink');
    noStroke();
    ellipse(this.x+30, this.y-25, this.width, this.height)
    
    fill('hotpink');
    noStroke();
    ellipse(this.x, this.y-50, this.width, this.height)
    
    fill('hotpink');
    noStroke();
    ellipse(this.x-30, this.y-25, this.width, this.height)
    
    fill('yellow');
    noStroke();
    ellipse(this.x, this.y-23, this.width/1.5, this.height/1.5)
    
  
  
  
  }

}


Stem.prototype.step = function() {
  var choice = Math

  if (choice === 0) {
    this.x++;
  }
  if (choice === 1) {
    this.x--;
  }
  if (choice === 2) {
    this.y--;
  }
  else {
    this.y++;
  }
}



function mouseClicked() {
  stemArray.push(new Stem(mouseX,mouseY));
  fill(0)
  flowerArray.push(new Flower(mouseX,mouseY));



}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(204,255,255)
  console.log(stemArray);
  console.log(flowerArray);
  

}


function draw() {
  
  var youwillwalkdammit = function(stemArray){
  for(i = 0; i < stemArray.length; i++){
   stemArray[i].step();
   stemArray[i].renderEllipse();
 
 }
}

var youwillgrowdammit = function(flowerArray){
  for(i = 0; i < flowerArray.length; i++){
   flowerArray[i].renderEllipse();
 
 }
}
youwillgrowdammit(flowerArray)


youwillwalkdammit(stemArray)

}
