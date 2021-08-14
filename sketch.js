var mario;
var int1,int2,int3,int4,int5;
var b1,b2,b3,b4,b5,b6,b7;
var s1;
var brige;
var playb,insb,sb;
var bee;
var score=0;
var mask=0;
var bird;
var shoot;
var platformGroup,obstacleGroup,shootGroup;
var marioAnimation, marioAnimation1,mariostandAnimation,obstacleAnimation,wallAnimation,groundAnimation,beeAnimation,t1Animation,t2Animation,t3Animation,t4Animation,
manh1Animation,manh2Animation,manh3Animation,manh4Animation,
manh5Animation,manAnimation,birdAnimation,s1Animation,
cityAnimation,lightpostAnimation,playbAnimation,insbAnimation,storybAnimation,busAnimation,
bus2Animation,car3Animation,vk1Animation,vk2Animation,vk3Animation,vk4Animation,vk5Animation,maskAnimation,mask2Animation,shootAnimation,
shootingAnimation,vAnimation;
var man,manh1,manh2,manh3,manh4,manh5;
var PLAY=2;
var gameState=PLAY;
var vk1,vk2,vk3,vk4,vk5,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15;
var bus,bus2,car3;
var mask1,mask2,mask3,mask4,mask5,mask6,mask7,mask8,mask9,mask10,mask11,mask12,mask13,mask15,mask16,mask17,mask18,mask19,mask20;
function preload()
{


  //loading player animation.
  marioAnimation1=loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
  marioAnimation=loadAnimation("run1l.png","run2l.png","run3l.png","run4l.png","run6l.png","run7l.png","run8l.png","run9l.png");
  beeAnimation=loadAnimation("bee1.png","bee2.png");
  obstacleAnimation=loadAnimation("flight.png");
  groundAnimation=loadAnimation("road.png.jpg");  
 //loading building animations.
  b1Animation=loadAnimation("building1.png.png");
  b2Animation=loadAnimation("building2.png.png");
  b3Animation=loadAnimation("building3.png.png");
  b4Animation=loadAnimation("building4.png.png");
  b5Animation=loadAnimation("building5.png.png");
  b6Animation=loadAnimation("building6.png");
  b7Animation=loadAnimation("building7.png");
 //loading tree animations.
  t1Animation=loadAnimation("tree1.png.png");
  t2Animation=loadAnimation("tree2.png.png");
  t3Animation=loadAnimation("tree3.png.png");
  t4Animation=loadAnimation("tree4.png.png");
  //loading characters animation.
  manh1Animation=loadAnimation("manh1.png");
  manh2Animation=loadAnimation("manh2.png");
  manh3Animation=loadAnimation("manh3.png");
  manh4Animation=loadAnimation("manh4.png");
  manh5Animation=loadAnimation("manh5.png");
  manAnimation=loadAnimation("man.png");
  birdAnimation=loadAnimation("crow.png");
  s1Animation=loadAnimation("sign1.png");
  cityAnimation=loadAnimation("city.png");
  playbAnimation=loadAnimation("playbutton.png.png");
  lightpostAnimation=loadAnimation("lightpost.png"); 
//loading transport animation.
  busAnimation=loadAnimation("bus.png");
bus2Animation=loadAnimation("bus2.png");
car3Animation=loadAnimation("car3.png");
//loading virus king animation.
vk1Animation=loadAnimation("vk1.png");
vk2Animation=loadAnimation("vk2.png");
vk3Animation=loadAnimation("vk3.png");
vk4Animation=loadAnimation("vk4.png");
vk5Animation=loadAnimation("vk5.png");
//loading game objects.
maskAnimation=loadAnimation("mask.png");
shootAnimation=loadAnimation("shot1.png.png","shot2.png.png");
shootingAnimationr=loadAnimation("shooting.png");
mariostandAnimation=loadAnimation("run1.png");
playbAnimation=loadAnimation("playbutton.png.png");
insbAnimation=loadAnimation("instructionsbutton.png.png");
storybAnimation=loadAnimation("story.png");
brigeAnimation=loadAnimation("brige.png");
vAnimation=loadAnimation("virus.png");
}

