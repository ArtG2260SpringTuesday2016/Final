var oldAvg = 0;
var newAvg = 0;
var properties = [];
var Old = [];
var New = [];
var currentYear = 2014;
var age = 50;
var oldYear = currentYear - age;
var dataText = "Hover over a rectangle to see the Year Built and "
var dataText2 = "Average Energy Usage of buildings constructed in that year"

var Property = function(localWidth, localHeight) {
 this.Year = this.Year_Built;
 this.Energy = this.Site_Energy_Use;


 this.renderRect = function(x, y, w, s) {
  rect(x, y, w, this.Energy / s);
 };

 this.isMouseOnRect = function(x, y) {
  if (collidePointRect(mouseX, mouseY, x, y, this.height)) {
   dataText = "Energy Use" + this.Energy
   dataText2 = "Year Built" + this.Year
  }
 };

 this.arrangeYear = function(ar) {
  for (var i = 0; i < ar.length; i++) {
   if (ar[i].Year < oldYear) {
    append(Old, ar[i])
   } else {
    append(New, ar[i])
   }
  }
 };

 this.sum = function(ar) {
  var total = 0;
  for (var i = 0; i < ar.length; i++) {
   total += ar[i];
  }
  return total;
 };

 this.convert = function(ar) {
  var newAr = [];
  for (var i = 0; i < ar.length; i++) {
   if (ar[i].Energy != "Not Available" && ar[i].Year !== null) {
    append(newAr, ar[i])
   }
  }
  return newAr;
 };

 this.getEnergy = function(ar) {
  var newAr = [];
  for (var i = 0; i < ar.length; i++) {
   append(newAr, Number(ar[i].Energy.replace(/[*]| |,/g, "")))
  }
  return newAr;
 };

 this.getYear = function(ar) {
  var newAr = [];
  for (i = 0; i < ar.length; i++) {
   append(newAr, ar[i].Year)
  }
  return newAr;
 };

 this.sortYear = function(a, b) {
  return a.Year - b.Year;
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
 
 for (var i = 0; i < data.length; i++){
  
  oldAvg.push(this.fullConvert(Old));
  newAvg.push(this.fullConvert(New));
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