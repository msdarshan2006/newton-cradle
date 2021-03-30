var roofObj;
const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj= new Roof(width/2,height/4,width/7,20);
	startBobPositionX=width/2; startBobPositionY=height/4+500; 
	bobDiameter=40;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new rope(bobObject1.bobBody,roofObj.roofBody,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.bobBody,roofObj.roofBody,-bobDiameter*1, 0) 
	rope3=new rope(bobObject3.bobBody,roofObj.roofBody,0, 0) 
	rope4=new rope(bobObject4.bobBody,roofObj.roofBody,bobDiameter*1, 0)
	rope5=new rope(bobObject5.bobBody,roofObj.roofBody,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(230);
  roofObj.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed() { if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(bobObject1.bobBody,bobObject1.bobBody.position,{
		x:-50,y:-45
	}
	);
 } 
}


