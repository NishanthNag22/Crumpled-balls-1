
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	ground=new Ground(500,375,1000,15);
	paper=new Paper(35,350,20);
	dustbin1=new Dustbin(880,365,150,10);
	dustbin2=new Dustbin(810,310,10,100);
	dustbin3=new Dustbin(950,310,10,100);
	
}


function draw() {
  background(0);
  Engine.update(engine)
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85})
	}
}