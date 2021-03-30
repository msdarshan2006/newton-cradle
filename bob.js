class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8 
        }
        this.xpos=x;
        this.ypos=y;
        this.radius=r;
        this.bobBody=Bodies.circle(x,y,r/2,options);
        World.add(world,this.bobBody);
        console.log(this.bobBody);
        

    }
    display() {
        push();
        translate(this.bobBody.position.x,this.bobBody.position.y);
        rectMode(CENTER);
        fill("blue");
       ellipse(0,0,this.r,this.r);
        pop();
   }

}