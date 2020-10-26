class pig{


constructor(x,y){
    var option={
    'restitution':1,
    'friction':0.3    
    }
this.body=Bodies.rectangle(x,y,50,50,option);
this.width=50;
this.height=50

World.add(world,this.body)
}


display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    fill("green")
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop();

}
}
