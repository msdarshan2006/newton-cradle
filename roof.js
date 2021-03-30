class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.xpos=x;
        this.ypos=y;
        this.w=width;
        this.h=height;
        this.roofBody=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.roofBody);
        console.log(this.roofBody);
        

    }
     display() {
         push();
         translate(this.roofBody.position.x,this.roofBody.position.y);
         rectMode(CENTER);
         fill("blue");
        rect(0,0,this.w,this.h);
         pop();
    }
}