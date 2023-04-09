function guessANumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsynReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log("You guess it!");
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log('Too Low!');
                    recursiveAsynReadLine();
                } else if (guess > computerGuess) {
                    console.log("Too High!");
                    recursiveAsynReadLine();
                } else {
                    console.log("Invalid input! Try again...");
                    recursiveAsynReadLine();
                }
            }

        });
    }
    recursiveAsynReadLine();
}
guessANumber();