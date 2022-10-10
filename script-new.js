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
    // object that stores the options and outcomes
    // and returns the outcome
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

    // access the first level of keys with playerSelection
    // and the inner properties with computerSelection
    let outcome = gameplayTree[playerSelection][computerSelection];

    // return the outcome for the player, and increment score
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
    return "You " + playerOutcome + "!" + "\n" + (winningInput[0].toUpperCase() + winningInput.substring(1).toLowerCase()) + " beats " + losingInput + ".";
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();

        let round = playRound(playerChoice, getComputerChoice());

        console.log("Round" + (i + 1) + ": " + round)
    }
}

game();