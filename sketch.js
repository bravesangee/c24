const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,pig2,log1;
var box3,box4,log2,box5,log3,log4,bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1=new pig(810,320)
    log1=new Log(810,200,300,PI/2)
    box3=new Box(700,180,70,70)
    box4=new Box(920,180,70,70)
    pig2=new pig(810,180)
    log2=new Log(810,100,300,PI/2)
    box5=new Box(810,90,70,70)
    log3=new Log(760,80,150,PI/7)
    log4=new Log(850,80,150,-PI/7)
    bird1=new Bird(100,100)

    ground = new Ground(600,height,12000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}