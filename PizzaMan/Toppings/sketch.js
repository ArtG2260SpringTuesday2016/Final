var CurrentTopping;
var toppings = [];
var roni = [];
var shroom = [];
var WholePizza;
toppings.push(roni,shroom);

function setup(){
  createCanvas(500,500);
  background("white");
  WholePizza = new Pizza();
}

function draw(){
  PizzaX = 150;
  PizzaY = 200;
  roniX = mouseX;
  roniY = mouseY;
  shroomX = mouseX;
  shroomY = mouseY;
  


  noStroke();
  fill('#ECDC98')
  triangle(20,30,0,40,20, 50);
  
  noStroke();
  fill("#E34234");
  ellipse(10,10,20,20)
  
  fill("#E9C2A6");
  ellipse(50,50,15,15)
  ellipse(60,50,15,15)
  ellipse(55,49,26,13)
  rect(49,50,12,15)

  WholePizza.renderPizza(150,200);

check = collidePointRect(roniX,roniY,375,50,60,60);
	if(check){ //change color!
    fill("#E34234")
	  for (var i=0; i < roni.length; i++){
      roni[i].renderPepperoni();
	  }
	  }else {
	   fill("#ccb2ff")
}
rect(375,50,60,60);


check = collidePointRect(shroomX,shroomY,375,150,60,60);
	if(check){ //change color!
    fill("#E9C2A6");
	  for (var j=0; j < shroom.length; j++){
      shroom[j].renderMushroom();
}
}else {
  fill("#ccb2ff")
}
rect(375,150,60,60);
  

}


function mousePressed(){
        if (dist(roniX, roniY, PizzaX, PizzaY) < 90){
        roni.push(new Topping(roniX,roniY));
        } if (dist(shroomX, shroomY, PizzaX, PizzaY) < 90){
        shroom.push(new Topping(shroomX,shroomY));
}
      }



function Topping(x,y){
  this.x = x;
  this.y = y;

  this.renderPepperoni = function(roniX,roniY){  //pepperoni
      noStroke();
      fill("#E34234");
      ellipse(this.x,this.y,20,20)
  }

  this.renderMushroom = function(shroomX,shroomY){ //mushroom
    fill("#E9C2A6");
    ellipse(this.x+1,this.y+1,15,15)
    ellipse(this.x+11,this.y+1,15,15)
    ellipse(this.x+6,this.y,26,13)
    rect(this.x,this.y+1,12,15)
  }

  this.renderPineapple= function(ToppingX,ToppingY){ //pineapple
      fill('#ECDC98')
      triangle(ToppingX+20, ToppingY ,ToppingX, ToppingY+10, ToppingX+20, ToppingY+20);
  }    
}

function Pizza(PizzaX,PizzaY){
  this.x = PizzaX;
  this.y = PizzaY;

  this.renderPizza= function(PizzaX,PizzaY){
  noStroke();
  fill("#dba24a");
  ellipse(PizzaX,PizzaY,250,250);
  fill("#FFD700");
  ellipse(PizzaX,PizzaY,200,200);
    }
  }

//&& dist(ToppingX,ToppingY,PizzaX, PizzaY)< 90 = true