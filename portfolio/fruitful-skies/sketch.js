// source for making a cloud 
// https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V

// source for bird
// https://editor.p5js.org/zielinsj/sketches/NAzOThoLl 

// fruits and their points 
let fruits = { 
  '🍇': 1,
  '🍈': 2, 
  '🍉': 3,
  '🍊': 4,
  '🍋': 5,
  '🍌': 6,
  '🍑': 7,
  '🍐': 8,
  '🍏': 9,
  '🍎': 10,
  '🥭': 11, 
  '🍍': 12
  }; 

// array to store the fruit objects 
let fruitObjects = []; 

let debug = false; 

let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor; 

let score = 0;
let goalSize = 50; 

let x = 0;
let y = 0;
let d = 0; 

// declaring variables for clouds 
let cloudx = 100;
let cloudy = 100; 

function setup() {
  createCanvas(800, 800);

  x = random(width);
  y = random(height);
  
// create multiple fruit objects at random positions 
  for (let i = 0; i < 10; i++ ) { 
    let fruit = random(Object.keys(fruits));
    let fruitObject = { 
      fruit: fruit,
      x: random(width),
      y: random(height)
    };
    fruitObjects.push(fruitObject);
  }
}

function draw() {
  background(255, 182, 193);

  // add the clouds 
  makeCloud((cloudx - 120) % width, cloudy + 100);
  makeCloud(cloudx % width, cloudy - 50);
  makeCloud(cloudx % width, cloudy + 250);
  makeCloud((cloudx + 125) % width, cloudy + 150);
  makeCloud((cloudx + 175) % width, cloudy - 20);
  makeCloud((cloudx + 300) % width, cloudy + 250);
  makeCloud((cloudx + 320) % width, cloudy + 90);
  makeCloud((cloudx + 400) % width, cloudy - 50);
  makeCloud((cloudx + 475) % width, cloudy + 150);
  makeCloud((cloudx + 600) % width, cloudy - 50);
  makeCloud((cloudx + 610) % width, cloudy + 250);
  makeCloud((cloudx + 675) % width, cloudy + 100);

  
  cloudx += 1; 

  // distance formula 
  d = Math.sqrt((x - mouseX)**2 + (y - mouseY)**2);

  if (mouseX > x){
  // move to the right 
    xspeed = speedfactor;
} else { 
  // move to the left
    xspeed = -speedfactor;
}

  if (mouseY > y){
  // move to the right 
    yspeed = speedfactor;
} else { 
  // move to the left
    yspeed = -speedfactor;
}

  // add the movement 
  x += xspeed;
  y += yspeed; 

// draw fruits
  textSize(32);
  for(let fruitObject of fruitObjects) { 
    text(fruitObject.fruit, fruitObject.x, fruitObject.y);
  }

  // bird for the follower 
  fill(0);
  triangle(x, y, x + 3, y + 13, x + 15, y - 25);
  ellipse(x, y, 22, 5);

  // check for collision with follower 
  if (d < 25){
    score -= 1; 
    x = random(width);
    y = random(height);
  } 

  // check for collision with square
for(let i = fruitObjects.length - 1; i >= 0; i--) { 
  let fruitObject = fruitObjects[i];
  if (
    mouseX > fruitObject.x &&
    mouseX < fruitObject.x + goalSize &&
    mouseY > fruitObject.y &&
    mouseY < fruitObject.y + goalSize
    ) {
  score += fruits[fruitObject['fruit']];

  // remove fruit 
  fruitObjects.splice(i,1);

  // add new fruit 
  let newFruit = random(Object.keys(fruits));
  let newFruitObject = {
    fruit: newFruit, 
    x: random(width),
    y: random(height)
  };
  fruitObjects.push(newFruitObject);

    // reset follower
    x = random(width);
    y = random(height);
  }
}

  if (debug){
    textSize(30);
    text("mouseX: " + mouseX, 50,50);
    text("mouseY: " + mouseY, 50,80);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 150);
    text("d: " + d, 50, 180); 
  }

    textSize(50);
    text("Score: " + score, 300, 50);
}

// function to make clouds 
function makeCloud(cloudx, cloudy) {
  fill(250);
  noStroke();
  ellipse(cloudx,cloudy,70,50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}