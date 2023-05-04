let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

const length3 = document.getElementById("length3");
const length4 = document.getElementById("length4");
const length5 = document.getElementById("length5");
const length6 = document.getElementById("length6");
const length7 = document.getElementById("length7");
const length8 = document.getElementById("length8");
const length9 = document.getElementById("length9");

const cardArray = [card1, card2, card3, card4, card5, card6];

// input event listener
let input = document.querySelector("input");
input.addEventListener("input", (event) => {

    card1.textContent = event.target.value;
})


const lengthArray = [length3, length4, length5, length6, length7, length8, length9];
let wordLength = 6;

lengthArray.forEach((length) => {
    length.addEventListener("click", () => {
        wordLength = length.innerHTML;
    })
});


const startButton = document.getElementById("startbtn");
const resetButton = document.getElementById("resetbtn");
const quitButton = document.getElementById("quitbtn");

let gameContainer = document.getElementById("game");
let word = "";

// gets random word with length
async function getRandomWord() {
    const response = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`);
    const data = await response.json();
    word = data[0];
    gameContainer.innerHTML = word;
}

// button event listeners
startButton.addEventListener("click", () => {
    gameContainer.innerHTML = ""
    getRandomWord();
});

resetButton.addEventListener("click", () => {
    gameContainer.innerHTML = ""
    for(let i = 0; i < cardArray.length; i++) {
        let currendCard = cardArray[i]
        currendCard.innerHTML = ""
    }
});

quitButton.addEventListener("click", () => {
    gameContainer.innerHTML = "Thanks for playing.";
    gameContainer.style.color = "red";
});


