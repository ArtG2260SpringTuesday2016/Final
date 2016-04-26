function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 0; //length of snake, initially 0
  this.tail = [];
  
  this.eat = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);
    if (d < 10) {
      this.total++; //snake grows
      return true;
    }
    else {
      return false;
    }
  }
  
  this.dir = function(x,y){
    this.xSpeed = x;
    this.ySpeed = y;
  }
  
  //updates steps 
  this.update = function() {
    // for(var i = 0; i < this.total-1; i++){
    //   this.tail[i] = this.tail[i + 1]
    // }
    
    //move location down from array
    //[][][][]
    //new location is in the end of array, old is moved out
    //if snake eats food: [][][][][] <- grows 
    if(this.total === this.tail.length){
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x,this.y);
    
    this.x = this.x + this.xSpeed * steps;
    this.y = this.y + this.ySpeed * steps;
    
    this.x = constrain(this.x, 0,width - 11);
    this.y = constrain(this.y, 0, height - 11);
    
  }
  
  //renders snake 
  this.show = function() {
    fill('hotpink');
    for (var i = 0; i < this.tail.length - 1; i++) {
      rect(this.tail[i].x,this.tail[i].y, 20, 20);
    }
    
    rect(this.x,this.y,20,20);
  }
  
  
}