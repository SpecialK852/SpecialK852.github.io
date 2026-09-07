// Get DOM elements
const header = document.getElementById('main-header');
const coordsBox = document.getElementById('coords-box');
const follower = document.getElementById('follower');

// State variables for dragging
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// 1. Mouse Tracking & Follower Logic
window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Update coordinates text
  coordsBox.textContent = `X: ${x}, Y: ${y}`;

  // Update mouse follower position (clamped under header)
  follower.style.left = `${x}px`;
  const headerHeight = header.offsetHeight;
  follower.style.top = `${Math.max(headerHeight + 15, y)}px`;

  // 2. Handle Drag Movement
  if (isDragging) {
    const newLeft = x - offsetX;
    const newTop = y - offsetY;

    coordsBox.style.left = `${newLeft}px`;
    coordsBox.style.top = `${newTop}px`;
  }
});

// 3. Start Dragging
coordsBox.addEventListener('mousedown', (event) => {
  isDragging = true;

  // Get current dimensions and location
  const rect = coordsBox.getBoundingClientRect();

  // Calculate cursor click offset inside the box
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;

  // Switch layout from bottom/right to top/left pixel values
  coordsBox.style.bottom = 'auto';
  coordsBox.style.right = 'auto';
  coordsBox.style.left = `${rect.left}px`;
  coordsBox.style.top = `${rect.top}px`;
});

// 4. Stop Dragging
window.addEventListener('mouseup', () => {
  isDragging = false;
});