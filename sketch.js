
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(290, 430, 30);
	bob2=new Bob(355, 430, 30);
	bob3=new Bob(420, 430, 30);
	bob4=new Bob(485, 430, 30);
	Ground = new roof(390,200,300,50);
	rope1= new Rope(bob1.body, {x:290, y:200});
	rope2= new Rope(bob2.body, {x:355, y:200})
	rope3= new Rope(bob3.body, {x:420, y:200})
	rope4= new Rope(bob4.body, {x:485, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  Ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
}



