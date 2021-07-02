var bullet,wall; 
var speed, weight; 
var thickness;
function setup() { 
  createCanvas(1600, 400); 
  speed=random(232,321);
   weight=random(30,52) ;
   thickness=random(22,83);
   bullet=createSprite(50, 200, 50,10);
   bullet.velocityX = speed; 
   bullet.shapeColor=color(255); 
   wall=createSprite(1500,200, thickness, height/2);
   wall.shapeColor=color(80,80,80);
   
  }
function draw() {
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>10){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<10){
      bullet.shapeColor=color(0,255,0);

    }
    console.log(deformation);
    
  }
  
  background(0,200,100);  
  drawSprites();
}