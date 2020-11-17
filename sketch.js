var bullet,wall;
var speed,weight,thickness;
var damage;


function setup() {
  createCanvas(1600,400);

  thickness = random (22,83);
  speed = random (233,321);
  weight = random (30,52); 
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "grey";
  

  wall = createSprite(1400, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

 
}

function draw() {
  background(255,255,255); 
   if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      damage = 0.5*weight*speed*speed / (thickness * thickness * thickness);
       
      if(damage < 10){
          bullet.shapeColor = "green";
      }
      if(damage > 10){
          bullet.shapeColor = "red";
        
      }
      
   }
  drawSprites();
}

function hasCollided (bullet1 , wall1){
  bulletRightEdge = bullet1.x +bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge){
     return true ;
  }
  else{
    return false;
  }
}