function setup() {
  //Creating canvas equal to width and height of display.
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  
 


  
 
 //creating a group.
 shootGroup= createGroup();
platformGroup= createGroup();
obstacleGroup=createGroup();
//adding platforms to stand for mario.
for (var i=0;i<200;i++)
 {
   frameRate(30);
    platform = new Platform(countDistanceX);
    platformGroup.add(platform.spt);//Adding each new platform to platformGroup.
    countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build.
    //adding wall to the game.
    if(i%3===0)
    {
    
    platformGroup.add(platform.spt);
    
    }
    //adding obstacles to the game
    if(i%25==0)
    {
    obstacle=new Obstacle(countDistanceX);
     //adding obstacles to the game.
 obstacleGroup.add(obstacle.spt);
 
    }
  

    
     
  }

for (var i =300; i<45000; i=i+500){
  city=createSprite(i,480);
  city.addAnimation("city",cityAnimation);
  city.scale=1;
}
  b1=createSprite(1003,430);
  b1.addAnimation("b1",b1Animation);
  b1.scale=1;

  b2=createSprite(3003,423);
  b2.addAnimation("b2",b2Animation);
  b2.scale=0.9;

  b3=createSprite(5003,500);
  b3.addAnimation("b3",b3Animation);
  b3.scale=0.9;

  b4=createSprite(7003,500);
  b4.addAnimation("b4",b4Animation);
  b4.scale=0.9;

  b5=createSprite(9003,500);
  b5.addAnimation("b5",b5Animation);
  b5.scale=0.9;

  b6=createSprite(10003,420);
  b6.addAnimation("b6",b6Animation);
  b6.scale=0.9;

  b7=createSprite(18003,450);
  b7.addAnimation("b7",b7Animation);
  b7.scale=0.9;

  man=createSprite(10000,550);
  man.addAnimation("man",manAnimation);
  man.scale=0.5;

  manh1=createSprite(20500,570);
  manh1.addAnimation("manh1",manh1Animation);
  manh1.scale=0.3;

  manh2=createSprite(20900,570);
  manh2.addAnimation("manh2",manh2Animation);
  manh2.scale=0.3;

  manh3=createSprite(30000,570);
  manh3.addAnimation("manh3",manh3Animation);
  manh3.scale=0.3;

  manh4=createSprite(40000,570);
  manh4.addAnimation("manh4",manh4Animation);
  manh4.scale=0.3;

  manh5=createSprite(42000,570);
  manh5.addAnimation("manh5",manh5Animation);
  manh5.scale=0.3;



  
  for (var i =300; i<45000; i=i+500){
    lightpost=createSprite(i,480);
    lightpost.addAnimation("lightpost",lightpostAnimation);
    lightpost.scale=2.5;
  }

  
bus=createSprite(300,540);
bus.addAnimation("bus",busAnimation);
bus.scale=3.5;
bus.velocityX=27.5;
   
bus2=createSprite(10000,540);
bus2.addAnimation("bus2",bus2Animation);
bus2.scale=3.5;
bus2.velocityX=-27.5;

car3=createSprite(20000,560);
car3.addAnimation("car3",car3Animation);
car3.scale=0.7;
car3.velocityX=-30;

  
  mario = new Player();

  brige=createSprite(38000,560);
  brige.addAnimation("brige",brigeAnimation);
  brige.scale=1;
  brige.setCollider("circle",0,50,200);
 
  vk5=createSprite(7003,490);
  vk5.addAnimation("vk5",vk5Animation);
  vk5.scale=0.4;
  vk5.visible=false;

  v1=createSprite(3003,500);
  v1.addAnimation("v1",vAnimation);
  v1.scale=0.09;
  v1.visible=false;
  
  v2=createSprite(3003,580);
  v2.addAnimation("v2",vAnimation);
  v2.scale=0.09;
  v2.visible=false;

  
  v3=createSprite(5003,500);
  v3.addAnimation("v3",vAnimation);
  v3.scale=0.09;
  v3.visible=false;

  v4=createSprite(5003,580);
  v4.addAnimation("v4",vAnimation);
  v4.scale=0.09;
  v4.visible=false;

  v5=createSprite(5003,540);
  v5.addAnimation("v5",vAnimation);
  v5.scale=0.09;
  v5.visible=false;

  v6=createSprite(7003,540);
  v6.addAnimation("v6",vAnimation);
  v6.scale=0.09;
  v6.visible=false;

  v7=createSprite(7003,590);
  v7.addAnimation("v7",vAnimation);
  v7.scale=0.09;
  v7.visible=false;

  v8=createSprite(7003,500);
  v8.addAnimation("v8",vAnimation);
  v8.scale=0.09;
  v8.visible=false;

  v9=createSprite(7003,490);
  v9.addAnimation("v9",vAnimation);
  v9.scale=0.09;
  v9.visible=false;

  v10=createSprite(7003,550);
  v10.addAnimation("v10",vAnimation);
  v10.scale=0.09;
  v10.visible=false;

  v11=createSprite(9003,540);
  v11.addAnimation("v11",vAnimation);
  v11.scale=0.09;
  v11.visible=false;

  v12=createSprite(9003,580);
  v12.addAnimation("v12",vAnimation);
  v12.scale=0.09;
  v12.visible=false;

  v13=createSprite(9003,500);
  v13.addAnimation("v13",vAnimation);
  v13.scale=0.09;
  v13.visible=false;



mask1=createSprite(1003,490);
mask1.addAnimation("mask1",maskAnimation);
mask1.scale=1.5;
mask1.visible=false;

mask2=createSprite(3003,430);
mask2.addAnimation("mask2",maskAnimation);
mask2.scale=1.5;
mask2.visible=false;

mask3=createSprite(3003,400);
mask3.addAnimation("mask3",maskAnimation);
mask3.scale=1.5;
mask3.visible=false;


  }







