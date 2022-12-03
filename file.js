

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";

    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";

    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";

    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";

    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";

    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";

    } else {
        return "Draw";
    }
}

function game()

