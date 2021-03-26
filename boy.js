class Boy{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("pink");
      rect(0,0, 40,40);
      pop()
    }
}