
   


var keys=[];
var walkers = [];
var shapes = false;
var Walker = function (initialX, initialY) {
 this.x = initialX;
 this.y = initialY;
 
 
 this.makeCircle = function (){
 ellipse(this.x,this.y,20,20)
}
 this.makeRect = function (){
 rect(this.x, this.y,20,20)
}
  
  this.chooseShape = function(){
    if (shapes){
     this.makeCircle()
    }
    else {
      this.makeRect()
    }
  }
}


// This extends the Walker class. It is similar
// to just including it inside of the Walker constructor function.
Walker.prototype.step = function() {
  
  if (keys[3]) {
   this.x++;
 }
 if (keys[1]) {
   this.x--;
 }
 if (keys[2]) {
   this.y++;
 }
 if (keys[0]){
   this.y--;
 }
  
  
  
 var choice = Math.floor(random(0,3))

 if (choice ===0) {
   this.x++;
 }
 if (choice === 1) {
   this.x--;
 }
 if (choice === 2) {
   this.y++;
 }
 else {
   this.y--;
 }
}

function keyPressed() {
  if (keyCode === UP_ARROW) { keys[0] = true; }
  if (keyCode === LEFT_ARROW) {keys[1] = true;}
  if (keyCode === DOWN_ARROW) {keys[2] = true;}
  if (keyCode === RIGHT_ARROW) {keys[3] = true;}
 
}

function keyReleased() {

 if (keyCode === UP_ARROW) { keys[0] = false; }
  if (keyCode === LEFT_ARROW) {keys[1] = false; }
  if (keyCode === DOWN_ARROW) {keys[2] = false; }
  if (keyCode === RIGHT_ARROW) {keys[3] = false; }
 
}


//
function mouseClicked() {
 // Hint use `push` and `new` to make instances of walkers
 // You might want to pass in mouseX and mouseY
 
  //Array.push(thing to put in the array)
  walkers.push(new Walker(mouseX,mouseY))
  debugger
  if (shapes){
    shapes = false
  }
  else if (!shapes){
    shapes = true
  }
}






function setup() {

createCanvas(windowWidth, windowHeight - 30)
}





function draw() {
 // Tell every walker to take a step
 for (i = 0; i < walkers.length;i++){
   
  
      walkers[i].chooseShape()
      walkers[i].step()
      
    }
  }




