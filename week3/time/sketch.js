let now, hours, minutes, seconds;
let secAngle, minAngle, hourAngle;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  // current time 
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  // Map the time units to angles
  secAngle = map(seconds, 0, 59, 0, 255);
  minAngle = map(minutes, 0, 59, 0, 255);
  hourAngle = map(hours, 0, 23, 0, 255); 


  // Map the hours to the background color
  // trying to find error here 
 let dayColor = color(255,254,254);
 let nightColor = color(0,0,138);
 let bg = lerpColor(nightColor,dayColor, map(hours, 6, 20, 0, 1));
  background(bg);

  // Draw the flower
  translate(width / 2, height / 2); // center flower 
  rotate(secAngle); // rotate by seconds 
  // draw petal for each hour 
  for (let i = 0; i < hours; i++) { 
    push()
    rotate(i * (360 / hours));
    let flowerColor; // change between pink and purple every 60 seconds 
    if (seconds < 59) {
      flowerColor = color(255,105,180);
    } else { 
      flowerColor = color(128, 0, 128);
    }
    fill(flowerColor)
    ellipse(0, -100, 50, 200); // rounded petal
    pop();
  }
}
