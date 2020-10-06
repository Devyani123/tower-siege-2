const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling1, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var py1, py2, py3, py4, py5,py6,py7,py8,py9,py10,py11,py13,py14;

function setup() {
  createCanvas(1300, 650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 600, 1500,50);
  box1 = new Box(400, 200, 50, 50);
  box2 = new Box(450, 200, 50, 50);
  box3 = new Box(500, 200, 50, 50);
  box4 = new Box(550, 200, 50, 50);
  box5 = new Box(600, 200, 50, 50);
  box6 = new Box(425, 100, 50, 50);
  box7 = new Box(475, 100, 50, 50);
  box8 = new Box(525, 100, 50, 50);
  box9 = new Box(575, 100, 50, 50);
  box10 = new Box(450, 50, 50, 50);
  box11 = new Box(500, 50, 50, 50);
  box12 = new Box(550, 50, 50, 50);
  box13 = new Box(475, -100, 50, 50);
  box14 = new Box(525, -100, 50, 50);
  box15 = new Box(500, -200, 50, 50);
  py1 = new Box(845, 200, 50, 50);
  py2 = new Box(895, 200, 50, 50);
  py3 = new Box(995, 200, 50, 50);
  py4 = new Box(945, 200, 50, 50);
  py8 = new Box(975, 100, 50, 50);
  py10 = new Box(820, 100, 50, 50);
  py11 = new Box(845, 50, 50, 50);
  py12 = new Box(950, 50, 50, 50);
  py13 = new Box(890, 0, 50, 50);
  py14 = new Box(925, 0, 50, 50);
  py9 = new Box(795, 200, 50, 50);
  py5 = new Box(870, 100, 50, 50);
  py6 = new Box(920, 100, 50, 50);
  py7 = new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500,300, 300, 20);
  stand2 = new Ground(900, 400, 300, 20);
  sling1 = new slingshot(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("red", "pink");
  box2.display("red", "pink");
  box3.display("red", "pink");
  box4.display("red", "pink");
  box5.display("red", "pink");
  box6.display("indigo", "pink");
  box7.display("indigo", "pink");
  box8.display("indigo", "pink");
  box9.display("indigo", "pink");
  box10.display("green", "pink");
  box11.display("green", "pink");
  box12.display("green", "pink");
  box13.display("orange", "pink");
  box14.display("orange", "pink");
  box15.display("saffron", "pink");
  py1.display(rgb(229, 116, 117), "cyan")
  py2.display(rgb(229, 116, 117), "cyan")
  py3.display(rgb(229, 116, 117), "cyan")
  py4.display(rgb(110, 71, 102), "cyan")
  py5.display(rgb(110, 71, 102), "cyan")
  py6.display(rgb(251, 189, 76), "cyan")
  py7.display(rgb(251, 189, 76), "cyan")
  py8.display(rgb(251, 189, 76), "cyan")
  py9.display(rgb(251, 189, 76), "cyan")
  py10.display(rgb(251, 189, 76), "cyan")
  py11.display(rgb(251, 189, 76), "cyan")
  py12.display(rgb(251, 189, 76), "cyan")
  py13.display(rgb(251, 189, 76), "cyan")
  py14.display(rgb(251, 189, 76), "cyan")
  sling1.display("limegreen");
  stand1.display();
  stand2.display();
  ball.display("darkblue", "orange");
  
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling1.fly();
}