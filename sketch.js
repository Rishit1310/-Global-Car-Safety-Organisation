var car,wall,speed,weight;

function setup() {

speed=random(60,100)
weight=random(400,1500)
car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
  car.shapeColor=("white")
  wall.shapeColor=("grey")

}
function draw() {

  createCanvas(1600,400)
  background("black");
 
   car.velocityX=speed;
   if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500
   
  }
if(deformation>179){
  car.shapeColor=("red")
}
if(deformation>99&&deformation<180){
  car.shapeColor=("yellow")
}
if(deformation<101){
  car.shapeColor=("green")
}




  drawSprites();
}