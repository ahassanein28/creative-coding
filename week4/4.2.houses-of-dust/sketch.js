let poem = ''; 


let grammer = tracery.createGrammar ({
  "origin":["A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#"],
  "material": ["TEARDROPS", "PAPER AIRPLANES","SILK","VELVET","GOLD","DIAMONDS","PEARLS"],
  "place": ["IN CENTENNIAL PARK", "CITY OF DREAMERS", "THE BLACK DOG","AN ALLY WAY IN PARIS", "CORNELIA STREET","DIVE BAR ON THE EAST SIDE","CRUMBLING CASTLES"],
  "light_source":["MOONLIGHT","DAYLIGHT","STARLIGHT","SUNSET","CITY LIGHTS","CANDLELIGHT","SPOTLIGHT"],
  "inhabitants":["LOVERS","HEARTBREAK PRINCE","MISS AMERICANA","MARY","DAYDREAMERS","VIPERS","THE BOLTER"]
});

function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
  textFont("Impact");
  textSize(25);
}

function draw() {
  background(255,182,193);
  poem = grammer.flatten("#origin#");
  text(poem, random(width), random(height));
}