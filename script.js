function getComputerChoice() {
    //randomly returns rock, paper, or scissors
    let output = ["rock", "paper", "scissors"];
    return output[randomInt(0, output.length - 1)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    // if playerSelection beats computer selection
    // fill in result accordingly
    // else if computerSelection beats playerSelection
    // fill in results accordingly

    let result = "You " + "[win/lose]" + "!" + "\n" + "[Winning input (first letter capitalised, all others lowercase)]" + " beats " + "[losing input (all lowercase)]" + ".";

    return result;
}