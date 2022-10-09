let playerScore = 0;
let computerScore = 0;

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

    if (playerInput === computerInput) {
        return "You draw!";
    } else if (playerInput === 'rock') {
        if (computerInput === 'paper') {
            computerScore++;
            return getResult('lose', computerInput, playerInput);
        } else if (computerInput === 'scissors') {
            playerScore++;
            return getResult('win', playerInput, computerInput);          
        }
    } else if (playerInput === 'paper') {
        if (computerInput === 'scissors') {
            computerScore++;
            return getResult('lose', computerInput, playerInput);
        } else if (computerInput === 'rock') {
            playerScore++;
            return getResult('win', playerInput, computerInput);
        }
    } else if (playerInput === 'scissors') {
        if (computerInput === 'rock') {
            computerScore++;
            return getResult('lose', computerInput, playerInput);
        } else if (computerInput === 'paper') {
            playerScore++;
            return getResult('win', playerInput, computerInput);
        }
    }
}

function getResult (playerOutcome, winner, loser) {
    let result = "You " + playerOutcome + "!" + "\n" + (winner[0].toUpperCase() + winner.substring(1).toLowerCase()) + " beats " + loser + ".";

    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        // Start round
        let playerChoice = prompt("Rock, paper or scissors?");
        let x = playRound(playerChoice, getComputerChoice());
        console.log(x);
    }

    // then, calculate scores and print the winner of the 5 rounds
    if (playerScore > computerScore) {
        console.log("Player wins " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("Player loses " + playerScore + " to " + computerScore)
    } else if (playerScore === computerScore) {
        console.log("It's a draw");
    }
}

game();