const readline = require("readline-sync");
const words = require("./words");

const randomIndex = Math.floor(Math.random() * words.length);

const secretWord = words[randomIndex];

let guess = readline.question("Enter your guess: ");
if (guess === secretWord) {
    console.log("🎉 Correct!");
} else {
    console.log("❌ Wrong guess");
    console.log("The word was:", secretWord);
}
while(guess.length !== 5) {
  guess = readline.question(" The Word must be exactly 5 Letters: ");
}

console.log("You entered:" , guess);
