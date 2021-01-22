var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,200,80,80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(400,200,80,80);
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect3 = createSprite(600,200,80,80);
  rect3.shapeColor = "green";
  rect3.debug = true;
  rect4 = createSprite(800,200,80,80);
  rect4.shapeColor = "green";
  rect4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,rect4)) {
  movingRect.shapeColor = "red";
  rect4.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  rect4.shapeColor = "green";
 }
  drawSprites();
}
