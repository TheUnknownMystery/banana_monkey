//variables

var blocks, monkey, monkey_img, rock, rock_img, fruit, fruit_img_2, survival = 0

var banan_group,rock_gp,gameState="play";

//preloading images
function preload() {
  monkey_img = loadAnimation("sprite_0.png", "sprite_1.png ", "sprite_2.png", "sprite_3.png");

  rock_img = loadImage("obstacle.png");

  fruit_Img_2 = loadImage("banana.png");

}

//setup function

function setup() {

  createCanvas(400, 400);
  banana_group=new Group();
  rock_gp= new Group();

  //creating monkey sprite

  monkey = createSprite(29, 347, 10, 10);

  monkey.addAnimation("running", monkey_img);

  monkey.scale = 0.1

}



function draw() {
  // monkey.debug=true
  //background    
  background("white")
  
 // console.log(monkey.y);
  //survival time  
 
  text("time:" + survival, 300, 100)



  monkey.velocityY = monkey.velocityY + 0.5
  //calling functions
  block();
  monkey.collide(blocks); 
  

  //reset ground

  if (block.x < 0) {

    block.x = 200;

  }
  if(gameState==="play"){
 survival = Math.ceil(frameCount / frameRate())
     if (keyDown("space")  && monkey.y >= 344) {
    monkey.velocityY = -20

  }
       rock_1();
fruits_1();   
    
    
    
  }
else if(gameState==="end"){
survival=0  
  
  
  
}
  
  
  
  if(rock_gp.isTouching(monkey)){
gameState="end"
monkey.velocityY=0
rock_gp.setVelocityXEach(0)
banana_group.setVelocityXEach(0)
rock_gp.setLifetimeEach(-1)
  banana_group.setLifetimeEach(-1)
  }
  drawSprites();

}

//functions

function block() {

  blocks = createSprite(10, 380, 800, 10);

  blocks.velocityX = -6

}

function rock_1() {

  if (World.frameCount % 80 === 0) {

    rock = createSprite(400, 340, 10, 10)

    rock.addImage(rock_img);

    rock.scale = 0.2
    rock.velocityX= -5;

    rock.lifetime = 400/5;
    
    rock_gp.add(rock);
  }
}



function fruits_1() {
  if (World.frameCount % 80 === 0) {

    fruit = createSprite(200, Math.round(random(120, 200)), 10, 10);

    fruit.addImage("fruits", fruit_Img_2);

    fruit.scale = 0.1;

    fruit.velocityX = -7;

    fruit.lifetime = 400/7;
    
    banana_group.add(fruit);
  }
}