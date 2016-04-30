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
   rect(x, 50, width / 500, this.Energy / 300000);
  } else {
   rect(x, 100, width / 500, this.Energy / 300000);
  }
 };
 
 this.renderLargeRect = function(x, x2) {
   if (this.age === "Old") {
   rect(x, 0, width / 8, this.Energy / 200000);
  } else {
   rect(x2, 0, width / 8, this.Energy / 200000);
  }
 };

 this.isMouseOnRect = function(x, y) {
  if (collidePointRect(mouseX, mouseY, x, y, this.Energy / 300000)) {
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

 this.fullConvert = function(ar) {
  avgYear(getYear(convert(ar).sort(sortYear)), getEnergy(convert(ar).sort(sortYear)))
 };

 this.render = function(x, y, s) {
  this.renderRect(x, y);
  this.isMouseOnRect(x, y);
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
 text("1964 - 2014", 75, height - 35)
 text("Before 1964", 75, height - 85)
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



 fill("Purple");
 strokeWeight(0);
 textSize(20);
 text(dataText, 0, height / 10);
 text(dataText2, 0, height / 7.5);
}