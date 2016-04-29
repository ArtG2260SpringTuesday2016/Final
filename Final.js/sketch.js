var winnerText = " ";
var pizzaHut = " ";
var dominos = " ";
var hit = false;

function setup() {
  createCanvas(1275,600);
}


function draw() {
background(235,255,255);

  var makeBoxes = function(statePositions){
  for (var i = 0; i < statePositions.length; i++){
    strokeWeight(1);
    fill(300);
    rect(statePositions[i].xPos, statePositions[i].yPos, 100, 25)
   }
  }
  makeBoxes(statePositions);
  
  var makeStates = function(pizzaData){
  for (var i = 0; i < pizzaData.length && i < statePositions.length; i++){
    textAlign(CENTER);
    textSize(12);
    fill(000);
    text(pizzaData[i].State, statePositions[i].xPos, statePositions[i].yPos+5, 100, 25)
   }
 }
 makeStates(pizzaData);
 
 fill(300);
 rect(650,400,500,150)
 
 fill(153,0,0);
 textSize(50);
 text(winnerText,650,415,500,150)
 textSize(20);
 text(pizzaHut,650,500,250,50)
 text(dominos,900,500,250,50)
 
 fill(000);
 textSize(50);
 text("Pizza Hut vs. Domino's Pizza",0,10,1275,600);
 
 textSize(30);
 text("Hover over each state to find out whether they have more Pizza Huts or more Domino's!",25,400,500,500)

var pizzaMouse = function(){
  strokeWeight(0);
  fill(150,75,0);
  ellipse(mouseX,mouseY,30,30);
  fill(243,215,32);
  ellipse(mouseX,mouseY,22,22);
  fill(153,0,0);
  ellipse(mouseX-6,mouseY+2,4,4);
  ellipse(mouseX+7,mouseY-5,4,4);
  ellipse(mouseX-1,mouseY-6,4,4);
  ellipse(mouseX+5,mouseY+3,4,4);
  ellipse(mouseX,mouseY+6,4,4)
}
pizzaMouse();

var whichWins = function(pizzaData){
 for (var i = 0; i < pizzaData.length; i++){
  if (pizzaData[i].PizzaHuts > pizzaData[i].Dominos){
    winnerText = "Pizza Hut";
  }
  else if (pizzaData[i].PizzaHuts < pizzaData[i].Dominos){
    winnerText = "Dominos";
  }
  else {
    winnerText = " ";
  }
 }
}

var isPizzaOnRect = function(pizzaData,statePositions){ 
 for (var i = 0; i < statePositions.length && i < pizzaData.length; i++){
  hit = collideRectCircle(statePositions[i].xPos, statePositions[i].yPos, 100, 25,mouseX,mouseY,30,30);
  if (hit){
    pizzaHut = pizzaData[i].PizzaHuts;
    dominos = pizzaData[i].Dominos;
    whichWins(pizzaData);
    }
  }
  isPizzaOnRect(pizzaData, statePositions);
 }
 

  
}