let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50; 

let ripplers = [];

class Rippler {
  constructor(x,y){
    this.x = x, 
    this.y = y, 
    this.d = 0

    // adding random colored ripples! 
    this.color = color(random(255), random(255), random(255));
  }

  draw(){
    this.d += 1;
    stroke(this.color);
    circle(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(126, 192, 237);
  stroke("white");
  strokeWeight(2);
  noFill();

for (let i = 0; i < ripplers.length; i++){
  ripplers[i].draw();
  }
}


function mousePressed(){

  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_d = 0; 

  ripplers.push(new Rippler(mouseX, mouseY))


}