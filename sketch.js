const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


 
   

  
    log1 = new Log(900,260,300, PI/2.5);
   
    log3 =  new Log(810,120,300, -PI/2.5);

    
   // log4 = new Log(760,120,150, PI/7);
   // log5 = new Log(870,120,150, -PI/7);
    ball=new Ball(820,50,50)
   

    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    background("grey")
    
    Engine.update(engine);
    //strokeWeight(4);
    
   
    
    log1.display();

   
    log3.display();

    
  //  log4.display();
    //log5.display();
       ball.display();
   
    //log6.display();
     
}

