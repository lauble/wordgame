// letter cards
let card1 = document.getElementById('card1').id;
let card2 = document.getElementById('card2').id;
let card3 = document.getElementById('card3').id;
let card4 = document.getElementById('card4').id;
let card5 = document.getElementById('card5').id;
let card6 = document.getElementById('card6').id;

// word cards
let word1 = document.getElementById('word1');
let word2 = document.getElementById('word2');
let word3 = document.getElementById('word3');

// word length buttons
const length3 = document.getElementById('length3');
const length4 = document.getElementById('length4');
const length5 = document.getElementById('length5');
const length6 = document.getElementById('length6');
const length7 = document.getElementById('length7');
const length8 = document.getElementById('length8');
const length9 = document.getElementById('length9');

const guessArray = [card1, card2, card3, card4, card5, card6];
let wordGuessArray = [1, 2, 3];

// input event listeners
let letterGuess = document.getElementById('letter-guess');
let letterGuessCount = 0;

letterGuess.addEventListener('input', (event) => {
  letterGuessCount++;
  if (letterGuessCount === 6) {
    gameContainer.innerHTML = 'Sorry, game over.';
  }
  for (let i = 0; i < guessArray.length; i++) {
    if (guessArray[i].length > 1) {
      guessArray[i] = event.target.value;
      break;
    }
  }
});

let wordGuess = document.getElementById('word-guess');

wordGuess.addEventListener('input', (event) => {
  console.log(event.target.value);
});

// length button event listener
const lengthArray = [
  length3,
  length4,
  length5,
  length6,
  length7,
  length8,
  length9,
];
let wordLength = 6;

lengthArray.forEach((length) => {
  length.addEventListener('click', () => {
    wordLength = length.innerHTML;
  });
});

// game buttons
const startButton = document.getElementById('startbtn');
const resetButton = document.getElementById('resetbtn');
const quitButton = document.getElementById('quitbtn');

let gameContainer = document.getElementById('game');
let word = '';

// gets random word with length
async function getRandomWord() {
  const response = await fetch(
    `https://random-word-api.vercel.app/api?words=1&length=${wordLength}`
  );
  const data = await response.json();
  word = data[0];
  gameContainer.innerHTML = word;
}

// button event listeners
startButton.addEventListener('click', () => {
  gameContainer.innerHTML = '';
  getRandomWord();
});

resetButton.addEventListener('click', () => {
  gameContainer.innerHTML = '';
  for (let i = 0; i < guessArray.length; i++) {
    let currendCard = guessArray[i];
    currendCard.innerHTML = '';
  }
});

quitButton.addEventListener('click', () => {
  gameContainer.innerHTML = 'Thanks for playing.';
  gameContainer.style.color = 'red';
});
