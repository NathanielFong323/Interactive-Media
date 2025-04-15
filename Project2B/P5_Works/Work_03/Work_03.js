var capture;
var button;
var snapshot = [];
let captureWidth = 320;
let captureHeight = 240;

function setup() {
  createCanvas(captureWidth, captureHeight);
  capture = createCapture(VIDEO);
  capture.size(captureWidth, captureHeight);
  button = createButton('Make a portrait!');
  button.mousePressed(takesnap);
  background(60);
}

function takesnap() {
  snapshot = capture.get();
  print(snapshot);
}

function draw() {
 // background(220);
  if(snapshot.width > 0){
  //image(snapshot, 0, 0, 640, 480);
  let x = random(0, captureWidth);
  let y = random(0, captureHeight);
  noStroke();
  dotcolour = snapshot.get(x, y);
  fill(dotcolour);
  circle(x, y, random(6, 60));
  }
}d
