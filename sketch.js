
var monkey , monkey_running;
var banana ,bananaImg, obstacle, obstacleImg;
var bananaGroup, obstaclesGroup,invisibleGround;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}



function setup() {
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x)

  monkey = createSprite(100,350,100,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(400,350,900

,10);
  invisibleGround.visible = false;
  
 //create banana and obstacle Groups 
  var bananaGroup = createGroup();
  var obstacleGroup = createGroup();
  
monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  //monkey.debug = true
  
  var survivalTime =0;
}


function draw() {
  background("white");
  
  stroke("white");
  textSize(20); 
  fill("white");
  text("Score: "+score,500,50);
  
  
  stroke("black");
  textSize(20); 
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,100,50);  
  
  
    // moving ground
    ground.velocityX = -7 

    

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")&& monkey.y>100){
     monkey.velocityY = -5; 
   }
  
   //add gravity
   monkey.velocityY = monkey.velocityY +0.8;
  
    //stop monkey from falling down
      monkey.collide(invisibleGround);
  
  spawnbanana();
  spawnObstacles();
  
       if(mousePressedOver(obstaclesGroup)) {
       reset();
     }
  
 drawSprites();  
}

function spawnbanana (){
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,220,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    //bananaGroup.add(banana);

}
}

function spawnObstacles (){
  if (frameCount % 80 === 0){
      var obstacle = createSprite(400,220,10,40);
      obstacle.y = Math.round(random(400,320));
      obstacle.velocityX = -6;
      obstacle.addImage(obstacleImg);
      obstacle.scale = 0.1;
      obstacle.lifetime = 300; 
    
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
      //obstaclesGroup.add(obstacle);
}
}

