let coins = 0;

const coinDisplay = document.getElementById('coin-display');
const hatchButton = document.getElementById('hatch-button');
const memeImage = document.getElementById('meme-image');

function updateCoins() {
  coinDisplay.textContent = `Coins: ${coins}`;
}

function hatchMeme() {
  memeImage.style.display = 'block'; // show meme image
  coins += 10;  // earn coins
  updateCoins();
  hatchButton.disabled = true; // disable button momentarily

  setTimeout(() => {
    hatchButton.disabled = false; // re-enable button after delay
  }, 2000); // 2 seconds cooldown
}

hatchButton.addEventListener('click', hatchMeme);

updateCoins();

