
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var GameState = "onBoy"
var mango1, mango2, mango3, mango4, mango5;
var stone1, boy1;
var connector1;
var tree1;
var ground1;



function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone1 = new stone(132,200,50,50)
	mango1 = new mango(Math.round(random(484, 750)),Math.round(random(354, 298)),50,50);
	mango2 = new mango(Math.round(random(491, 583)),Math.round(random(380, 242)),50,50);
	mango3 = new mango(Math.round(random(527, 705)),Math.round(random(389, 253)),50,50);
	mango4 = new mango(Math.round(random(542, 611)),Math.round(random(363, 223)),50,50);
	mango5 = new mango(Math.round(random(505, 578)),Math.round(random(401, 318)),50,50);
	tree1 = new tree(350,100, 500,600)
  boy1 = new boy(210,568,300,300)
	ground1 = new ground(368, 675, 1300, 50)
	connector1 = new connector(stone1.body, {x:115,y:490})
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  //console.log("stonea ="+ stone1.body.position.x)
  console.log(mouseX)
  drawSprites(); 


  connector1.showThis();
  tree1.display();
  mango1.show();
  mango2.show();
  mango3.show();
  mango4.show();
  mango5.show(); 
  boy1.display();
  stone1.display();
  ground1.display();
  
  detectcollision(stone1, mango1)
  detectcollision(stone1, mango2)
  detectcollision(stone1, mango3)
  detectcollision(stone1, mango4)
  detectcollision(stone1, mango5)

 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}


 function mouseReleased()
  {
   connector1.fly();
   GameState = "launched";
  }

 function keyPressed()
{
    if(keyCode === 32)
    {
       Matter.Body.setPosition(stone1.body, {x:132, y:420})
       connector1.attach(stone1.body)
    }

}

 function detectcollision(lStone, lMango)
 {
   mangoBodyPosition = lMango.body.position
   stoneBodyPosition = lStone.body.position
   
   lStone = stone1;
   lMango = mango1;

   

   var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   //console.log("dist" + distance);
   //console.log("r"+lStone.r + lMango.r)
     if(distance<=lMango.r + lStone.r)
    {
      Matter.Body.setStatic(lMango.body, false)
      console.log("r"+lStone.r + lMango.r)
    } 

    console.log("dista = "+distance)
    // console.log("manR = "+lMango.r)
    // console.log("stoR = "+lStone.r)


 }



