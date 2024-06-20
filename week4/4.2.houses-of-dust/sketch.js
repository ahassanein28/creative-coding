let poem = ''; 


let grammer = tracery.createGrammar ({
  "origin":["A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#"],
  "material": ["MUD","BRICKS","LEAVES","WEEDS","STEEL","SAND","DUST","WOOD","STRAW","DISCARDED CLOTHING"],
  "place": ["IN A GREEN, MOSSY TERRAIN","BY THE SEA","IN DENSE WOODS", "IN A DESERT", "IN A COLD, WINDY CLIMATE","BY A RIVER","IN MICHIGAN","UNDERWATER","INSIDE A MOUNTAIN"],
  "light_source":["CANDLES","ALL AVAILABLE LIGHTING","ELECTRICITY","NATURAL LIGHT"],
  "inhabitants":["PEOPLE WHO SLEEP VERY LITTLE","VEGETARIANS","HORSES AND BIRDS", "PEOPLE SPEAKING MANY LANGUAGES WEARING LITTLE OR NO CLOTHING","ALL RACES OF MEN REPRESENTED WEARING PREDOMINANTLY RED CLOTHING","CHILDREN AND OLD PEOPLE","LITTLE BOYS","FRIENDS","PEOPLE WHO LOVE TO READ"]
});

function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
}

function draw() {
  background(220);
  poem = grammer.flatten("#origin#");
  textFont("Impact");
  textSize(25);
  text(poem,200,200);
}