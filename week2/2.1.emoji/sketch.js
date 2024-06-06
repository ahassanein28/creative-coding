function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  stroke("gold"); // set the stroke (line) color
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color 

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250)

  // draw the eyes 
  fill(0);
  ellipse(160, 180, 40, 40);
  ellipse(240, 180, 40, 40);

  // draw the mouth
  noFill();
  stroke(0);
  arc(200, 280, 120, 80, PI + 0.1, TWO_PI - 0.1); // arc is mouth

  // draw the tears 
  fill("blue")
  ellipse(160, 210, 20, 80);
  ellipse(240, 210, 20, 80);
}