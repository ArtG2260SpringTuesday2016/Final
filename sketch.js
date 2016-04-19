var number;

function preload(){

number = loadAnimation("assets/Number00.png","assets/Number07.png");

}

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(250,250,250);
  animation(number,200,200);
}