var  currentTopping=this.toppingType;
toppings = [];
roni = [];
shroom = [];
olive = [];
var WholePizza;




function setup(){
  createCanvas(500,500);
  background("white");
  WholePizza = new Pizza();

}

function draw(){
  PizzaX = 150;
  PizzaY = 200;

  WholePizza.renderPizza(150,200);
      
check = collidePointRect(mouseX,mouseY,375,50,65,60);
	if(check){ //change color!
    currentTopping="pepperoni"

    	for (var i=0; i < roni.length; i++){
      roni[i].renderPepperoni();
    	}
	  }else{

	     for (var i=0; i < roni.length; i++){
      roni[i].renderPepperoni();
    	}
	  
   }

fill("pink");
rect(375,50,65,60);

check = collidePointRect(mouseX,mouseY,375,150,65,60);
	if(check){//change color!

	currentTopping="mushroom"
	  for (var j=0; j < shroom.length; j++){
      shroom[j].renderMushroom();
      
  }
  }else {
  	  for (var j=0; j < shroom.length; j++){
      shroom[j].renderMushroom();
  	  }
}

 fill("pink");
rect(375,150,65,60);

check = collidePointRect(mouseX,mouseY,375,250,65,60);
	if(check){ //change color!
		currentTopping="olive"

	  for (var q=0; q < olive.length; q++){
      olive[q].renderOlive();
}
}else {
    for (var q=0; q < olive.length; q++){
      olive[q].renderOlive();
    }
}

fill("pink");
noStroke();
rect(375,250,65,60);

fill("black");
text("pepperoni",378,100);
text("mushrooms",375,200);
text("olives",390,300);

}

function mousePressed(){
       if (currentTopping==="pepperoni"){
         if (dist(mouseX, mouseY, PizzaX, PizzaY) < 90) {
        roni.push(new Topping(mouseX,mouseY));
      }
      } else if (currentTopping==="mushroom"){
        if (dist(mouseX, mouseY, PizzaX, PizzaY) < 90){
        shroom.push(new Topping(mouseX,mouseY));
        }
      }else if (currentTopping==="olive"){
        if (dist(mouseX, mouseY, PizzaX, PizzaY) < 90){
        olive.push(new Topping(mouseX,mouseY));
        }
      }

}

function Topping(x,y){
  this.x = x;
  this.y = y;
  this.toppingType = currentTopping;
  
  this.renderPepperoni = function(mouseX,mouseY){  //pepperoni
      noStroke();
      fill("#E34234");
      ellipse(this.x,this.y,20,20);
  }

  this.renderMushroom = function(mouseX,mouseY){ //mushroom
    fill("#E9C2A6");
    ellipse(this.x+1,this.y+1,15,15)
    ellipse(this.x+11,this.y+1,15,15)
    ellipse(this.x+6,this.y,26,13)
    rect(this.x,this.y+1,12,15)
  }

  this.renderOlive= function(mouseX,mouseY){ //pineapple
      noFill();
      stroke('black');
      strokeWeight(4);
      ellipse(this.x,this.y,10,10);
  }    
  
  this.renderThisTopping = function(){
    if (this.toppingType === 'pepperoni'){
    this.renderPepperoni();
  }
  else if (this.toppingType === 'mushroom') {
  this.renderMushroom();
  } 
  else if (this.toppingType === "olive") {
    this.renderOlive();
    }
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
  
  for (var i=0; i < roni.length; i++){
      roni[i].renderPepperoni();
}
