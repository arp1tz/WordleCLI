const chalk = require("chalk");
const readline = require("readline-sync");
const fs = require("fs"); 
const words = fs
  .readFileSync("words.txt", "utf8")
  .split("\n")
  .map(word => word.trim().toLowerCase());

console.log(words);
console.log(chalk.blue("===================="));
console.log(chalk.green("     CLI WORDLE"));
console.log(chalk.blue("===================="));

const randomIndex = Math.floor(Math.random() * words.length);

const secretWord = words[randomIndex];
let attempts = 6;

while(attempts>0) {
    let guess = readline.question("Enter your guess: ");

    guess = guess.toLowerCase();

    if (!words.includes(guess)) {
    console.log(chalk.red("❌ Invalid word!"));
    continue;
}
    let result = "";

for (let i = 0; i < 5; i++) {

    if (guess[i] === secretWord[i]) {
        result += chalk.green("🟩");
    }

    else if (secretWord.includes(guess[i])) {
        result += chalk.yellow("🟨");
    }

    else {
        result += chalk.gray("🟫");
    }
}
 console.log(result);
    attempts--;
    console.log("Attempts Left:", attempts);

if (guess == secretWord) {
    console.log(chalk.green("YOU WIN! :3"));
    break;
}
   
}

if(attempts==0) {
    console.log(chalk.red("YOU LOST :("));
    console.log(chalk.red("The word was:"), secretWord);
}

let playAgain = readline.question("Play again? (y/n): ");

if (playAgain =="y") {
  
}