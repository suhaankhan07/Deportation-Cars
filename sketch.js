 var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 
  speed = random(35,90);
  weight = random(400,1500);
 
  car = createSprite(100, 200, 100, 80);
   car.velocityX = speed;
   
  wall = createSprite(1200,200,60,height/2);
 
  wall.shapeColor = "black";
  car.shapeColor = "black"


}

function draw() {
  background(255,255,255);  

  if(wall.x - car.x < car.width/2 + wall.width/2) {
      car.velocityX = 0;
    
    var deformation = (0.5 * width * speed * speed)/22500
     if(deformation < 100) {
        car.shapeColor = color(0,255,0);
     }
     
     else if(deformation > 100 && deformation < 180) {
      car.shapeColor = color(255,255,0);
    }
    
    else if(deformation > 180) {
      car.shapeColor = "red";
    }

  }
  


  drawSprites();
}