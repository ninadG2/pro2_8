class ground
{

   constructor(x,y,width,height)
   {
    var options = {
                    'isStatic':true
                  }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add(world, this.body)
    

   }

   display()
   {
     var groundpos = this.body.position;
     fill('#9D5818')
     rect(groundpos.x, groundpos.y, this.width, this.height)
     rectMode(CENTER)
   }

}