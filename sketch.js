var garden, rabbit, edges, apple, leaves;
var gardenImg, rabbitImg, appleImg, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.jpeg");
  leavesImg = loadImage("leaves.jpeg")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0){
  if (select_sprites == 1){
    createApples();
  }
  else{
    createLeaves();
  }
}


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  rabbit.x = World.mouseX;
 

  drawSprites();

}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.03;
  apple.velocityY = 2;

 
} 

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.02;
  leaves.velocityY = 2;
  leaves.velocityX = 2;

  

}

  




