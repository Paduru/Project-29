const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15;
var bb1,
  bb2,
  bb3,
  bb4,
  bb5,
  bb6,
  bb7,
  bb8,
  bb9,
  bb10,
  bb11,
  bb12,
  bb13,
  bb14,
  bb15;

var ball, slingshot, polygonImg;

var ground, stand1, stand2;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);

  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 250, 10);

  b1 = new Block(300, 275, 30, 40);
  b2 = new Block(330, 275, 30, 40);
  b3 = new Block(360, 275, 30, 40);
  b4 = new Block(390, 275, 30, 40);
  b5 = new Block(420, 275, 30, 40);
  b6 = new Block(450, 275, 30, 40);
  b7 = new Block(480, 275, 30, 40);
  b8 = new Block(330, 235, 30, 40);
  b9 = new Block(360, 235, 30, 40);
  b10 = new Block(390, 235, 30, 40);
  b11 = new Block(420, 235, 30, 40);
  b12 = new Block(450, 235, 30, 40);
  b13 = new Block(360, 195, 30, 40);
  b14 = new Block(390, 195, 30, 40);
  b15 = new Block(420, 195, 30, 40);

  bb1 = new Block(610, 175, 30, 40);
  bb2 = new Block(640, 175, 30, 40);
  bb3 = new Block(670, 175, 30, 40);
  bb4 = new Block(700, 175, 30, 40);
  bb5 = new Block(730, 175, 30, 40);
  bb6 = new Block(760, 175, 30, 40);
  bb7 = new Block(790, 175, 30, 40);
  bb8 = new Block(640, 135, 30, 40);
  bb9 = new Block(670, 135, 30, 40);
  bb10 = new Block(700, 135, 30, 40);
  bb11 = new Block(730, 135, 30, 40);
  bb12 = new Block(760, 135, 30, 40);

  var options = {
    density: 0.9,
  };
  ball = Bodies.circle(50, 200, 20, options);
  World.add(world, ball);

  slingshot = new SlingShot(ball, { x: 100, y: 200 });
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  fill("lightblue");
  textSize(20);
  text("Drag the Hexagon and release", 10, 25);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();
  bb6.display();
  bb7.display();
  bb8.display();
  bb9.display();
  bb10.display();
  bb11.display();
  bb12.display();

  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40, 40);

  slingshot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}
