
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new ball (350,300,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  
  drawSprites();
 
}



