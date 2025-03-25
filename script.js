// Enhanced JavaScript
console.clear();

const circleElement = document.querySelector('.knagaroo');
const cursorProxy = document.querySelector('.cursor-proxy');
const hoverableLinks = document.querySelectorAll('a[id^="Hover"]');

const mouse = { x: 0, y: 0 }; 
const circle = { x: 0, y: 0 }; 

let currentScale = 0;
let currentAngle = 0;

// Track which element we're currently hovering
let currentHoveredElement = null;

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  
  // Update cursor proxy position
  cursorProxy.style.left = `${e.x - 10}px`;
  cursorProxy.style.top = `${e.y - 10}px`;
  
  // Check what element is under our cursor proxy
  const elementUnderCursor = document.elementFromPoint(e.x, e.y);
  
  // Check if it's one of our hoverable links
  const hoverableElement = findHoverableParent(elementUnderCursor);
  
  if (hoverableElement && hoverableElement !== currentHoveredElement) {
    // Entering a new hoverable element
    if (currentHoveredElement) {
      currentHoveredElement.classList.remove('force-hover');
    }
    currentHoveredElement = hoverableElement;
    currentHoveredElement.classList.add('force-hover');
  } else if (!hoverableElement && currentHoveredElement) {
    // Leaving the current hoverable element
    currentHoveredElement.classList.remove('force-hover');
    currentHoveredElement = null;
  }
});

// Helper function to find if an element or its ancestors is a hoverable link
function findHoverableParent(element) {
  while (element) {
    if (element.tagName === 'A' && element.id.startsWith('Hover')) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
}

const speed = 0.05;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  
  // Use left/top instead of transform for the kangaroo
  circleElement.style.left = `${circle.x}px`;
  circleElement.style.top = `${circle.y}px`;
  
  window.requestAnimationFrame(tick);
}

tick();