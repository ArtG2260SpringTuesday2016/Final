var Area = function(areaData){
  var areaRect = rect
  for (var i = 0; i < areaData.length; i++){
    this.AbarHeight = areaData[i].area / 150;
    this.AbarWidth = 15;
    this.Aspacing = this.AbarWidth * 2
    this.AbarX = this.Aspacing * i
    this.AbarY = 1500
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
    this.CbarY = 1500
    crimeRect(this.CbarX, this.CbarY, this.CbarWidth, -this.CbarHeight)
  }
}


var number = function(){
  var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
  for (var i = 0; i < number.length; i++){
  this.content = number[i];
  this.posX = i * 50 //how to line up with the rects?
  this.posY = 1525;
  fill(255)
  text(this.content, posX,posY)
  }
}

function setup() {
  createCanvas(2000,2000)
}

function draw() {
  number()
}





function setup(){
  createCanvas(1500,1700)
}

function draw(){
  background(0)
  number(number)
  if(mouseIsPressed){
  Area(stateArea)
  }else{
  Crime(crimeRates)
}
}