const character = document.getElementById('character');
const container = document.getElementById('game-container');

let posX = 280;
let posY = 20;
const speed = 4;
const keys = {};

// Update function called every frame
function update() {
  // WASD keys movement
  if (keys['a'] && posX > 0) posX -= speed;           // left
  if (keys['d'] && posX < container.clientWidth - character.clientWidth) posX += speed;  // right
  if (keys['w'] && posY < container.clientHeight - character.clientHeight) posY += speed; // up
  if (keys['s'] && posY > 0) posY -= speed;           // down

  // Position by bottom/left for natural "floor" positioning
  character.style.left = posX + 'px';
  character.style.bottom = posY + 'px';

  // Walking animation toggle
  if (keys['a'] || keys['d'] || keys['w'] || keys['s']) {
    character.classList.add('walking');
  } else {
    character.classList.remove('walking');
  }

  requestAnimationFrame(update);
}

window.addEventListener('keydown', e => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', e => {
  keys[e.key.toLowerCase()] = false;
});

update();
