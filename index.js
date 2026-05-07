const readline = require('readline-sync');

let guess = readline.question("Enter a 5-Letter word:");

while(guess.length !== 5) {
  guess = readline.question(" The Word must be exactly 5 Letters: ");
}
console.log("Valid word: ",  guess);
console.log("You entered:" , guess);