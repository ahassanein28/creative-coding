function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 192, 203);

  // whites of the eyes 
  noStroke();
  fill(255);
  circle(width/2 - 100, height/2, 200); 
  circle(width/2 + 100, height/2, 200); 

  // iris 
  let xc = constrain(mouseX, 170, 230);
  let xs = constrain(mouseY, 170, 230);
  fill(0);
  circle(xc - 100, xs, 100); 
  circle(xc + 100, xs, 100); 

  // glare 
  fill(255);
  circle(xc - 80, xs - 20, 20);
  circle(xc + 120, xs - 20, 20);

  // eyebrows
  stroke(0);
  strokeWeight(10);
  line(width/2 - 150, height/2 - 100, width/2 - 50, height/2 - 120);
  line(width/2 + 150, height/2 - 100, width/2 + 50, height/2 - 120);

}