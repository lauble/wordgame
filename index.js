let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

const startButton = document.getElementById("startbtn");

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getRandomLetter(max) {
    return Math.floor(Math.random() * max);
}

startButton.addEventListener("click", () => {
    const idx = getRandomLetter(25);
    card1.innerHTML = alphabet[idx]
})
