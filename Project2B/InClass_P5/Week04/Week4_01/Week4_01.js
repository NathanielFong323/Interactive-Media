function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 0);
  frameRate(30);
}


function draw() {
  background(255, 200, 0, 30);
  
  fill(0);
  rect(mouseX, mouseY, 100, 200)
  //ellipse(mouseX, mouseY, 100, 200);
  
  stroke(255);
  strokeWeight(4);
  //circle(100, 100, 60);
  textSize(36);
  //line(mouseX, mouseY, width/2, height/2);
  //text("0 0", mouseX-18, mouseY);
}
