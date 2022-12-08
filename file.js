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
let playerWin = "Congrats,you've won the game!"
let computerWin = "You lost the game!"

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice").toLowerCase();
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    game(roundResult);
    console.log(roundResult);
    if (roundForPlayer === 3)
        console.log(playerWin);
    else if (roundForComputer === 3)
        console.log(computerWin);
    else (Draw > 4)
        console.log(Draw);
}

function game() {
    if (roundForPlayer === 5)
        return playerWin;
    else if (roundForComputer === 5)
        return computerWin;
    else (Draw === 5)
        return Draw;
}

















