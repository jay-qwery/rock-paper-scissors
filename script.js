function getComputerChoice() {
    //randomly returns rock, paper, or scissors
    let output = ["rock", "paper", "scissors"];
    return output[randomInt(0, output.length - 1)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    const playerInput = playerSelection.toLowerCase();
    const computerInput = computerSelection;

    let result;

    if (playerInput === computerInput) {
        result = "You draw!";
    } else if (playerInput === 'rock') {
        if (computerInput === 'paper') {
            // player loses
            result = getResult('lose', computerInput, playerInput);
        } else if (computerInput === 'scissors') {
            // player wins
            result = getResult('win', playerInput, computerInput);
        }
    } else if (playerInput === 'paper') {
        if (computerInput === 'scissors') {
            // pc wins
            result = getResult('lose', computerInput, playerInput);
        } else if (computerInput === 'rock') {
            // player wins
            result = getResult('win', playerInput, computerInput);
        }
    } else if (playerInput === 'scissors') {
        if (computerInput === 'rock') {
            // pc wins
            result = getResult('lose', computerInput, playerInput);
        } else if (computerInput === 'paper') {
            // player wins
            result = getResult('win', playerInput, computerInput);
        }
    }

    console.log(result);
}

function getResult (playerOutcome, winner, loser) {
    let result = "You " + playerOutcome + "!" + "\n" + (winner[0].toUpperCase() + winner.substring(1).toLowerCase()) + " beats " + loser + ".";

    return result;
}

    /* 
    if (playerInput !== 'rock' || playerInput !== 'paper' || playerInput !== 'scissors') {
        // prompt input again
        console.log("Try again");
    } else {
        playRound();
    }
    */