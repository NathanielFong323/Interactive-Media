var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  mic=new p5.AudioIn();
  mic.start();
  analyzer=new p5.Amplitude();
  background(0, 0, 0);
  textAlign(CENTER, CENTER);
}

function draw() {
  noStroke();
  background(0, 0, 0, 0);
  getAudioContext().resume();
  let volume=mic.getLevel();
  let mappedVol=map(volume, 0, 0.1, 30, 100);
  let mappedCol=map(mappedVol, 30, 100, 20, 160);
  for (let x = 0; x < width; x += 5) {
    let y = sin(x * 0.01 + frameCount * 0.05) * mappedVol + height/2;
    fill (mappedCol, mappedCol, mappedCol);
    ellipse(x, y, 10);
  }
}

//function windowResized(){
//  resizeCanvas(windowWidth, windowHeight);
//  background(255, 255, 0);
//}
