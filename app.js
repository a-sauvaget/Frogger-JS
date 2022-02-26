const GRID_WIDTH = 9;

const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const startPauseButton = document.getElementById('start-pause-button');

const squares = document.querySelectorAll('.grid div');

// Position de départ de la grenouille
let currentIndex = 76;

function moveFrog(e) {
  squares[currentIndex].classList.remove('frog');

  switch (e.key) {
    case 'ArrowLeft':
      console.log('Moved left !');
      currentIndex -= 1;
      break;
    case 'ArrowRight':
      console.log('Moved right !');
      currentIndex += 1;
      break;
    case 'ArrowUp':
      console.log('Moved up !');
      currentIndex -= GRID_WIDTH;
      break;
    case 'ArrowDown':
      console.log('Moved down !');
      currentIndex += GRID_WIDTH;
      break;
    default:
      console.log('Use the arrows to move the frog !');
  }

  squares[currentIndex].classList.add('frog');
}

document.addEventListener('keyup', moveFrog);
