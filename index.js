const figlet = require("figlet");
const chalk = require("chalk");
const readline = require("readline-sync");
const fs = require("fs");
let playAgain = "y";

const solutions = fs
  .readFileSync("solutions.txt", "utf8")
  .split("\n")
  .map(word => word.trim().toLowerCase());

const dictionary = fs
  .readFileSync("dictionary.txt", "utf8")
  .split("\n")
  .map(word => word.trim().toLowerCase());

while(playAgain === "y") {

let history = [];
console.log(
    chalk.green(
        figlet.textSync("WORDLE")
    )
);

const randomIndex = Math.floor(Math.random() * solutions.length);

const secretWord = solutions[randomIndex];
let attempts = 6;


let won = false;

while(attempts>0) {
    let guess = readline.question("Enter your guess: ");

    guess = guess.toLowerCase();

if (guess.length !== 5) {
    console.log(chalk.red("❌ Word must be 5 letters!"));
    continue;
}

if (!dictionary.includes(guess)) {
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
 console.clear();
console.log(
    chalk.green(
        figlet.textSync("WORDLE")
    )
);
 
 history.push(result);

 for (let previousGuess of history) {
    console.log(previousGuess);
 }

if (guess == secretWord) {
    won = true;
    console.log(chalk.green("YAY!, YOU WIN! :3"));
    break;
}
  attempts--;
    console.log(chalk.cyan(`Attempts Left: ${attempts}`));   
}

if(attempts==0 && !won) {
    console.log(chalk.red("\n💀 uhmmm, YOU LOST :("));
    console.log(chalk.red("The word was:"), secretWord);
}

playAgain = readline.question("Play again? (y/n): ");

if (playAgain =="y") {
  
}

}