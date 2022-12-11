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
let roundForPlayer = "You've won this round";
let roundForComputer = "Computer wins this round";
let Draw = "Draw,play again";
let playerWin = "Congrats,you've won the game!";
let computerWin = "You lost the game!";
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

//loop to print round and game results
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
    } else if (roundResult === Draw) {
        drawCount++;
    }
    if (i > 3 && playerScore > computerScore) {
        console.log(playerWin);
    } else if (i > 3 && computerScore > playerScore) {
        console.log(computerWin);
    } else if (i > 3 && computerScore === playerScore) {
        console.log(Draw);
    }
    if (playerScore === 3) {
        console.log(playerWin);
        break;
    }
    if (computerScore === 3) {
        console.log(computerWin);
        break;
    }
    let Scores = [playerScore, computerScore];
        console.log(Scores);
}

//game function
function game() {

if (drawCount === 5) {
    console.log(Draw);
}
}
