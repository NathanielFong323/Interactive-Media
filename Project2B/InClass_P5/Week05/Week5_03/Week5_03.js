let font;
let points;
let bounds;

function preload() {
  font = loadFont('data/PRESSSTART2P-REGULAR.TTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("blue");
  sampleF=0.2;
  points = font.textToPoints("diamonds", width/4-200, height/2, 200, {
    sampleFactor:sampleF,
    simplifyThreshold:0});
  rectMode(CENTER);
  //bounds = font.textBounds("diamonds", width/4-200, height/2, 400);
}


function draw() {
  background("blue");
  //sampleF = map(mouseX, 0, width, 0, 1); //density of lines
  points = font.textToPoints("diamonds", width/4-260, height/3, 150, {
    sampleFactor:sampleF,
    simplifyThreshold:0});
  //fill(255, 0, 0)
  for (let i=0; i<points.length; i++){
  circle(points[i].x+random(2), points[i].y+random(2), 10)
  stroke("yellow");
  line(points[i].x, points[i].y, mouseX, mouseY);
  fill (random(255), 0, 0)
  //circle(points[i].x+random(5), points[i]+random(5), 10);
  }
}
