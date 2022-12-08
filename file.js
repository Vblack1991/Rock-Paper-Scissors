let playerScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Scissors" 
    || playerSelection === "paper" && computerSelection === "Rock" 
    || playerSelection === "scissors" && computerSelection === "Paper") {
        return roundForPlayer;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"
    || playerSelection === "paper" && computerSelection === "Scissors"
    || playerSelection === "rock" && computerSelection === "Paper") {
        return roundForComputer;
    } else {
        return Draw;
    }
}

let roundForPlayer = "You've won this round"
let roundForComputer = "Computer wins this round"
let Draw = "Draw,play again"
let playerWin = "Congrats,you've won!"
let computerWin = "You've lost the game!"

















