// Define array of circles 
// Source: https://www.w3schools.com/js/js_arrays.asp
// https://p5js.org/examples/arrays-array.html
// 
let circles = [{
  x: 0, 
  y: 0,
  xspeed: 5, 
  yspeed: 7, // the only way I was able to get the 'bounce' effect was when I differed the speeds, is this wrong?? 
  color: 'lightpink' // first circle color 
  }]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgrey');
  translate(width / 2, height / 2); // move to center 


// loop for all the circles 
for (let i = 0; i < circles.length; i += 1){
  fill(circles[i].color); 
  circle(circles[i].x, circles[i].y,50) 

// making circles reverse direction once it hits a boundary 
  if (circles[i].x > 175 | circles[i].x < -175){
    circles[i].xspeed = circles[i].xspeed * -1;
  }
  if (circles[i].y > 175 | circles[i].y < -175){
    circles[i].yspeed = circles[i].yspeed * -1;
  }

  circles[i].x += circles[i].xspeed; 
  circles[i].y += circles[i].yspeed; 
  }
}


// mouse click function to add new circles 
// source: https://p5js.org/reference/#/p5/mouseClicked
// https://www.geeksforgeeks.org/p5-js-mouseclicked-function/#
function mouseClicked() { 
    circles.push({
      x: 0, 
      y: 0, 
      xspeed: 5, 
      yspeed: 7, 
      color: [random(255), random(255), random(255)] // random colors for each new circle 
      // source: https://editor.p5js.org/aferriss/sketches/HJKCR03uG
    });
}
