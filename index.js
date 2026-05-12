const figlet = require("figlet");

const readline = require("readline-sync");

const chalk = require("chalk");

const fs = require("fs");

let playAgain = "y";
const solutions = fs
  .readFileSync("solutions.txt", "utf8")
  .replace(/\r/g, "")
  .split("\n")
  .map(word => word.trim().toLowerCase())
  .filter(word => /^[a-z]{5}$/.test(word));

const dictionary = fs
  .readFileSync("dictionary.txt", "utf8")
  .replace(/\r/g, "")
  .split("\n")
  .map(word => word.trim().toLowerCase())
  .filter(word => /^[a-z]{5}$/.test(word));

  let keyboardState = {};

function colorLetter(letter) {

    let state = keyboardState[letter.toLowerCase()];

    if (state === "green") {
        return chalk.green(letter);
    }

    if (state === "yellow") {
        return chalk.yellow(letter);
    }

    if (state === "gray") {
        return chalk.gray(letter);
    }

    return letter;
}

while(playAgain === "y") {

keyboardState = {};
let history = [];
console.log(
    chalk.green(
        figlet.textSync("WORDLE")
    )
);
console.log(
`       ${colorLetter("Q")} ${colorLetter("W")} ${colorLetter("E")} ${colorLetter("R")} ${colorLetter("T")} ${colorLetter("Y")} ${colorLetter("U")} ${colorLetter("I")} ${colorLetter("O")} ${colorLetter("P")}`
);

console.log(
`        ${colorLetter("A")} ${colorLetter("S")} ${colorLetter("D")} ${colorLetter("F")} ${colorLetter("G")} ${colorLetter("H")} ${colorLetter("J")} ${colorLetter("K")} ${colorLetter("L")}`
);

console.log(
`          ${colorLetter("Z")} ${colorLetter("X")} ${colorLetter("C")} ${colorLetter("V")} ${colorLetter("B")} ${colorLetter("N")} ${colorLetter("M")}`
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
        keyboardState[guess[i]] = "green";
    }

    else if (secretWord.includes(guess[i])) {
        result += chalk.yellow("🟨");
        if (keyboardState[guess[i]] !== "green") {
    keyboardState[guess[i]] = "yellow";
}
    }

    else {
        result += chalk.gray("🟫");
        if (
    keyboardState[guess[i]] !== "green" &&
    keyboardState[guess[i]] !== "yellow"
) {
    keyboardState[guess[i]] = "gray";
}
    }
}
 console.clear();
 console.log(
    chalk.green(
        figlet.textSync("WORDLE")
    )
);

 console.log(
`       ${colorLetter("Q")} ${colorLetter("W")} ${colorLetter("E")} ${colorLetter("R")} ${colorLetter("T")} ${colorLetter("Y")} ${colorLetter("U")} ${colorLetter("I")} ${colorLetter("O")} ${colorLetter("P")}`
);

console.log(
`        ${colorLetter("A")} ${colorLetter("S")} ${colorLetter("D")} ${colorLetter("F")} ${colorLetter("G")} ${colorLetter("H")} ${colorLetter("J")} ${colorLetter("K")} ${colorLetter("L")}`
);

console.log(
`          ${colorLetter("Z")} ${colorLetter("X")} ${colorLetter("C")} ${colorLetter("V")} ${colorLetter("B")} ${colorLetter("N")} ${colorLetter("M")}`
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