var buttonP;
var pepperonis = [];
var xPos = 250;
var yPos = 200;
var lilR = 200;
var bigR = 250

this.distanceToMouse= function(){
  return dist(mouseX, mouseY, 150, 200);
}

function setup() {
  createCanvas(500,500)
   background("white");
  
  for (var i=0; i < 100; i++)
  pepperonis[i] = new Pepperoni();

}

function draw() {
 
  noStroke();
  fill("#dba24a");
  ellipse(xPos,yPos,bigR,bigR);
  fill("#FFD700");
  ellipse(xPos,yPos,lilR,lilR);

if (mouseIsPressed) {
  if (mouseButton == LEFT)
      if (mouseIsPressed && (dist(mouseX,mouseY,xPos,yPos)< (lilR/2)-10)){
      pepperonis.push(new Pepperoni(mouseX,mouseY));
      }
    if (mouseButton == RIGHT)
    fill('black')
      rect(10,10,10,10);
}
}


 for (var i=0; i < pepperonis.length; i++){
 pepperonis[i].display();
 }


function Pepperoni(x,y){
  this.x = x;
  this.y = y;
  
  this.display= function(){
    noStroke();
    fill("#E34234");
    ellipse(this.x,this.y, 20,20)
  }
}
