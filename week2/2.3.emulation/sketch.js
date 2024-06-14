// My attemt of this art work 
// Title: Meules No. 7 (From the Homage to Monet's 
// "Meules" Series 
// Artist: Vera Molnar 
// Programmed in 1977 
// https://spalterdigital.com/artworks/meules-no-7/


function setup() {
  createCanvas(1225, 1225);
  noLoop();
}

function draw() {

  // matching the background color 
  // based on eyedropper tool 
  background(232,238,238);  

  // labeling the specific colors 
  // needed using eyedropper tool 
  // source: https://editor.p5js.org/allison.parrish/sketches/9mz4_ot5b
  const colors = [
    color(198, 81, 64),
    color(42, 103, 98),
    color(189,129,137)
    ];

  // push the grid out of the corner 
  translate(50,50);



  for (let x = 0; x < 24; x += 1) {
    for(let y = 0; y < 24; y += 1) {
      push();

      // move the lines closer to eachother
      translate(x * 50, y * 50);

      // get rid of the borders 
      noStroke();

      // fill colors randomly baseed 
      // on options of three colors 
      fill(random(colors));

      // make the lines rotate randomly
      rotate(random(360));

      // draw the bubble(???) lines
      ellipse (2,2, 160, 10);

      pop();
    }
  }

}