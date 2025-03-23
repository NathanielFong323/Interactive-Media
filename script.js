// Partly extracted from Youtube Tutorial https://www.youtube.com/watch?v=wG_5453Vq98

console.clear();

// Select the circle element
const circleElement = document.querySelector('.knagaroo');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; 
const circle = { x: 0, y: 0 }; 

// Initialize variables to track scaling and rotation
let currentScale = 0;
let currentAngle = 0;

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.05;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();


