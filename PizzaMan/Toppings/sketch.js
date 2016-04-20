var toppings = [];
var CurrentTopping;
var WholePizza;

function setup(){
  createCanvas(500,500);
  CurrentTopping = new Topping();
  WholePizza = new Pizza();
  ToppingX = mouseX;
  ToppingY = mouseY;

}

function draw(){
  background("white");
  
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
  CurrentTopping.renderPepperoni();
  CurrentTopping.renderMushroom();
  CurrentTopping.renderPineapple();

}

  
function Topping(ToppingX,ToppingY){
  this.x = ToppingX;
  this.y = ToppingY;
  
this.renderPepperoni = function(ToppingX,ToppingY){  //pepperoni
      noStroke();
      fill("#E34234");
      ellipse(ToppingX,ToppingY,20,20)
  }

this.renderMushroom = function(ToppingX, ToppingY){ //mushroom
    fill("#E9C2A6");
    ellipse(ToppingX+1,ToppingY+1,15,15)
    ellipse(ToppingX+11,ToppingY+1,15,15)
    ellipse(ToppingX+6,ToppingY,26,13)
    rect(ToppingX,ToppingY+1,12,15)
  }

this.renderPineapple= function(ToppingX,ToppingY){ //pineapple
      fill('#ECDC98')
      noStroke();
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
  
  
function mousePressed(){
 if (dist(ToppingX,ToppingY,PizzaX, PizzaY)< 90){
  toppings.push(new Topping(ToppingX,ToppingY));
    }
  }
}
}
//&& dist(ToppingX,ToppingY,PizzaX, PizzaY)< 90 = true