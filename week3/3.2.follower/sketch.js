let debug = false; 

let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor; 

let score = 0;

let x = 0;
let y = 0;
let d = 0; 

let goalx = 0; 
let goaly = 0; 
let goalSize = 30; 

// declaring variables for images 
let bgImage, followerImg, goalImg; 

function preload() { 
bgImage = loadImage(' ');
followerImg = loadImage(' ');
goalImg = loadImage(' ');

}

function setup() {
  createCanvas(800, 800);

  x = random(width);
  y = random (height);
  
  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background(bgImage);

  image(goalImg, goalx,goaly,goalSize,goalSize); 



  // distance formula 
  let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  // add the movement 
  x += xspeed;
  y += yspeed; 


  // bird for the follower 
  image(followerImg, x,y,50);

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

  // check for collision with follower 
  if (d < 25){
    score -= 1; 
    x = random(width);
    y = random(height);
  } 

  // check for collision with square
  if (
    mouseX > goalx & 
    mouseX < goalx + goalSize & 
    mouseY > goaly &
    mouseY < goaly + goalSize
    ){
    score += 1;
    // reset follower
    x = random(width);
    y = random(height);
    
    // reset goal
    goalx = random(width);
    goaly = random(height);
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