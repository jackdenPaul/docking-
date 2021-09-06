var spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img;
var issimg,spacebgimg;
var iss,spacecraft;
var hasDocked=false;



function preload()
{
spacecraft1img=loadImage("spacecraft1.png")
spacecraft2img=loadImage("spacecraft2.png")
spacecraft3img=loadImage("spacecraft3.png")
spacecraft4img=loadImage("spacecraft4.png")
issimg=loadImage("iss.png")
spacebg=loadImage("spacebg.jpg")


}



function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
iss.addImage(issimg);
spacecraft=createSprite(240,20,50,50)
spacecraft.addImage(spacecraft1img)
spacecraft.scale=0.3
  
}

function draw() {
  background(spacebg); 

  if(!hasDocked){
spacecraft.x=spacecraft.x+random(-1,1)

if(keyDown(UP_ARROW)){
  spacecraft.addImage(spacecraft2img)
}

if(keyDown(LEFT_ARROW)){
  spacecraft.addImage(spacecraft4img)
}

if(keyDown(RIGHT_ARROW)){
  spacecraft.addImage(spacecraft3img)
}

if(keyDown(DOWN_ARROW)){
  spacecraft.addImage(spacecraft2img)
}

}



  drawSprites();
}