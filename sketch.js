const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflakes = []
var maxsnowflakes = 30

function preload(){
  backgroundIMG = loadImage("snow1.jpg");
  boyIMG = loadImage("winterboy.png")
  girlIMG = loadImage("wintergirl.png")
}
function setup() {
  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

 
  boy = createSprite(200,450)
  boy.addImage(boyIMG)

  girl = createSprite(600,400);
  girl.addImage(girlIMG);

  if(frameCount % 130 === 0){
    for(var i=0; i<maxsnowflakes; i++){
    snowflakes.push(new snowflake(random(0,1200), random(0,1200)));
    }
  }  
  
  
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);
  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    snowflakes[i].updateY()
    }
    
  drawSprites();

}