class slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.slingshot = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.slingshot);
    }
    display(color) {
        if (this.slingshot.bodyA) {
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(color);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    attach(){
        this.slingshot.bodyA = bodyA;
    }
}
