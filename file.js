//random choice generator for computer
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

//value comparisons for each round
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

//variables for round results and score
let roundForPlayer = "You've won this round"
let roundForComputer = "Computer wins this round"
let Draw = "Draw,play again"
let playerWin = "Congrats,you've won the game!"
let computerWin = "You lost the game!"
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice").toLowerCase();
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    game(roundResult);
    console.log(roundResult);
    if (roundResult === roundForPlayer) {
        playerScore++;
    } else if (roundResult === roundForComputer) {
        computerScore++;
    }
    let Scores = [playerScore, computerScore];
        console.log(Scores);
}

function game() {
    if (playerScore === computerScore + 2)
        console.log(playerWin);
    if (computerScore === playerScore + 2)
        console.log(computerWin);
}
