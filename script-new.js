let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Randomly returns rock, paper, or scissors
    let output = ["rock", "paper", "scissors"];
    return output[randomInt(0, output.length - 1)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(textPrompt) {
    let playerSelection = prompt(textPrompt).toLowerCase();
    let computerSelection = getComputerChoice();
    
    // Returns outcome of possible matchups
    const gameplayTree = {
        "rock": {
            "scissors": "win",
            "paper": "lose",
            "rock": "draw"
        },
        "paper": {
            "rock": "win",
            "scissors": "lose",
            "paper": "draw"
        },
        "scissors": {
            "paper": "win",
            "rock": "lose",
            "scissors": "draw"
        }
    }

    // If player mistypes, retry the round.
    if (gameplayTree[playerSelection] === undefined) {
        return playRound("You didn't enter rock, paper or scissors. Please try again.");
    }

    let outcome = gameplayTree[playerSelection][computerSelection];

    // Return the outcome for the player, and increment score
    if (outcome === "win") {
        playerScore++;
        return getResult(outcome, playerSelection, computerSelection);
    } else if (outcome === "lose") {
        computerScore++;
        return getResult(outcome, computerSelection, playerSelection);
    } else if (outcome === "draw") {
        return "It's a draw!";
    }
}

function getResult (playerOutcome, winningInput, losingInput) {
    return "You " + playerOutcome + "!" + "\n" +
    capitalise(winningInput) + " beats " + losingInput + ".";
}

function capitalise(string) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function game() {
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        let round = playRound("Rock, paper or scissors?");

        console.log("Round " + (i + 1) + ": " + round);
    }

    // Print scores and winner
    if (playerScore > computerScore) {
        console.log("Player wins " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("Player loses " + playerScore + " to " + computerScore)
    } else if (playerScore === computerScore) {
        console.log("It's a draw, " + playerScore + " all");
    }
}

game();