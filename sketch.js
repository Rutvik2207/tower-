function setup() {
  createSprite(400, 200, 50, 50);
  block8=new block(330,235,30,40);
  block9=new block(360,235,30,40);
  block10=new block(390,235,30,40);
  block11=new block(420,235,30,40);
  block12=new block(450,235,30,40);
  //level3
  block13= new block(360,195,30,40);
  block14=new block(390,195,30,40);
  block15=new block(420,195,30,40);
  //top
  block16=new block(390,155,30,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
 async function getBackgroundImage(){
   var response=await fetch("http://worldtimeapi/api/timezone/asia/kolkata");
 }
 if(hour>=6 && hour<=18){
   bg=("images/light.jpg")
   }
   else{
     bg=("images/dark.jpg");
   }
 