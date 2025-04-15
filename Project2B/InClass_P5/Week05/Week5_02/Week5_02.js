let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}


function draw() {
  background(0, 12);
  image(capture, mouseX, mouseY, 360, 240);
  filter(THRESHOLD);
  //filter(BLUR, 2);
}
