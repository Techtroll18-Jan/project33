class Snow{
    constructor(x, y, width, height,angle) {
        var options = {
             
            'friction' :0.1,
            'density':0.001,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("snow5.jpg")
        World.add(world, this.body);
      }
      display(){
        var angle= this.body.position;
        
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
          pop();
        
      }
  }
 
    