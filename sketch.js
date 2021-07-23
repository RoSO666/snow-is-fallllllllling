var snow;

var snowflakesGroup, snowflakes1, snowflakes2;
var guy;



function preload() {
  snow = loadImage("snow1.jpg");
  snowflakes1 = loadImage("snow4.webp");
  snowflakes2 = loadImage("snow5.webp");
  guyPic = loadImage("cooll.jpeg");
}



function setup() {
  createCanvas(1450,650);
  snowflakesGroup = createGroup();
  guy = createSprite(600,600,5,5)
  
}



function draw() {
  
  background(snow);  
  spawnSnowflakes();
  snowflakesGroup.setLifetimeEach(-1);
  snowflakesGroup.setVelocityYEach(10);
  guy.x = World.mouseX;
  guy.y = World.mouseY;
  guy.addImage(guyPic);
  guy.scale = 0.1;
  guy.display();
  drawSprites();
}

function spawnSnowflakes(){
  if (frameCount % 40 === 0){
    var snowflakes = createSprite(600,0,5,5);
    snowflakes.velocityY = -6
    snowflakes.x = Math.round(random(0,1450));
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : snowflakes.addImage(snowflakes1);
        break;
      case 2 : snowflakes.addImage(snowflakes2);
        break;
      default: break;  
    }
    snowflakes.scale =0.05;
    snowflakes.lifetime = 300;
    snowflakesGroup.add(snowflakes);
  }

}













