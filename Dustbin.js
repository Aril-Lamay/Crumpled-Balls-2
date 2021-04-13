class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
    }
}