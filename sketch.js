var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,100);
  weight=random(400,1500);
  car = createSprite(50, 200, 40, 40);
  car.velocityX = speed;
  car.shapeColor=color("grey")
  wall = createSprite(1400, 200, 30, height/2);
  wall.shapeColor=color("grey")
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (wall.width+car.width)/2){
  car.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation>180){
    car.shapeColor=color("red")
  }
  if (deformation<180 && deformation>100){
    car.shapeColor=color("yellow")
  }
  if (deformation<100){
    car.shapeColor=color("green")
  }
  }
  drawSprites();
}