var  tom1,tom2,tom3,tom4,tom;
var jerry,jerry1,jerry2,jerry3,jerry4;
var backgroundImg, background;

function preload() {
    //load the images here
  
  tom1= loadAnimation("tomOne.png");
  tom2= loadAnimation("tomTwo.png");
  tom3= loadAnimation("tomThree.png");
  tom4=loadAnimation("tomFour.png");
  jerry1= loadAnimation("jerryOne.png");
  jerry2= loadAnimation("jerryTwo.png");
  jerry3=loadAnimation("jerryThree.png");
  jerry4= loadAnimation("jerryFour.png");
  backgroundImg= loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,500);
    tom.addAnimation("tom sitting",tom1);
    tom.scale=0.2;
    jerry = createSprite(200,500);
    jerry.addAnimation("jerry sitting",jerry1);
  jerry.scale=0.2;
    }

function draw() {
background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("tom stop",tom3);
     tom.x=500;
     tom.changeAnimation("tom stop");
     jerry.addAnimation("next pic",jerry3);
    jerry.changeAnimation("next pic");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode===LEFT_ARROW){
    tom.velocityX= -5;
    tom.addAnimation("tom running",tom2);
    tom.changeAnimation("tom running");
    jerry.addAnimation("jerry second ",jerry2);
    jerry.changeAnimation("jerry second");
   }

}
