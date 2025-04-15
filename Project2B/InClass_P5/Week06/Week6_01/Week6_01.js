var song, string, analyzer, mic;
function preload(){
  //song=loadSound('data/triumph-jingle-40125.mp3');
  song=loadSound('data/screaming-soldier-tf2.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  mic=new p5.AudioIn();
  mic.start();
  analyzer=new p5.Amplitude();
  background(255, 255, 0);
  string='Hello';
  textAlign(CENTER, CENTER);
}

function draw() {
  //let volume=analyzer.getLevel();
  let volume=mic.getLevel();
  let mappedVol=map(volume, 0, 1.0, 10, width);
  textSize(mappedVol);
  circle(mouseX, mouseY, mappedVol);
  push();
    translate(width/2, height/2);
    rotate(mappedVol);
    text(string, 0, 0);
  pop();
  console.log(volume);
}

function mousePressed(){
  getAudioContext().resume();
  //play once
  //userStartAudio();
  //song.play();
  //loop sound
  loop();
  if(song.isPlaying()==true){
    song.stop();
    song.noLoop();
  }
  else{
    song.loop();
  }
}

function keyPressed(){
  if (key =='s'){
    //song.play();
  }
  string+=key;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
}
