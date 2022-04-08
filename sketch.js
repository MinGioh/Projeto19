var p1, rnn;
var ground, gr;
var gameState = "Start";
var obstaculos,rgato,cat,dogfood,osso;

function preload()
{
  p1 = loadAnimation("Runner-1.png","Runner-2.png");
  ground = loadImage("Road.png");
  rgato = loadImage("raçãog.png");
  cat = loadImage("gato.png");
  dogfood = loadImage("raçãoc.png");
  osso = loadImage("osso.png");
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
 
  gr =createSprite(width/2,300);
   gr.addImage("ground");
   gr.velocityX = -5;

   rnn = createSprite(100,100,20,20);
      rnn.addAnimation("running",p1);   
}
 
 function draw() 
{
  
  
  if(gameState==="Start")
  {
    background("black");
    
    fill("white");
    text("A ração do cachorro de Lucas acabou. Será que você pode ajudá-lo a conseguir mais?",460, 100);
    text("Seu objetivo é coletar o máximo de rações e fazer o máximo de pontos possiveis",480,150);
    text("mas cuidado, não pegue as rações de gato e nem encoste nos gatos ou se não você perderá seus pontos.",420,165);
    text("Está pront@? Se a resposta for sim aperte enter para começar, Boa Sorte!", 490,215);

     if(keyDown("enter")){
      gameState="Play";
    }
      }
  
   if(gameState==="Play")
 {
    if(gr.x < height)
    {
      gr.x = height*2;
    }
      rnn.y = mouseY;

      Obstaculos();
      
      if(obstaculos.isTouching(rnn))
      {
        gameState ="End";
      }

      drawSprites();
     

  } 
   if(gameState==="End"){
    
    fill("red")
    textSize(50);
    text("GAME OVER",500,300);
      
   }

   function Obstaculos ()
{
  if(frameCount % 80 === 0)
  {
    obstaculos = createSprite(width,height-40,20,20);
    obstaculos.velocityX = -5;
    var n = Math.round(random(1,6));
    switch(n)
    {
      case 1: obstaculos.addImage(rgato);
      break;
      case 2: obstaculos.addImage(cat);
      break;
      case 3: obstaculos.addImage(dogfood);
      break;
      case 4: obstaculos.addImage(osso);
      break;
      default: break;
    }
    obstaculos.lifetime = 600;
    obstaculos.scale = 0.6;
    }
}
}

