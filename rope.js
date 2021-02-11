class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            
            stiffness: 0.04,
            length: 10,
            pointB:{x:pointB.x, y:pointB.y}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.bodyA=bodyA;
        
        this.pointB=pointB;
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}