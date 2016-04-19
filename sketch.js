//var scaleValue = 10000
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Snowfall in inches in Boston in January from 2010-2016";

var input1, input2, button, results, error = "test error";

// Snowfall in inches in Boston, MA on each day in January over the included years (2010-2016)
function setup() {
  // snowInjan
  drawRectangleHelpers();
  createCanvas(1500, 1000)
  dataArrLength = dataArr.length;
  
  // create text box 1
  input1 = createInput('');
  input1.position(100, 460);
  input1.input(validateInputOne);
  
  input2 = createInput('');
  input2.position(100, 530);
  input2.input(validateInputTwo);

  button = createButton('compare');
  button.position(100, 580);
  button.mousePressed(compareDates);
  
}

function addLabels() {
  textSize(12)
  fill("#FFFFFF");
  // create comparison input boxes
  text("Compare Two Days", 100, 400);
  text("Day 1: (Type in a day between 1-31)", 100, 450);
  text("Day 2: (Type in a day between 1-31)", 100, 520);
  text(error, 200, 595); 
  
  fill("#BADa55");
  textSize(200)
  text("SNOW", 300, 300)
}


function calculateAvg(snowInjan) {

  var avgSnowfall = {};

  // array for loop
  for (var i = 0; i < snowInjan.length; i++) {
    // represents a dictionary for the current year 
    var currentYear = snowInjan[i];
    // dictionary for loops
    for (var key in currentYear) {
      // key == "1" or "2" or "3", currentYear[key] == 0.006   (snowfall # in inches)
      // check if key already exists in dictionary 
      // -- if yes then update the value to be the new avg
      // if no then add the new key and value
      if (key in avgSnowfall) {
        avgSnowfall[key].push(currentYear[key]);

        // dict = {"1" : [6, 7, 8, 9, 10],
        //          "2" : [.006, .7, .4]}
      } else {
        // dict = {"1" : [6]}
        avgSnowfall[key] = [currentYear[key]];
      }
    }
  }

  // go through our new dictionary
  for (var key in avgSnowfall) {
    var valuesInArray = avgSnowfall[key];
    //  console.log('key: ' + key + ' -- ' + valuesInArray);
    var divisor = valuesInArray.length;
    var dividend = 0;
    // go through the array and sum up each element
    for (var i = 0; i < valuesInArray.length; i++) {
      if (valuesInArray[i] != -9999.000) {
        dividend += valuesInArray[i];
      }
    }

    // get the average for this day
    var avg = dividend / divisor;

    // update the value in the key value pair of the dictionary
    avgSnowfall[key] = avg;
  }
  return avgSnowfall;
}

var rectangle = function(day, snowfallValue) {
  this.day = day;
  this.snowfallValue = snowfallValue;
  this.height = (this.snowfallValue * 100) + 3;
  this.yCoord = 950 - this.height;
  this.xCoord = (day * 25) + 250;
  this.width = 15;

  this.renderRect = function() {
    rect(this.xCoord, this.yCoord, this.width, this.height);
    text(day, this.xCoord, 980);
  };
  
  this.colorSelectedRectangle = function() {
    fill("#FFFFFF");
    this.renderRect();
  }

  this.isMouseCloseToRect = function(posnX, posnY) {
    if (collidePointRect(posnX, posnY, this.xCoord, this.yCoord, this.width, this.height)) {
      dataValueText = this.snowfallValue
      this.colorSelectedRectangle();
    }
  }

  this.render = function() {
    this.renderRect()
    this.isMouseCloseToRect(mouseX, mouseY)
  }
}


function drawRectangleHelpers() {

  var avgSnowfall = calculateAvg(snowInJanuary);
  //   {
  //    "1" : .0056,
  //    "2" : .763, ...
  //  }

  for (var key in avgSnowfall) {
    var day = key;
    var avgValue = avgSnowfall[key];

    dataArr.push(new rectangle(day, avgValue));
    //drawRectangle(day, avgValue);
  }
}

function validateInputOne() {
  // check the values in the text boxes
  var value = input1.value();
  
  if(value =="") {
    error = "";
    text(error, 200, 595);
    // TODO disable the button
    
    return;
  }
  
  // check that it is a valid number 
  if (isNaN(value) || value < 1 || value > 31) {
    console.log("invalid");
    error = "Please only enter numbers between 1-31.";
    text(error, 200, 595);
    
    // TODO disable the button
    
    return;
  }
  
  error = "";
  text(error, 200, 595);
  // TODO enable the button
  console.log("valid");
}

function validateInputTwo() {
  // check the values in the text boxes
  var value = input2.value();
  
  if(value =="") {
    error = "";
    text(error, 200, 595);
    // TODO disable the button
    
    return;
  }
  
  // check that it is a valid number 
  if (isNaN(value) || value < 1 || value > 31) {
    console.log("invalid");
    error = "Please only enter numbers between 1-31.";
    text(error, 200, 595);
    
    // TODO disable the button
    
    return;
  }
  
  error = "";
  text(error, 200, 595);  
  // TODO enable the button
  console.log("valid");
}

function compareDates() {
  // add functionality to add subtract average etc...
  
  // Average of the two days
  var day1 = input1.value();
  var day2 = input2.value();
  
  // access the rectangle class variable for each day
  var dataForDayOne = dataArr[day1-1];
  var dataForDayTwo = dataArr[day2-1];
  
  // perform the calculation
  var avg = ((dataForDayOne.snowfallValue) + (dataForDayTwo.snowfallValue))/2;
  
  
  error="Average for the 2 days: " + avg;
  text(error, 200, 595);
  
  
  console.log("will add functionality soon")
}


function draw(){ 
  background(0);
  
  addLabels();
  
  
  fill("#BADa55");
  textSize(200)
  text("SNOW", 300, 300)
  textSize(13)
  
  for (var i = 0; i < dataArrLength; i++) {
    dataArr[i].render();
    fill("#BADa55");
  }
  
  text(dataValueText, 500, 500);
  
}