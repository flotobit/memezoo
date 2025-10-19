// Initial coin count
let coins = 0;

const coinDisplay = document.getElementById('coin-display');
const hatchButton = document.getElementById('hatch-button');
const memeImage = document.getElementById('meme-image');
const gameContainer = document.getElementById('game-container');

// Character position within game container
let posX = 0;
let posY = 0;
const moveStep = 20; // pixels to move per arrow key
const containerRect = gameContainer.getBoundingClientRect();

// Set memeImage initial style
memeImage.style.left = posX + 'px';
memeImage.style.top = posY + 'px';

function updateCoins() {
  coinDisplay.textContent = `Coins: ${coins}`;
}

function hatchMeme() {
  coins += 10;
  updateCoins();
  hatchButton.disabled = true;

  setTimeout(() => {
    hatchButton.disabled = false;
  }, 2000);
}

// Move character inside container boundaries
function moveCharacter(dx, dy) {
  const maxX = gameContainer.clientWidth - memeImage.clientWidth;
  const maxY = gameContainer.clientHeight - memeImage.clientHeight;

  posX = Math.min(Math.max(posX + dx, 0), maxX);
  posY = Math.min(Math.max(posY + dy, 0), maxY);

  memeImage.style.left = posX + 'px';
  memeImage.style.top = posY + 'px';
}

// Event listener for arrow keys
window.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowUp':
      e.preventDefault();
      moveCharacter(0, -moveStep);
      break;
    case 'ArrowDown':
      e.preventDefault();
      moveCharacter(0, moveStep);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      moveCharacter(-moveStep, 0);
      break;
    case 'ArrowRight':
      e.preventDefault();
      moveCharacter(moveStep, 0);
      break;
  }
});

hatchButton.addEventListener('click', hatchMeme);

// Init UI
updateCoins();
