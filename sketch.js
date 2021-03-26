
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy, stone, chain

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,530,800,15)
    boy = new Boy(300,450)
	  stone = new Stone(200,450)
	  chain = new Chain(stone.Body,boy.Body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  boy.display()
  stone.display()
  chain.display()
  
  drawSprites();
 
}



