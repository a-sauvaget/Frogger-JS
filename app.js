const GRID_WIDTH = 9;
const GRID_HEIGHT = 9;

const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const startPauseButton = document.getElementById('start-pause-button');

const squares = document.querySelectorAll('.grid div');

const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');

const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

document.addEventListener('keyup', moveFrog);

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

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
}

function autoMoveCars() {
  carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
  carsRight.forEach((carRight) => moveCarRight(carRight));
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains('l1'):
      logLeft.classList.remove('l1');
      logLeft.classList.add('l2');
      break;
    case logLeft.classList.contains('l2'):
      logLeft.classList.remove('l2');
      logLeft.classList.add('l3');
      break;
    case logLeft.classList.contains('l3'):
      logLeft.classList.remove('l3');
      logLeft.classList.add('l4');
      break;
    case logLeft.classList.contains('l4'):
      logLeft.classList.remove('l4');
      logLeft.classList.add('l5');
      break;
    case logLeft.classList.contains('l5'):
      logLeft.classList.remove('l5');
      logLeft.classList.add('l1');
      break;
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains('l1'):
      logRight.classList.remove('l1');
      logRight.classList.add('l5');
      break;
    case logRight.classList.contains('l5'):
      logRight.classList.remove('l5');
      logRight.classList.add('l4');
      break;
    case logRight.classList.contains('l4'):
      logRight.classList.remove('l4');
      logRight.classList.add('l3');
      break;
    case logRight.classList.contains('l3'):
      logRight.classList.remove('l3');
      logRight.classList.add('l2');
      break;
    case logRight.classList.contains('l2'):
      logRight.classList.remove('l2');
      logRight.classList.add('l1');
      break;
  }
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains('c1'):
      carLeft.classList.remove('c1');
      carLeft.classList.add('c2');
      break;
    case carLeft.classList.contains('c2'):
      carLeft.classList.remove('c2');
      carLeft.classList.add('c3');
      break;
    case carLeft.classList.contains('c3'):
      carLeft.classList.remove('c3');
      carLeft.classList.add('c1');
      break;
  }
}

function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains('c3'):
      carRight.classList.remove('c3');
      carRight.classList.add('c2');
      break;
    case carRight.classList.contains('c2'):
      carRight.classList.remove('c2');
      carRight.classList.add('c1');
      break;
    case carRight.classList.contains('c1'):
      carRight.classList.remove('c1');
      carRight.classList.add('c3');
      break;
  }
}

setInterval(autoMoveLogs, 1000);
setInterval(autoMoveCars, 1000);
