var c1,c2,c3,c1I,c2I,c3I,t,b1,b2,t1 = "Go!",GP = 0,s1;
function preload(){
  t = loadImage("track.png");
  c1I = loadImage("car1.png");
  c2I = loadImage("car2.png");
  c3I = loadImage("car3.png");
 
}
function setup(){
  createCanvas(800,3000);
  
  
  c1 = createSprite(150,2900);
  c1.addImage(c1I);
  c1.scale = 0.2;
  
  c2 = createSprite(400,2900);
  c2.addImage(c2I);
  c2.scale = 0.2;
  
  c3 = createSprite(650,2900);
  c3.addImage(c3I);
  c3.scale = 0.2;
  
  b1 = createSprite(40,1500,10,2900);
  b2 = createSprite(760,1500,10,2900);
  b1.visible = false;
  b2.visible = false;
  
  
}


function draw(){
  background(t);
  
  
  
 if(keyDown("space")&& GP === 0){
   textSize(200);
   fill("white");
   text(t1,400,1500);
   GP = 1;
 }
 if(GP === 1){
  
   t1 = "";
  if(keyDown("w")&& c1.y >= 150) {
        c1.y = c1.y-10;
    
   }
 
   if(keyDown("t")&& c2.y >= 150) {
        c2.y = c2.y-10;
     
   }
  
   if(keyDown("up")&& c3.y >= 150) {
        c3.y = c3.y-10;
     
   }
  
  if(keyDown("a")){
    c1.x = c1.x-5;
  }
  
    if(keyDown("d")){
    c1.x = c1.x+5;
  }
  
  if(keyDown("f")){
    c2.x = c2.x-5;
  }
  
    if(keyDown("h")){
    c2.x = c2.x+5;
  }
  
    if(keyDown("left")){
    c3.x = c3.x-5;
  }
  
    if(keyDown("right")){
    c3.x = c3.x+5;
  }
  c1.collide(b1);
  c1.collide(b2);
  c2.collide(b1);
  c2.collide(b2);
  c3.collide(b1);
  c3.collide(b2);
  c1.collide(c2);
  c1.collide(c3);
  c2.collide(c1);
  c2.collide(c3);
  c3.collide(c1);
  c3.collide(c2);
 }
  if(c1.y <=150){
    GP = 3;
    textSize(50);
    fill("white");
    text("PLAYER 1 WON",300,1500);
  }
  if(c2.y <=150){
    GP = 3;
    textSize(50);
    fill("white");
    text("PLAYER 2 WON",300,1500);
  }if(c3.y <=150 ){
    GP = 3;
    textSize(50);
    fill("white");
    text("PLAYER 3 WON",300,1500);
  }
  if(c1.x <=10 || c1.x>=800){
    c1.x = 400;
  }
drawSprites();
}






