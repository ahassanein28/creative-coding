function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  // setting the background to white
  background(220);

  // push the grid out of the corner more centered 
  translate(215,215);

  for (let x = 0; x < 8; x += 1) {
    for(let y = 0; y < 8; y += 1) {
      push();

      // move the drawing plan to 
      // add a new circle
      translate(x * 110, y * 110);

      // line thickness 
      strokeWeight(5);

      // line color  
      stroke(random(0,255),128,228);

      // fill color 
      fill(238, random(0,255), 238);

      // draw the circle
      ellipse (0,0, random(50,100),100);

      pop();
    }
  }
}