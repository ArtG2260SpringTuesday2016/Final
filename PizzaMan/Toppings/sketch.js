var  currentTopping=this.toppingType;
toppings = [];
roni = [];
shroom = [];
olive = [];
var wholePizza;


function setup(){
  createCanvas(500,500);
  background("white");
  WholePizza = new Pizza();
  
}

function draw(){
  PizzaX = 150;
  PizzaY = 200;


  WholePizza.renderPizza(150,200);
  

      
checkRoni = collidePointRect(mouseX,mouseY,375,50,60,60);
	if(checkRoni){ //change color!
    currentTopping="pepperoni"
    fill("#E34234");
    	for (var i=0; i < roni.length; i++){
      roni[i].renderPepperoni();
    	}
	  }else if(checkRoni===false){
	     fill("#ccb2ff");
	     for (var i=0; i < roni.length; i++){
      roni[i].renderPepperoni();
    	}
	  
   }

rect(375,50,60,60);

checkShroom = collidePointRect(mouseX,mouseY,375,150,60,60);
	if(checkShroom){//change color!
	currentTopping="mushroom"
    fill("#E9C2A6");
	  for (var j=0; j < shroom.length; j++){
      shroom[j].renderMushroom();
  }
  }else {
  fill("#ccb2ff");
  	  for (var j=0; j < shroom.length; j++){
      shroom[j].renderMushroom();
  	  }
}

rect(375,150,60,60);

checkOlive = collidePointRect(mouseX,mouseY,375,250,60,60);
	if(checkOlive){ //change color!
		currentTopping="olive"
    fill("#000000");
	  for (var q=0; q < olive.length; q++){
      olive[q].renderOlive();
}
}else {
  fill("#ccb2ff");
    for (var q=0; q < olive.length; q++){
      olive[q].renderOlive();
    }
}

noStroke();
rect(375,250,60,60);
  
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
