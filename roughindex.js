const readline = require("readline-sync");
const words = require("./words");

const randomIndex = Math.floor(Math.random() * words.length);

const secretWord = words[randomIndex];
let attempts = 6;

while(attempts>0) {
    let guess = readline.question("Enter your guess: ");

    guess = guess.toLowerCase();

    let result = "";

for (let i = 0; i < 5; i++) {

    if (guess[i] === secretWord[i]) {
        result += "🟩";
    }

    else if (secretWord.includes(guess[i])) {
        result += "🟨";
    }

    else {
        result += "🟫";
    }
}
 console.log(result);
    attempts--;
    console.log("Attempts Left:", attempts);

if (guess == secretWord) {
    console.log("YOU WIN! :3");
    break;
}
   
}

if(attempts==0) {
    console.log("YOU LOST :(");
    console.log("The words was:", secretWord);
}