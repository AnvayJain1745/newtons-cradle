var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(300,300,20)
	bob2 = new Bob(340,300,20)
	bob3 = new Bob(380,300,20)
	bob4 = new Bob(420,300,20)
	bob5 = new Bob(460,300,20)

	//Create the Bodies Here.

	
	Engine.run(engine);
	
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
}