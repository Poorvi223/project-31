class Plinko{
    constructer(x,y,r){
        var options = {
            restitution : 1
        }
        this.body = Bodies.circle(x,y,this.r,options);
        this.r = r;
        World.add(world,this.body);
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            ellipseMode(RADIUS);
            fill("white")
            ellipse(0,0,this.r,this.r);
        }}