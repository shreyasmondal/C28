class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0,
          friction:0.1,
          density:1.2
        }
      
      this.body = Bodies.rectangle(x,y,15,15,options);
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("red");
      rect(0,0, 10,10);
      pop()
    }
}

      