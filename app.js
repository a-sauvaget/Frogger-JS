const GRID_WIDTH = 9;
const GRID_HEIGHT = 9;

const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const startPauseButton = document.getElementById('start-pause-button');

const squares = document.querySelectorAll('.grid div');

// Position de départ de la grenouille
let currentIndex = Math.ceil(GRID_HEIGHT * GRID_WIDTH - (GRID_WIDTH / 2 + 1));

function moveFrog(e) {
  squares[currentIndex].classList.remove('frog');

  switch (e.key) {
    case 'ArrowLeft':
      if (currentIndex % GRID_WIDTH !== 0) {
        currentIndex -= 1;
      }
      break;
    case 'ArrowRight':
      if (currentIndex % GRID_WIDTH < GRID_WIDTH - 1) {
        currentIndex += 1;
      }
      break;
    case 'ArrowUp':
      if (currentIndex - GRID_WIDTH >= 0) {
        currentIndex -= GRID_WIDTH;
      }
      break;
    case 'ArrowDown':
      if (currentIndex + GRID_WIDTH < GRID_WIDTH * GRID_HEIGHT) {
        currentIndex += GRID_WIDTH;
      }
      break;
    default:
      console.log('Use the arrows to move the frog !');
  }

  squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog);
