var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2,logAnimation,playerAnimation,playerImage;
var school;
var city,cityAnimation;
var gameState = "play";
function preload()
{carAnimation1=loadAnimation("images/car1.png");
carAnimation2=loadAnimation("images/car2.png");
playerAnimation=loadAnimation("images/Player-03.png");
logAnimation=loadAnimation("images/log2.png");
cityAnimation=loadAnimation("images/city1.png","images/city2.png");
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
city=createSprite(width/2,-1500);
city.addAnimation("city",cityAnimation);
for (var i=0;i<6;i++){
var bottoGrass1 = createSprite(683,height-50-(i*4000),width,grassHeight);






}











}

function draw() {
  background(255,255,255);  
  drawSprites();
}