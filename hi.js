  this.generate=function(){
    pieces.push(unit0);
    
    if(letters[index] === "O"){
      fill('yellow');
      pieces.push(unit1,unit2,unit3);
    } else if(letters[index] === "T"){
      fill('purple');
      pieces.push(unit1,unit4,unit5);
    } else if(letters[index] === "J"){
      fill('blue');
      pieces.push(unit5,unit2,unit7);
    } else if(letters[index] === "L"){
      fill('orange');
      pieces.push(unit5,unit2,unit3);
    } else if(letters[index] === "Z"){
      fill('red');
      pieces.push(unit1,unit5,unit6);
    } else if(letters[index] === "S"){
      fill('green');
      pieces.push(unit1,unit2,unit8);
    } else if(letters[index] === "I"){
      fill('#89f');
      pieces.push(unit1,unit4,unit9);
    }
  }
  
  && pieces[0].y<630 && pieces[1].y<630 && pieces[2].y<630 && pieces[3].y<630
  
    var t0x=tetrad[0].unit0.x;
  var t1x=tetrad[0].unit1.x;
  var t2x=tetrad[0].unit2.x;
  var t3x=tetrad[0].unit3.x;
  var t4x=tetrad[0].unit4.x;
  var t5x=tetrad[0].unit5.x;
  var t6x=tetrad[0].unit6.x;
  var t7x=tetrad[0].unit7.x;
  var t8x=tetrad[0].unit8.x;
  var t9x=tetrad[0].unit9.x