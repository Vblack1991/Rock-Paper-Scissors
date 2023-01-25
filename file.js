//random choice generator for computer
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

//button for each selection
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

//variables for round results and score display
let roundForPlayer = "You've won this round";
let roundForComputer = "Computer wins this round";
let Draw = "Draw,play again";
let pScore = 0;
let cScore = 0;
let dCount = 0;
document.getElementById('playerScore').textContent = 'Player:' + pScore;
document.getElementById('computerScore').textContent = 'Computer:' + cScore;
document.getElementById('drawCount').textContent = 'Draws:' + dCount;

//event listeners for each choice w/score keeping
rockButton.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === roundForPlayer) {
        document.getElementById('winner').textContent = roundForPlayer;
        pScore++;
    } else if (roundResult === roundForComputer) {
        document.getElementById('winner').textContent = roundForComputer;
        cScore++;
    } else if (roundResult === Draw) {
        document.getElementById('winner').textContent = Draw;
        dCount++;
    }
    game(pScore, cScore);
    
    document.getElementById('playerScore').textContent = 'Player:' + pScore;
    document.getElementById('computerScore').textContent = 'Computer:' + cScore;
    document.getElementById('drawCount').textContent = 'Draws:' + dCount;
});

paperButton.addEventListener('click', function() {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === roundForPlayer) {
        document.getElementById('winner').textContent = roundForPlayer;
        pScore++;
    } else if (roundResult === roundForComputer) {
        document.getElementById('winner').textContent = roundForComputer;
        cScore++;
    } else if (roundResult === Draw) {
        document.getElementById('winner').textContent = Draw;
        dCount++;
    }
    game(pScore, cScore);
    
    document.getElementById('playerScore').textContent = 'Player:' + pScore;
    document.getElementById('computerScore').textContent = 'Computer:' + cScore;
    document.getElementById('drawCount').textContent = 'Draws:' + dCount;
});

scissorsButton.addEventListener('click', function() {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === roundForPlayer) {
        document.getElementById('winner').textContent = roundForPlayer;
        pScore++;
    } else if (roundResult === roundForComputer) {
        document.getElementById('winner').textContent = roundForComputer;
        cScore++;
    } else if (roundResult === Draw) {
        document.getElementById('winner').textContent = Draw;
        dCount++;
    }
    game(pScore, cScore);

    document.getElementById('playerScore').textContent = 'Player:' + pScore;
    document.getElementById('computerScore').textContent = 'Computer:' + cScore;
    document.getElementById('drawCount').textContent = 'Draws:' + dCount;
});

//value comparisons for each round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Scissors' 
    || playerSelection === 'paper' && computerSelection === 'Rock' 
    || playerSelection === 'scissors' && computerSelection === 'Paper') {
        return roundForPlayer;
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock'
    || playerSelection === 'paper' && computerSelection === 'Scissors'
    || playerSelection === 'rock' && computerSelection === 'Paper') {
        return roundForComputer;
    } else {
        return Draw;
    }
};

//function that announces winner
function game(pScore, cScore) {
    if (pScore === 5) {
        return document.getElementById('winner').textContent = "Congrats,you've won the game!";
    } else if (cScore === 5) {
        return document.getElementById('winner').textContent = "Haha, you lost the game!";
    }
};