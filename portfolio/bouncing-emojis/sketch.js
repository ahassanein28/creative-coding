// Define array of circles 
// Source: https://www.w3schools.com/js/js_arrays.asp
// https://p5js.org/examples/arrays-array.html
// 

let emojis = 
['🍍','🥭','🍎','🍏','🐺','🐮','🐻','🐸','🐔','🐟','🪼','🐧','🐝','🏈','🏐','⚽','💎','💍','🀄','🌈','🩷'];
let emoji;

function setup() {
  createCanvas(400, 400);
  textSize(32);


emoji = [{
  x: random(-175, 175),  
  y: random(-175, 175),
  xspeed: random(-5, 5), 
  yspeed: random(-5, 5),
  obj: random(emojis)
}];

}

function draw() {
  background('lightgrey');
  translate(width / 2, height / 2); // move to center 


// loop for all the circles 
for (let i = 0; i < emoji.length; i += 1){
  text(emoji[i].obj, emoji[i].x, emoji[i].y);

// making circles reverse direction once it hits a boundary 
  if (emoji[i].x > 175 | emoji[i].x < -175){
    emoji[i].xspeed = emoji[i].xspeed * -1;
  }
  if (emoji[i].y > 175 | emoji[i].y < -175){
    emoji[i].yspeed = emoji[i].yspeed * -1;
  }

  emoji[i].x += emoji[i].xspeed; 
  emoji[i].y += emoji[i].yspeed; 
  }
}


// mouse click function to add new circles 
// source: https://p5js.org/reference/#/p5/mouseClicked
// https://www.geeksforgeeks.org/p5-js-mouseclicked-function/#
function mouseClicked() { 
  emoji.push({
    x: random(-175, 175),  
    y: random(-175, 175),
    xspeed: random(-5, 5), 
    yspeed: random(-5, 5),
    obj: random(emojis)
  });
}
