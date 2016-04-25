function calculateAvg(snowInjan) {

  var avgSnowfall = {};
  var key, i; 
  
  // array for loop
  for (i = 0; i < snowInjan.length; i++) {
    // represents a dictionary for the current year 
    var currentYear = snowInjan[i];
    // dictionary for loops
    for (key in currentYear) {
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
  for (key in avgSnowfall) {
    var valuesInArray = avgSnowfall[key];
    //  console.log('key: ' + key + ' -- ' + valuesInArray);
    var divisor = valuesInArray.length;
    var dividend = 0;
    // go through the array and sum up each element
    for (i = 0; i < valuesInArray.length; i++) {
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


function drawRectangleHelpers() {

  var avgSnowfall = calculateAvg(snowInJanuary);
  //   {
  //    "1" : .0056,
  //    "2" : .763, ...
  //  }

  for (var key in avgSnowfall) {
    var day = key;
    var avgValue = avgSnowfall[key];

    dataArr.push(new Rectangle(day, avgValue));
    //drawRectangle(day, avgValue);
  }
}


// Redraw labels after adding a background
function addLabels() {
  textSize(15);
  fill("#BADa55");
  // create comparison input boxes
  text("Calculate the Average Snowfall on Two Days", 100, 415);
  textSize(13);
  fill("#FFFFFF");  
  text("Day 1: (Type in a day between 1-31)", 100, 450);
  text("Day 2: (Type in a day between 1-31)", 100, 520);
  text(error, 250, 595); 
  
  fill("#BADa55");
  textSize(200)
  text("SNOW", 300, 300)
}