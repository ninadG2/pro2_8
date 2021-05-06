class stone
{

   constructor(x,y,radius)
   {
    var options  = {
                     
                     'density':0.1,
                     'restitution':0,
                     'friction':0
                   }
    this.body = Bodies.circle(x, y, radius, options)
    //this.width = width;
    //this.height = height;
    this.r = radius
    World.add(world, this.body)
    this.image = loadImage("Plucking mangoes/stone.png")

   }

   display()
   {
     imageMode(CENTER)
     var stonePos = this.body.position;
     image(this.image, stonePos.x, stonePos.y, this.r, this.r)
   }

  

}