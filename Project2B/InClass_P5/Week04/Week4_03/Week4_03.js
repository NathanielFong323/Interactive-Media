var pic;

function preload(){
  pic=loadImage("data/1.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  rectMode(CENTER, CENTER);
}


function draw() {
  image(pic, mouseX, mouseY, 100, 100);
}
