var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Snowfall in inches in Boston in January from 2010-2016";

var input1, input2, button, results, error = "";


// Rectangle Class
var Rectangle = function(day, snowfallValue) {
  
  this.day = day;
  this.snowfallValue = snowfallValue;
  this.height = (this.snowfallValue * 100) + 3;
  this.yCoord = 950 - this.height;
  this.xCoord = (day * 25) + 250;
  this.width = 15;

  this.renderRect = function() {
    rect(this.xCoord, this.yCoord, this.width, this.height);
    text(day, this.xCoord, 980);
  }
  
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

// Textbox Class
var TextBox = function(title) {
  this.box = createInput(title);
  this.box.isValid = false;
  
  this.createAndPositionInput = function(xPos, yPos) {
    this.box.position(xPos, yPos);
    this.box.input(validateNumberInputOnManualChange);
  }
  
  this.fillNumber = function(rectangle) {
    this.box.value(rectangle.day);
  }
  
  // on input change validation function - internal to the class
  validateNumberInputOnManualChange = function() {
   // check the values in the text boxes
    if (this.value() === "") {
      error = "";
      text(error, 250, 595);
      this.isValid = false;
    }
    // check that it is a valid number 
    else if (isNaN(this.value()) || this.value() < 1 || this.value() > 31) {
      console.log("invalid");
      error = "Please only enter numbers between 1-31.";
      text(error, 250, 595);
      this.isValid = false;
    }
    else {
      // Valid
      console.log("valid");
      error = "";
      text(error, 250, 595);
      this.isValid = true;
    }
  }
  
  // validation function that can be accessed by class objects
  this.validateNumberInput = function() {
   // check the values in the text boxes
    if (this.box.value() === "") {
      error = "";
      text(error, 250, 595);
      this.box.isValid = false;
    }
    // check that it is a valid number 
    else if (isNaN(this.box.value()) || this.box.value() < 1 || this.box.value() > 31) {
      console.log("invalid");
      error = "Please only enter numbers between 1-31.";
      text(error, 250, 595);
      this.box.isValid = false;
    }
    else {
      // Valid
      console.log("valid");
      error = "";
      text(error, 250, 595);
      this.box.isValid = true;
    }
  }
}

// Button Class
var Button = function(title) {
  
  this.button = createButton(title);
  
  this.positionButton= function(xPos, yPos) {
    this.button.position(xPos, yPos);
    this.button.mousePressed(compareDates);
  }
  
  compareDates = function() {
    // Average of the two days
    var day1 = input1.box.value();
    var day2 = input2.box.value();
  
    // access the rectangle class variable for each day
    var dayOneRectangle = dataArr[day1-1];
    var dayTwoRectangle = dataArr[day2-1];
  
  
    // pass rectangle class object into the button class
    calculateAvgBetweenTwoRectangles(dayOneRectangle, dayTwoRectangle);
  }
  
  
  // Function in the Button class that takes in two Rectangle class objects as parameters and 
  // calculates the avg snowfall between the two days associated with the given rectangle objects
  calculateAvgBetweenTwoRectangles = function(rectangleOne, rectangleTwo) {
  
    // perform the calculation
    var avg = ((rectangleOne.snowfallValue) + (rectangleTwo.snowfallValue))/2;
  
    error="Avg Snowfall for Jan " + rectangleOne.day + " & Jan " + rectangleTwo.day + " is  " + avg + "   inches";
    text(error, 250, 595);
  }
  
  this.show = function() {
    this.button.show();
  }
  
  this.hide = function() {
    this.button.hide();
  }  
}

// Snowfall in inches in Boston, MA on each day in January over the included years (2010-2016)
function setup() {
  drawRectangleHelpers();
  createCanvas(1500, 1000)
  dataArrLength = dataArr.length;
  
  // create text box class instances
  input1 = new TextBox("");
  input1.createAndPositionInput(100, 460);
  
  input2 = new TextBox("");
  input2.createAndPositionInput(100, 530);

  // create button class instance object
  button1 = new Button("Calculate Average");
  button1.positionButton(100, 580);
  button1.hide();
}


function draw(){ 
  background(0);
  
  addLabels();
  
  // show or hide button based on valid input in the text box class instances
  if(input1.box.isValid && input2.box.isValid) {
    button1.show();
  } else {
    button1.hide();
  }
  
  fill("#BADa55");
  textSize(200)
  text("SNOW", 300, 300)
  textSize(13)
  
  for (var i = 0; i < dataArrLength; i++) {
    dataArr[i].render();
    fill("#BADa55");
  }
  
  text(dataValueText + "  inches", 500, 500);
  
}


function mouseClicked() {
  for (var i = 0; i < dataArrLength; i++) {
    var rect = dataArr[i];
    
    // check if we have clicked in a rectangle
    if (collidePointRect(mouseX, mouseY, rect.xCoord, rect.yCoord, rect.width, rect.height)) {
      
      // fill text box with clicked rectangle index
      // fill box 1 if it is not filled with a valid number
      if (!input1.box.isValid) {
        input1.fillNumber(rect);
        input1.validateNumberInput();
      } 
      // otherwise if box two is not valid, fill it
      else if (!input2.box.isValid) {
        input2.fillNumber(rect);
        input2.validateNumberInput();
      }
      // otherwise just fill box 1
      else {
        input1.fillNumber(rect);
        input1.validateNumberInput();
      }
    }
  }
}