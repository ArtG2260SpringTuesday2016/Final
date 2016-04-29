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
var getHeight = "Hover over each rectangle to show the energy usage for that year";
var getYear = "";

var Property = function (xposn, yposn, sizeY){
 this.x = xposn;
 this.y = yposn;
 this.width = 3;
 this.height = sizeY;
 
 this.renderProperty = function(col) {
  fill(col);
  rect(this.x, this.y, this.width, this.height)
 }
 this.showSize = function(x) {
  if (collidePointRect(mouseX, mouseY, x, height - this.height)) {
   getHeight = this.height;
  }
 }
 this.render = function (iterator) {
  
 }
 

}
var currentYear = 2016;
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
  for (i = 0; i < ar.length; i++) {
    if (ar[i].Year_Built < oldYear) {
      append(Old, ar[i])
    } else {
      append(New, ar[i])
    }
  }
}

var sum = function(ar) {
  var total = 0;
  for (i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
}

var convert = function(ar) {
    var newAr = [];
    for (i = 0; i < ar.length; i++) {
      if (ar[i].Site_Energy_Use != "Not Available" && ar[i].Year_Built !== null) {
        append(newAr, ar[i])
      }
    }
    return newAr;
  }
  
  var getEnergy = function(ar){
   newAr = [];
   for (i = 0; i < ar.length; i++) {
    append(newAr, Number(ar[i].Site_Energy_Use.replace(/[*]| |,/g, "")))
   }
   return newAr;
  }
  
  var sortYear = function(a, b) {
   return a.Year_Built - b.Year_Built;
   }
  



//This function takes in an array of Site_Energy_Use
//and converts it into an array of numbers
//omitting any that appear as "Not Available"

function setup() {
  createCanvas(600, 600);
  background(200, 255, 255);

  
 years(data);
 Old = convert(Old);
 New = convert(New);
console.log(Old.sort(sortYear));
  var OldAvg = sum(getEnergy(Old)) / Old.length;
  var NewAvg = sum(getEnergy(New)) / New.length;
  stroke(30, 0 ,30);
  var resize = 300000
  textSize(25);
  fill(200, 0, 150);
  strokeWeight(3);
  
  var makeEnergy = function(avg, size, xposn, yposn) {
   rect(width/xposn, yposn - (avg / size), width / 4, avg / size)
  }
  
  var oldenergy = makeEnergy(OldAvg, resize, 1.75, 500);
  oldenergy;
  
  fill(100, 30, 250)
  strokeWeight(2);
  var newenergy = makeEnergy(NewAvg, resize, 5, 500);
  newenergy;

  fill("Blue");
  stroke("Black")
  strokeWeight(0)
  text(round(OldAvg), width / 1.65, height * .9);
  text(round(NewAvg), width / 4.5, height * .9);
  
  textSize(50);
  fill("White")
  strokeWeight(5);
  stroke("black");
  text("Average Energy Use", width / 7, height / 6);
  
  fill("Black")
  rect(0, height * .835, width, 0);
 
   //Compare old:energy to new:energy; two functions; one with all old energies,
  //one with all new energies
  

}