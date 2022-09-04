var ball,leftbody,rightbody,bottombody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
var balloptions={
	restitution:0.3,friction:0,density:1.2
}
	//Create the Bodies Here.
ball=Bodies.circle(260,100,30,balloptions)
World.add(world,ball)
bottombody=new Ground(width/2,670,width,20)
leftbody=new Ground(1100,600,20,120)
rightbody=new Ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottombody.show()
  leftbody.show()
  rightbody.show()
  ellipse(ball.position.x,ball.position.y,30)
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-120})
	}
}

