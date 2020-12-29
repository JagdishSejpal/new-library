var movingRect;
var fixedRect;
var rect1;
var rect2;

function setup(){
  createCanvas(700,500);

  movingRect= createSprite(200,250,25,35);
  fixedRect= createSprite(450,350,45,65);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="pink";

rect1=createSprite(350,200,80,50);
rect2=createSprite(100,100,45,65);

}

function draw(){
  background("Orange");

  movingRect.x=mouseX;
  movingRect.y=mouseY;

console.log(movingRect.x-fixedRect.x);

if(Touching(movingRect,rect1)){
  rect1.shapeColor="yellow";
  

}
else{
  rect1.shapeColor="green"
}




  drawSprites();


}




