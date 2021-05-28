 var hammer
 var stone1
 var rubber
 var stone2
 var stone3
 var ground
 var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
//loading all images
{


}


function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
//making new sprites
ground = new Ground(600,650,1200,20);
 rubber= new Rubber(300,200,30,40);
 hammer= new Hammer(200,200,30,40);
 stone= new Stone(300,100,40,20);
 




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
 

  Engine.update(engine);
 
  
// displaying images
  rubber.display();
 ground.display();
stone.display();
hammer.display();
  drawSprites();
 
}



