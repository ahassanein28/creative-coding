
let img; 
let sampleX = 20;
let sampleY = 20;

function preload(){
	img = loadImage('https://ahassanein28.github.io/creative-coding/week2/pixels/pixelPhoto.jpg');
}

function setup() {
  createCanvas(400, 700);
  img.loadPixels();
}

function draw() {
  background(225);
  noStroke();
  translate(10, 10);
  //image(img, 0,0);

  for (let x = 0; x <= img.width; x +=sampleX){
    for (let y = 0; y <= img.height; y += sampleY){

      var index = (x + y * img.width) * 4; 
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      fill(r,g,b);
      ellipse(x,y,sampleX,sampleY);

    }
  }


// Add lyrics 
  fill(227,182,206);
  strokeWeight(3);
  stroke(7)
  textSize(12);
  textFont('Times New Roman');


  text('I said "remember this moment" in the back of my mind. \nThe time we stood with our shaking hands, the crowds in stands went wild. \nWe were the kings and the queens, and they read off our names. \nThe night you danced like you knew our lives would never be the same. \nYou held your head like a hero, on a history book page. \nIt was the end of a decade, but the start of an age. Long live the \nwalls we crashed through. How the kingdom lights shined, \njust for me and you. I was screaming, "Long live all the magic we made" \nAnd bring on all the pretenders! One day, we will be remembered. \nI said, "remember this feeling," I passed the pictures around; \nOf all the years that we stood there on the sidelines, wishing for right now. \nWe are the kings and the queens, you traded your baseball cap for a crown. \nWhen they gave us our trophies, and we held them up for our town. \nThe cynics were outraged. Screaming, "This is absurd" \'Cause for a moment, \na band of thieves in ripped up jeans got to rule the world. \nLong live the walls we crashed through, how the kingdom lights shined \njust for me and you. I was screaming, \n"Long live all the magic we made" And bring on all the pretenders, \nI\'m not afraid. Long live all the mountains we moved, I had \nthe time of my life fighting dragons with you. I was screaming, \n"Long live that look on your face" And bring on all the pretenders. \nOne day we will be remembered. \nHold on to spinning around. \nConfetti falls to the ground. \nMay these memories break our fall.\n Will you take a moment? Promise me this. \nThat you\'ll stand by me forever. \nBut if, God forbid, fate should step in, And force us into a goodbye, \nIf you have children someday, \nwhen they point to the pictures; \nPlease tell them my name. \nTell them how the crowds went wild. \nTell them how I hope they shine. \nLong live the walls we crashed through, \nI had the time of my life with you \nLong, long live the walls we crashed through. \nHow the kingdom lights shined just for me and you. \nAnd I was screaming, "Long live all the magic we made" \nAnd bring on all the pretenders, I\'m not afraid. \nSinging "long live all the mountains we moved, \nI had the time of my life fighting dragons with you. \nAnd long, long live the look on your face, \nAnd bring on all the pretenders. \nOne day, we will be remembered.           -- "Long Live" by Taylor Swift', 8, 8);

}