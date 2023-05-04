let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

const cardArray = [card1, card2, card3, card4, card5, card6];

const startButton = document.getElementById("startbtn");
const resetButton = document.getElementById("resetbtn");
const quitButton = document.getElementById("quitbtn");

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getRandomLetter(max) {
    return Math.floor(Math.random() * max);
}

startButton.addEventListener("click", () => {
    for(let i = 0; i < cardArray.length; i++) {
        const idx = getRandomLetter(25);
        let currendCard = cardArray[i]
        currendCard.innerHTML = alphabet[idx]
    }
});

resetButton.addEventListener("click", () => {
    for(let i = 0; i < cardArray.length; i++) {
        let currendCard = cardArray[i]
        currendCard.innerHTML = ""
    }

})


