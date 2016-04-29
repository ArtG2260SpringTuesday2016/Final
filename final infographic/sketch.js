
var AC = function(dataset){
  var areaRect = rect
  var crimeRect = rect
  for (var i = 0; i < dataset.length; i++){
    this.AbarHeight = dataset[i].area / 150;
    this.CbarHeight = dataset[i].crimeRate /150;
    this.barWidth = 15;
    this.spacing = this.barWidth * 2
    this.barX = this.spacing * i
    this.barY = 1700
    if(mouseIsPressed){
    fill(255,255,51)
    crimeRect(this.barX, this.barY,this.barWidth, -this.CbarHeight)
  }else{
    fill(102,178,255)
    areaRect(this.barX, this.barY, this.barWidth, -this.AbarHeight)
  }
}
}



var num = function(nameData){
  var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
  for (var i = 0; i < number.length; i++){
  this.content = number[i];
  this.bottomPosX = i * 30 
  this.bottomPosY = 1725;
  this.sidePosX = 1250
  this.sideiniY = i * 20 
  this.sideAdjuest = 50
  this.sidePosY = this.sideiniY + this.sideAdjuest
    this.nameContent = nameData[i].state
    this.marginNwT = 20
    this.posX = this.sidePosX + this.marginNwT 
    this.posY = this.sidePosY
  fill(255)
  text(this.content, this.bottomPosX,this.bottomPosY)
  text(this.content,this.sidePosX, this.sidePosY)
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

var legend = function(){
  this.textPosX = 800
  this.textPosY = 100
  this.recPosX = this.textPosX - 50
  this.rectPosY = this.textPosY
  textSize(50)
  if(mouseIsPressed){
  text("Crime Rate", this.textPosX, this.textPosY)
}else{
  fill(102,178,255)
  text("Area Size", this.textPosX, this.textPosY)
}
}


function setup(){
  createCanvas(1500,2000)
    
}

function draw(){
  background(0)
  num(stateArea)
  ranking(population)
  AC(AreaCrime)
  legend()
}