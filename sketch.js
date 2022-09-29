const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;s
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg.png"

/**
 *  ! ATENTION:
 
 * ? Contribution code:
 * !! preencha de acordo com os comenários em laranja nos arquivos:
 * * skecth.js e class Pig em pig.js
 */


function preload() {
   backgroundImg = loadImage("sprites/bg.png");
    changeBackgroundh()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);

    //encontrar o valor em radianos para os troncos de cima se aboiarem um no outro
    log4 = new Log(760,120,150, PI/4);
    log5 = new Log(870,120,150, -PI/3);

    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   
   if(backgroundImg){
    background(backgroundImg);


    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //Alterar a posição do estilingue no código para o passáro ficar na frente
    slingshot.display();    
 }

}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}



async function changeBackgroundh(){


    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
      
      
    
    var responseJSON = await response.json();
        console.log(responseJSON.datetime)
    
       
        var datetime = responseJSON.datetime
        var hour = datetime.slice(11, 13)
      
        backgroundImg = loadImage(bg);
    
       
        if(hour >= 6 && hour<=7){
    
            bg = "sprites/bg.png";
    
        } else {
    
            bg ="sprites/bg2.jpg";
        }
    
     
    
      }
    
