//data is an array of objects consisting of 
//A string "Address"
//A string "EnergyStar_Certified"
//A string EnergyStar_Score
//An integer GHG_Emissions
//A string GHG_Intensity
//An integer Gross_Sq_Ft
//An unknown OnSite_Solar
//A string Owner_Submitted_Info
//A string Owner_Submitted_Link
//A string Percent_Electr
//A string Percent_Gas
//A string Percent_Steam
//A string Property_Name
//A string Property_Type
//A string Property_Uses
//An integer Site_EUI
//A string Site_Energy_Use
//A string Tax_Parcel
//An integer Water_Intensity
//An integer Year_Built
//A string ZIP

//For the purposes of this program only 
//Site_Energy_Use and Year_Built will be used
//in order to compare amount of energy used to the age of the building
var getData = "Hover over each rectangle to show the energy usage and year.";


var Property = function(xposn, yposn, sizeY) {
  this.y = yposn;
  this.width = width / 20;
  this.height = sizeY;

  this.renderProperty = function(x) {
   fill("Black");
   rect(x, this.y, this.width, this.height)
  }
  this.showSize = function(x) {
   if (collidePointRect(mouseX, mouseY, x, height - this.height)) {
    getHeight = this.height;
   }
  }
  this.render = function(iterator) {
   this.RenderProperty(iterator)
   this.showSize(iterator)
  }


 }
 //I know the year isn't 2014 but that is when the data ends
var currentYear = 2014;
var age = 50;
var oldYear = currentYear - age;
//These variables will hold the information 
//for either new or old buildings
var Old = [];
var New = [];
//This function takes in data and 
//seperates the Site_Energy_Use based on
// the Year_Built:
// Old (older than 50 years) or
// New (equal or less than 50 years old)

var years = function(ar) {
 for (var i = 0; i < ar.length; i++) {
  if (ar[i].Year_Built < oldYear) {
   append(Old, ar[i])
  } else {
   append(New, ar[i])
  }
 }
}

var sum = function(ar) {
 var total = 0;
 for (var i = 0; i < ar.length; i++) {
  total += ar[i];
 }
 return total;
}

var convert = function(ar) {
 var newAr = [];
 for (var i = 0; i < ar.length; i++) {
  if (ar[i].Site_Energy_Use != "Not Available" && ar[i].Year_Built !== null) {
   append(newAr, ar[i])
  }
 }
 return newAr;
}

var getEnergy = function(ar) {
 var newAr = [];
 for (var i = 0; i < ar.length; i++) {
  append(newAr, Number(ar[i].Site_Energy_Use.replace(/[*]| |,/g, "")))
 }
 return newAr;
}

var getYear = function(ar) {
 var newAr = [];
 for (i = 0; i < ar.length; i++) {
  append(newAr, ar[i].Year_Built)
 }
 return newAr;
}

var sortYear = function(a, b) {
 return a.Year_Built - b.Year_Built;
}

//Due to some problems on my end I am splitting my initial
//data into two arrays; one holding Year_Built and one holding
//Site_Energy_Use which is why this function needs two arrays
var avgYear = function(arYear, arEnergy) {
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
}




//This function takes in an array of Site_Energy_Use
//and converts it into an array of numbers
//omitting any that appear as "Not Available"

function setup() {
 createCanvas(1200, 750);
 background(200, 255, 255);

 years(data);
 Old = convert(Old);
 New = convert(New);

 Old.sort(sortYear);
 New.sort(sortYear);

 OldYears = getYear(Old);
 OldEnergy = getEnergy(Old);
 NewYears = getYear(New);
 NewEnergy = getEnergy(New);




 var OldAvg = sum(getEnergy(Old)) / Old.length;
 var NewAvg = sum(getEnergy(New)) / New.length;

 stroke(30, 0, 30);
 var resize = 200000
 textSize(25);
 fill(200, 0, 150);
 strokeWeight(3);


 var makeEnergy = function(avg, size, xposn, yposn) {
  rect(width / xposn, yposn - (avg / size), width / 5, avg / size)
 }

 var oldenergy = makeEnergy(OldAvg, resize, 1.85, 625);
 oldenergy;

 fill(100, 30, 250)
 strokeWeight(2);
 var newenergy = makeEnergy(NewAvg, resize, 1.3, 625);
 newenergy;

 fill("Blue");
 stroke("Black")
 strokeWeight(0)
 text(round(OldAvg), width / 1.7, height * .9);
 text(round(NewAvg), width / 1.23, height * .9);

 textSize(50);
 fill("White")
 strokeWeight(5);
 stroke("black");
 text("Average Energy Use", width / 1.75, height / 8);

 fill("Black")
 rect(0, height * .835, width, 0);
 rect(0, height * .15, width, 0);
 rect(width / 2, height * .15, 0, height * .68);
 rect(0, height / 2, width / 2, 0);


 //Compare old:energy to new:energy; two functions; one with all old energies,
 //one with all new energies

}

function draw() {
 var resize = 6000000
 var graph = function(ar, h) {
  for (var i = 0; i < ar.length; i++)
   rect(i * 6.4, h - (ar[i][1] / resize), width / 250, ar[i][1] / resize)
 }
 convert(Old);
 convert(New);
 Old.sort(sortYear);
 New.sort(sortYear);

 OldYears = getYear(Old);
 OldEnergy = getEnergy(Old);
 NewYears = getYear(New);
 NewEnergy = getEnergy(New);
 var OldAvg = avgYear(OldYears, OldEnergy);
 var NewAvg = avgYear(NewYears, NewEnergy);

strokeWeight(0);

 fill(200, 0, 150);
 graph(OldAvg, height / 1.203);

 fill(100, 30, 250);
 graph(NewAvg, height / 2.01);




 fill("Purple");
 strokeWeight(0);
 textSize(20);
 text(getData, 0, height / 8);
}