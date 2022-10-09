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

    let result;

    if (playerInput === computerInput) {
        result = "You draw!";
    } else if (playerInput === 'rock') {
        if (computerInput === 'paper') {
            // player loses
            result = getResult('lose', computerInput, playerInput);
            computerScore++;
        } else if (computerInput === 'scissors') {
            // player wins
            result = getResult('win', playerInput, computerInput);
            playerScore++;
        }
    } else if (playerInput === 'paper') {
        if (computerInput === 'scissors') {
            // pc wins
            result = getResult('lose', computerInput, playerInput);
            computerScore++;
        } else if (computerInput === 'rock') {
            // player wins
            result = getResult('win', playerInput, computerInput);
            playerScore++;
        }
    } else if (playerInput === 'scissors') {
        if (computerInput === 'rock') {
            // pc wins
            result = getResult('lose', computerInput, playerInput);
            computerScore++;
        } else if (computerInput === 'paper') {
            // player wins
            result = getResult('win', playerInput, computerInput);
            playerScore++;
        }
    }
    console.log(result);
    return (result);
}

function getResult (playerOutcome, winner, loser) {
    let result = "You " + playerOutcome + "!" + "\n" + (winner[0].toUpperCase() + winner.substring(1).toLowerCase()) + " beats " + loser + ".";

    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        // Start round
        let playerChoice = prompt("Rock, paper or scissors?");
        playRound(playerChoice, getComputerChoice());
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