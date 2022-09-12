var player
var ground                      
var snake
var brc
var lm1
var lm2
var grpl
var life,life2,life3
var lifeImage
var vidas = 3



function preload(){

  lifeImage = loadImage('J_Ur_u.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  

  player = createSprite(-windowWidth*1.8,700,50,50);
  player.shapeColor = "red";
  ground = createSprite(windowWidth/2,windowHeight- 100,windowWidth*5,40)
  snake = createSprite(-windowWidth*1.4,windowHeight-30,40,70)
  snake.shapeColor = 'green'
  brc = createSprite(-windowWidth*1.4,windowHeight-60,100,120)
  brc.shapeColor = 'black'
  lm1 = createSprite(-windowWidth*1.4,windowHeight -500,50,10) 
  lm1.visible = false
  lm2 = createSprite(-windowWidth*1.4,windowHeight +250,50,10)
  snake.velocityY = -10
  grpl = new Group()
  life = createSprite(player.x,player.y- 600)
  life.addImage(lifeImage)
  life.scale = 0.3
  life2 = createSprite(player.x-80,player.y- 600)
  life2.addImage(lifeImage)
  life2.scale = 0.3
  life3 = createSprite(player.x- 160,player.y- 600)
  life3.addImage(lifeImage)
  life3.scale = 0.3
  Plataforma()
  
}

function draw() {
  background(0); 

  player.velocityY +=1
  




  if(keyDown('D')){
    player.x = player.x + 3
  }
  if(keyDown('W')&& (player.collide(ground)|| player.collide(grpl))){
 player.velocityY = - 20

  }
  if(keyDown('A')){
    player.x = player.x - 3
  }
  if(keyDown('S')){
    player.y = player.y + 10         
  }
  camera.position.x = player.x   
  player.collide(ground)
  player.collide(grpl)
  drawSprites();
  
  snake.bounceOff(lm1)
  snake.bounceOff(lm2)

  life.x = player.x
  life2.x = player.x - 80
  life3.x = player.x - 160

  if(vidas == 3 && player.collide(snake)){
     
    life.visible = false
    player.x = player.x - 100
    setTimeout(() => {
      vidas = 2  
    }, 1000);
    
  }
  else if(vidas == 2 && player.collide(snake)){
    life2.visible = false
    player.x = player.x - 100
    setTimeout(() => {
      vidas = 1  
    }, 1000);
  }
  else if(vidas == 1 && player.collide(snake)){
    life3.visible = false
    player.x = player.x - 100
    setTimeout(() => {
      vidas = 0  
    }, 1000);
  } 
  
  
  
  console.log(vidas)
}
function Plataforma(){

var x = 0 
for(var i = 0 ; i < 15; i++){
   var plataforma = createSprite(-windowWidth*1.55 + x,random(windowHeight- 200,windowHeight-300),100,20)
   x += 1000
   grpl.add(plataforma)
}

}

















