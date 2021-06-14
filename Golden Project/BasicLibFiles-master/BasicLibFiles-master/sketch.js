var guide1, guide1_img;
var next, next_img;
var play, play_img;

var gameState="guide1";
var wall1,wall2,wall3,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall15,wall16,wall17,wall18,wall19,wall20,
wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,
wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50;

var player ;

function preload() {
  guide1_img = loadImage("asset/Starter.png");
  guide2_img = loadImage("asset/guide2.png");
  next_img = loadImage("asset/next.png");
  play_img = loadImage("asset/play.png");
  level1_img = loadImage("asset/level1.png")

  playerImage=loadAnimation("asset/left1.png","asset/left2.png","asset/left3.png","asset/left4.png","asset/left5.png","asset/left6.png")
  player1Image=loadAnimation("asset/left1.png","asset/left2.png");

}
function setup() {
  createCanvas(1200, 800);
  guide1func();


  wall1=createSprite();


}
function draw() {
  background("black");
  fill(255)
  textSize(20)
  text(mouseX + "," + mouseY, 50, 50)


// hi my code I started again how are you ? :) 






  if (mousePressedOver(next)) {
    guide2func();

  }

  if (mousePressedOver(play)) {
   level1func();

  }




  drawSprites();

}

function guide1func() {


  guide1 = createSprite(width / 2, height / 2, width, height);
  guide1.addImage(guide1_img);
  guide1.scale = 0.5;

  next = createSprite(200, height - 150);
  next.addImage(next_img);
  next.scale = 0.7

}


function guide2func() {
  guide1.destroy();
  next.destroy();
  guide2 = createSprite(width / 2, height / 2, width, height);
  guide2.addImage(guide2_img);
  guide2.scale = 0.5;

  play = createSprite(width/2, height - 170);
  play.addImage(play_img);
  //play.scale = 0.7
  gameState="guide2";

}

function level1func(){
play.destroy();
next.destroy();
guide2.destroy();
  gameState= "level1"
  level1 = createSprite(width / 2, height / 2, width, height);
  level1.addImage(level1_img);
  level1.scale = 0.4;

player1=createSprite(150,150,10,10);
player1.addAnimation("player1",player1Image);
player1.scale=0.8;

}