function draw() {
  background('cyan');
  //code to move the camera.
  translate(  -mario.spt.x + width/2 , 0);

  if(gameState==PLAY)//Play state.
  {  

    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("Your Score = " + score , mario.spt.x,50);

    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("Mask Collected = " + mask , mario.spt.x,100);

    stroke('green');
    textSize(15);
    fill('yellow');
    textFont("Algerian");
    text("I will be very helpful,if anyone can give me 1 mask by pressing 'g' ",man.x,150);

if(mario.spt.isTouching(b1)){
  b1.destroy();
  mask1.visible=true;
}



if(mario.spt.isTouching(b2)){
  b2.destroy();
 mask2.visible=true;
 mask3.visible=true;
v1.visible=true;
v2.visible=true;
v1.velocityX=-5;
v2.velocityX=-3;
}

if(mario.spt.isTouching(b3)){
  b3.destroy();
v3.visible=true;
v4.visible=true;
v5.visible=true;
v3.velocityX=-3;
v4.velocityX=-4;
v5.velocityX=-6;
}
if(mario.spt.isTouching(b4)){
  b4.destroy();
  v6.visible=true;
  v7.visible=true;
  v8.visible=true;
  v9.visible=true;
  v10.visible=true;
  vk5.visible=true;
  v6.velocityX=-5;
  v7.velocityX=-4;
  v8.velocityX=-6;
  v9.velocityX=-3;
  v10.velocityX=-5;
  vk5.velocityX=-7;
  }

if(mario.spt.isTouching(mask1)){
  mask1.destroy();
  mask=mask+1;
  score=score+5;
}

if(mario.spt.isTouching(mask2)){
  mask2.destroy();
mask=mask+1;
}

if(mario.spt.isTouching(mask3)){
  mask3.destroy();
mask=mask+1;
}

if(shootGroup.isTouching(vk5)){
  vk5.destroy();
  score=score*2;
}

if(shootGroup.isTouching(v1)){
  v1.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v2)){
  v2.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v3)){
  v3.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v4)){
  v4.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v5)){
  v5.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v6)){
  v6.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v7)){
  v7.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v8)){
  v8.destroy();
  scpore=score+5;
}


if(shootGroup.isTouching(v9)){
  v9.destroy();
  score=score+5;
}


if(shootGroup.isTouching(v10)){
  v10.destroy();
  score=score+10;
}




if(shootGroup.isTouching(brige)){
  brige.destroy();

}

if(keyDown("space")){
  createBullet();
}



//code after the scene of touching virus.
if(mario.spt.isTouching(vk5)){
  mario.spt.destroy();
  score=score-10;
}

if(mario.spt.isTouching(v1)){
  mario.spt.destroy();
score=score-5;
}

if(mario.spt.isTouching(v2)){
  mario.spt.destroy();
  score=score-5;
}

if(mario.spt.isTouching(v3)){
  mario.spt.destroy();
  score=score-5;
}

if(mario.spt.isTouching(v4)){
  mario.spt.destroy();
  score=score-5;
}

if(mario.spt.isTouching(v5)){
  mario.spt.destroy();
  score=score-5;
}
if(mario.spt.isTouching(v6)){
  mario.spt.destroy();
  score=score-5;
}
if(mario.spt.isTouching(v6)){
  mario.spt.destroy();
  score=score-5;
}
if(mario.spt.isTouching(v7)){
  mario.spt.destroy();
  score=score-5;
}
if(mario.spt.isTouching(v8)){
  mario.spt.destroy();
  score=score-5;
}
if(mario.spt.isTouching(v9)){
  mario.spt.destroy();
  score=score-5;
}

if(mario.spt.isTouching(v10)){
  mario.spt.destroy();
  score=score-5;
}






if(keyDown("g")&& (mario.spt.x = man.x)){
  mask=mask-1;
score=score*5;
}


    if(bus.isTouching(b5)){
      bus.velocityX=0;
    }
    if(mario.spt.isTouching(b5)){
      bus.velocityX=20;
    }
          //apply gravity to mario and set colliding with platforms.
          mario.applyGravity();
        mario.spt.collide(platformGroup);
        mario.spt.collide(brige);
        
       //Calling various function to controll mario.
         if (keyDown("left"))  
                { 
                mario.moveLeft();
             }
       if (keyDown("right")) 
             { 
             mario.moveRight();
              }
        if (keyDown("up") && mario.spt.velocityY===0) 
                {
              mario.jump();
                 }


               }

 


   
     
 
    

   

 
  

   drawSprites();

}


  function createBullet() {
     shoot= createSprite(mario.spt.x,mario.spt.y);
    shoot.addAnimation("shoot",shootAnimation);
  shoot.velocityX = 30;
  shoot.lifetime=20;
    shoot.scale = 0.5;
    shootGroup.add(shoot); 
    mario.spt.addAnimation("mario",shootingAnimationr);
  }
  
  




