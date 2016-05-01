//Creates the sum of all members of an array of numbers
var sum = function(ar) {
 var total = 0;
 for (var i = 0; i < ar.length; i++) {
  total += ar[i];
 }
 return total;
};

var sortYear = function(a, b) {
 return a.Year - b.Year;
};

var size1 = 50000000
var size2 = 30000000


var oldAvg = 0;
var newAvg = 0;
var properties = [];
var currentYear = 2014;
var age = 50;
var oldYear = currentYear - age;
var dataText = "Hover over a rectangle to see the Year Built and "
var dataText2 = "Average Energy Usage of buildings constructed in that year"

var Property = function(aData) {
 this.Year = aData.Year_Built;
 var siteEnergyUse = aData.Site_Energy_Use;
 this.Energy = Number(siteEnergyUse.replace(/[*]| |,/g, ""))

 if (this.Year < oldYear) {
  this.age = "Old";
 } else {
  this.age = "New"
 }

 this.renderRect = function(x) {
  if (this.age === "Old") {
   fill(200, 0, 150);
   rect(x, 373 - this.Energy / size1, width / 500, this.Energy / size1);
  } else {
   fill(100, 30, 250);
   rect(x, 625 - this.Energy / size1, width / 500, this.Energy / size1);
  }
 };

 this.renderLargeRect = function() {
  if (this.age === "Old") {
   fill(200, 0, 150);
   rect(width / 1.75, 625 - this.Energy / size2, width / 8, this.Energy / size2);
  } else {
   fill(100, 30, 250);
   rect(width / 1.35, 625 - this.Energy / size2, width / 8, this.Energy / size2);
  }
 };

 this.isMouseOnRect = function() {
  if (collidePointRect(mouseX, mouseY, 500, 500, 500)) {
   dataText = "Energy Use: " + this.Energy
   dataText2 = "Year Built: " + this.Year
  }
 };



 this.realData = function() {
  return (this.Energy != "Not Available" && this.Year !== null);
 };

 this.avgYear = function(arYear, arEnergy) {
  var newAr = [];
  var arAvg = [];
  for (var i = 0; i < (arYear.length - 1); i++) {
   append(newAr, arEnergy[i])
   if (arYear[i] !== arYear[i + 1]) {
    append(arAvg, [arYear[i], round(sum(newAr) / newAr.length)])
    newAr = [];
   }
  }
  append(newAr, arEnergy[arYear.length - 1])
  append(arAvg, [arYear[i], round(sum(newAr) / newAr.length)])

  return arAvg;
 };

 this.render = function(x) {
  this.renderRect(x);
  this.isMouseOnRect();
  this.renderLargeRect()
 };
}



function setup() {
 createCanvas(1200, 750);
 background(200, 255, 255);
 textSize(50);
 fill("White")
 strokeWeight(5);
 stroke("black");
 text("Average Energy Use", width / 1.75, height / 8);
 textSize(20);
 text(oldYear + " - " + currentYear, 75, height - 35)
 text("Before " + oldYear, 75, height - 85)
 fill("Black")
 rect(0, height * .835, width, 0);
 rect(0, height * .15, width, 0);
 rect(width / 2, height * .15, 0, height * .68);
 rect(0, height / 2, width / 2, 0);

 for (var i = 0; i < data.length; i++) {
  var newProp = new Property(data[i]);
  if (newProp.realData()) {
   properties.push(newProp)
  }
  properties.sort(sortYear);
 }


 strokeWeight(0);
 fill(200, 0, 150);
 rect(25, height - 100, 20, 20);
 fill(100, 30, 250);
 rect(25, height - 50, 20, 20);
 
}

function draw() {
 strokeWeight(0);
 
var rendering = function() {
 var newPlacement = 0;
 for (var i = 0; i < properties.length; i++) {
  if (properties[i].age === "Old"){
   properties[i].render(i * .777);
  }
  else {
   newPlacement++
   properties[i].render(newPlacement * .777);
  }
 }
}
rendering();




fill("Purple");
 strokeWeight(0);
 textSize(20);
 text(dataText, 0, height / 10);
 text(dataText2, 0, height / 7.5);

}