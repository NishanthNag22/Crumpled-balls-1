class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
       fill("blue")
       var angle=this.body.angle
       push();
       var pos=this.body.position;
       translate(angle);
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.r);
       pop();
    }
}