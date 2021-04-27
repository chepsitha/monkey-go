var PLAY = 1;
var END = 0;
var gameState = PLAY ;
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle,groundImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 groundImage = loadImage("ground20.png");
}



function setup() {
createCanvas(600,200);
  
monkey = createSprite(20,150,25,35);
monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1; 
  
ground = createSprite(10,185,500,10);
  ground.addImage(groundImage);
  ground.scale = 1.5;
  
  invisibleGround = createSprite(10,175,1200,10);
  invisibleGround.visible = false;

foodGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white")
  text("score :"+score,500,50);
  
  if(gameState === PLAY){
    
    score = score + frameCount%100;
   monkey.velocityX = 2;
    
    if(monkey.x === 400){
      monkey.x = 10;
    }
 if(keyDown("space")){
 monkey.velocityY =-4; 
 }
    

    
    if(monkey.y <= 50){
      monkey.velocityY = 4;   
      
    }
  }
  monkey.collide(invisibleGround);

  
  spawnBananas(); 
  spawnObstacles();
   
  drawSprites();
}
function spawnBananas(){
  if(frameCount%100 === 0){
banana = createSprite(500,100,5,5);
  banana.addImage(bananaImage);
  banana.scale = 0.05;
    banana.velocityX = -4;
    banana.y = Math.round(random(50,150))
foodGroup.add(banana);
  }

}
function spawnObstacles(){
  if(frameCount%350 === 0){
    obstacle = createSprite(500,185,5,5);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.lifetime = 500;
    obstacle.velocityX = -4;
    obstacleGroup.add(obstacle);
  obstacle.collide(invisibleGround);    
  }
  
  
}





