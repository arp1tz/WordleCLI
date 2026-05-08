const readline = require("readline-sync");
const words = require("./words");

const randomIndex = Math.floor(Math.random() * words.length);

const secretWord = words[randomIndex];

let guess = readline.question("Enter your guess: ");

let result = "";

for (let i = 0; i < 5; i++) {

    if (guess[i] === secretWord[i]) {
        result += "🟩";
    }

    else if (secretWord.includes(guess[i])) {
        result += "🟨";
    }

    else {
        result += "⬛";
    }
}

console.log(result);