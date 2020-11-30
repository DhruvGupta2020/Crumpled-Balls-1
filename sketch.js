
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(400,680,800,10);
	paper = new Paper(50,600,20);
	box1 = new Box(655,665,150,15);
	box2 = new Box(725,610,15,125);
	box3 = new Box(585,610,15,125);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 
  rectMode(CENTER);
 
  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}


