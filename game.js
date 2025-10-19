const character = document.getElementById('character');
const container = document.getElementById('game-container');

let posX = 280;
let posY = 20;
const speed = 4;
const keys = {};

// Update character position with bounds checking
function update() {
  if (keys.ArrowLeft && posX > 0) posX -= speed;
  if (keys.ArrowRight && posX < container.clientWidth - character.clientWidth) posX += speed;
  if (keys.ArrowUp && posY < container.clientHeight - character.clientHeight) posY += speed;
  if (keys.ArrowDown && posY > 0) posY -= speed;

  // Inverted Y axis for bottom-based positioning
  character.style.left = posX + 'px';
  character.style.bottom = posY + 'px';

  // Walking animation toggle
  if (keys.ArrowLeft || keys.ArrowRight || keys.ArrowUp || keys.ArrowDown) {
    character.classList.add('walking');
  } else {
    character.classList.remove('walking');
  }

  requestAnimationFrame(update);
}

window.addEventListener('keydown', e => {
  keys[e.key] = true;
});

window.addEventListener('keyup', e => {
  keys[e.key] = false;
});

// Start the update loop
update();
