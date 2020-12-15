const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinkos=[];
var particles=[];
var divisions=[];

function setup() {
createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(100,795,1800,20)


for (var k=0;k<=width; k=k+80){
  divisions.push(new Divisions(k,685,10,200))
}

for (var j =40;j<=width; j=j+50){
 plinkos.push(new Pinko(j,175,5));
}

for (var j =15;j<=width-10; j=j+50){
  plinkos.push(new Pinko(j,275,5));
 }

 for (var j =40;j<=width; j=j+50){
  plinkos.push(new Pinko(j,375,5));
 }

 for (var j =16;j<=width-10; j=j+50){
  plinkos.push(new Pinko(j,475,5));
 }

  Engine.run(engine);
}

function draw() {
  background("black");  
  ground.display();
 for(var i=0;i<plinkos.length;i=i+1){
   plinkos[i].display();
 }
 for(var t=0;t<divisions.length;t=t+1){
  divisions[t].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
for(var p=0;p<particles.length;p=p+1){
  particles[p].display();
}
  drawSprites();
}
