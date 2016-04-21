var pepperonis = [];

function setup() {
  createCanvas(500,500)
   background("white");
 // for (var i=0; i < 100; i++)
 // pepperonis[i] = new Pepperoni();
}

function mousePressed(){
  if (dist(mouseX,mouseY,150,200)< 90){
  pepperonis.push(new Pepperoni(mouseX,mouseY));
}
}

function draw() {
 
  noStroke();
  fill("#dba24a");
  ellipse(150,200,250,250);
  fill("#FFD700");
  ellipse(150,200,200,200);


 for (var i=0; i < pepperonis.length; i++){
 pepperonis[i].display();
 }
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
/*
Pizza(){
 var x= 150;
 var y=200;
  ellipse(x,y,250,250);
  ellipse(x,y,200,200);
 
  
}
*/