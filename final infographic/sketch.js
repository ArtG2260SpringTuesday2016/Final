
var Area = function(areaData){
  var areaRect = rect
  for (var i = 0; i < areaData.length; i++){
    this.AbarHeight = areaData[i].area / 150;
    this.AbarWidth = 15;
    this.Aspacing = this.AbarWidth * 2
    this.AbarX = this.Aspacing * i
    this.AbarY = 1700
    areaRect(this.AbarX, this.AbarY, this.AbarWidth, -this.AbarHeight)
  }
}

var Crime = function(crimeData){
  var crimeRect = rect;
  for (var i = 0; i < crimeData.length; i++){
    this.CbarHeight = crimeData[i].crimeRate / 150;
    this.CbarWidth = 15;
    this.Cspacing = this.CbarWidth * 2
    this.CbarX = this.Cspacing * i
    this.CbarY = 1700
    crimeRect(this.CbarX, this.CbarY, this.CbarWidth, -this.CbarHeight)
  }
}


var number = function(nameData){
  var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
  for (var i = 0; i < number.length; i++){
  this.content = number[i];
  this.bottomPosX = i * 30 
  this.bottomPosY = 1725;
  this.sidePosX = 1250
  this.sidePosY = i * 20
    this.nameContent = nameData[i].state
    this.marginNwT = 20
    this.posX = this.sidePosX + this.marginNwT
    this.posY = i *20
  fill(255)
  text(this.content, this.bottomPosX,this.bottomPosY)
  text(this.content,this.sidePosX,this.sidePosY)
  text(this.nameContent, this.posX, this.posY)
  }
  }


var ranking = function(popData){
for(var i = 0; i < popData.length; i++){
  this.posX = mouseX
  this.posY = 1700
  this.hight = popData[i].population * 10
  if (i * 15< this.posX && this.posX< i *30){
    rect(this.posX, this.posY, 15,-this.hight)
}
}
}



function setup(){
  createCanvas(1500,4000)
}

function draw(){
  background(0)
  ranking(population)
  number(stateArea)
  if(mouseIsPressed){
    Crime(crimeRates)
  
  }else{
    Area(stateArea)
}
}