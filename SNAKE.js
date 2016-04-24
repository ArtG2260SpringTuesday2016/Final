function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  
  this.eat = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);
    if (d < 1) {
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
    this.x = this.x + this.xSpeed * steps;
    this.y = this.y + this.ySpeed * steps;
    
    this.x = constrain(this.x, 0,width - 11);
    this.y = constrain(this.y, 0, height - 11);
    
  }
  
  //renders snake 
  this.show = function() {
    fill('hotpink');
    rect(this.x,this.y,20,20);
  }
  
  
}