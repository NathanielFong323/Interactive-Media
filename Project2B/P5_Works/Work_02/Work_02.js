// Array system learned from p5.js official website's example 5
// https://p5js.org/reference/p5/Array/
let balls = []; // Array to store all balls

function preload() {
  font = loadFont('data/PRESSSTART2P-REGULAR.TTF');
  song=loadSound('data/Ding.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Add the initial ball
  balls.push({
    xPosition: 50,
    yPosition: 50,
    diameter: 20,
    ySpeed: 0,
    xSpeed: 0
  });
}

function draw() {
  background(220);
  textFont(font);
  textSize(32);
  textAlign(CENTER, BASELINE);
  text('~GRAVITY~\nClick to add Ball!', width/2, height/2);
  let muteButton = createButton("Click to mute");
  muteButton.position(width/2 - 48, height/2 + 50);
  muteButton.mousePressed(mute);
  let unmuteButton = createButton("Click to unmute");
  unmuteButton.position(width/2 - 55, height/2 + 80);
  unmuteButton.mousePressed(unmute);
  
  // Update and display all balls
  //note for self learn:
  //ball[i]: line9-14, ball[i+1]: only generated when clicked line68-77
  //so each ball[i+n] has their own x,y pos speed, and called seperately
  //for each for loop
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
  
    // Movement for y-axis
    let yGravityAcceleration = map(mouseY, 0, height, -2, 2);
    ball.ySpeed = ball.ySpeed + yGravityAcceleration;
    ball.yPosition = ball.yPosition + ball.ySpeed;
    
    // bounce the ball at the edge of the window:
    if(ball.yPosition + ball.diameter/2 > height){
      ball.ySpeed = -ball.ySpeed;
      ball.yPosition = height - ball.diameter/2;
      song.play();
    }
    if(ball.yPosition <= 0){
      ball.ySpeed = -ball.ySpeed;
      ball.yPosition = 0 + ball.diameter/2;
      song.play();
    }
    
    // Air friction to slow the speed over some time
    ball.ySpeed = ball.ySpeed * 0.997;
    
    // Movement for x-axis 
    let xGravityAcceleration = map(mouseX, 0, width, -2, 2);
    ball.xSpeed = ball.xSpeed + xGravityAcceleration;
    ball.xPosition = ball.xPosition + ball.xSpeed;
    
    // bounce the ball at the edge of the window:
    if(ball.xPosition + ball.diameter/2 > width){
      ball.xSpeed = -ball.xSpeed;
      ball.xPosition = width - ball.diameter/2;
      song.play();
    }
    if(ball.xPosition <= 0){
      ball.xSpeed = -ball.xSpeed;
      ball.xPosition = 0 + ball.diameter/2;
      song.play();
    }
    
    // Air friction to slow the speed over some time
    ball.xSpeed = ball.xSpeed * 0.997;
    
    // Draw the ball
    fill(200, 0, 0);
    ellipse(ball.xPosition, ball.yPosition, ball.diameter, ball.diameter);
  }
}

function mousePressed() {
  // Add a new ball at random position when mouse is clicked
  balls.push({
    xPosition: random(width),
    yPosition: random(height),
    diameter: 20,
    ySpeed: 0,
    xSpeed: 0
  });
}

function mute(){
  getAudioContext().suspend();
}

function unmute(){
  getAudioContext().resume();
}
