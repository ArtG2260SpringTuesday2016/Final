var number, thing, grow, wiggle;

function preload(){

number = loadAnimation("assets/Number00.png","assets/Number07.png");
wiggle = loadAnimation("assets/Wiggle00.png","assets/Wiggle08.png");
thing = loadAnimation("assets/Circle01","assets/Circle05");

}

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(250,250,250);
  animation(number,200,200);
  animation(wiggle,400,200);
  animation(thing,300,300);

}