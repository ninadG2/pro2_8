class mango
{

   constructor(x,y,radius)
   {
    var options = {
                    'friction':0  ,
                    'restitution':0 , 
                    'isStatic': true
                    
                  }
    
     this.body = Bodies.circle(x, y, radius, options);
     this.r = radius;
     this.x = x;
     this.y = y;
     World.add(world, this.body);
     this.image = loadImage("Plucking mangoes/mango.png")
   }

   show()
   {
       imageMode(CENTER)
       image(this.image, this.body.position.x, this.body.position.y, this.r, this.r )
       
      // ellipse(this.x, this.y, this.r)
   }

}