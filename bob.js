class Bob{
    constructor(x,y,radius){
        var options={
            "isStatic" : true,
            "friction":0.5,
            "restitution" :0.3,
            "density":1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("pink");
        fill("pink");
        circle(0, 0, this.radius);
        pop();
    }

}