// inspired by https://happycoding.io/tutorials/p5js/arrays/fading-grid
// https://editor.p5js.org/KevinWorkman/sketches/yoCVXKFre

const rows = 30;
const columns = 30; 
const fadeSpeed = 1;
let cells = [];

function setup () {
  createCanvas(800,800);
  colorMode(HSB, 255); // source: https://editor.p5js.org/kawinta.s/sketches/mcIDuvakU 
  // and https://p5js.org/reference/#/p5/hue

  for(let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(255);
    }
  }
}

function draw() { 
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) { 
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 255; 
  }

  for (let r = 0; r < rows; r++) { 
    for(let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c],0,255); 
      const y = height * (r / rows);
      const x = width * (c / columns); 

      fill((r / rows) * 255, 255, cells[r][c]);
      rect(x, y, cellWidth, height)
    }
  }
}