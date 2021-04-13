//declaring the constants and variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dbin1, dbin2, dbin3;
var dustbinImg, paperImg;

function preload(){
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	//creating the canvas
	createCanvas(1400, 700);

	//creating our own world
	engine = Engine.create();
	world = engine.world;

	//creating the different objects from the classes
	ground = new Ground(700,690,1400,20);

	paper = new Paper(100,670,50);

	dbin1 = new Dustbin(900,630,20,60);
	dbin2 = new Dustbin(1050,630,20,60);
	dbin3 = new Dustbin(975,670,170,20);

	//running the engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  //displaying the different classes
 
  ground.display();
 
  dbin1.display();
  dbin2.display();
  dbin3.display();
  image(dustbinImg,975,600,170,200);

  paper.display();

  //when up key is pressed then applyforce to the paper
  if (keyDown("up")){
	  keyPressed();
  }
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
}
}


