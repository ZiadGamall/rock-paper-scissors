const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerChoice = document.getElementById("player-hand");
let computerChoice = document.getElementById("computer-hand");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let result = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;
let computerHand = null;

function game() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerHand = "Rock";
    } else if (randomNumber == 1) {
        computerHand = "Paper";
    } else {
        computerHand = "Scissors";
    }
    return computerHand;
}

function updateChoices(playerHand) {
    playerChoice.textContent = playerHand;
    computerChoice.textContent = computerHand;
}

function playerWin() {
    playerScore++;
    result.textContent = "You win!!";
    result.style.color = "green";
    playerScoreDisplay.textContent = playerScore;
}
function tie() {
    result.textContent = "It's a tie!!";
    result.style.color = "yellow";
}
function playerLose() {
    computerScore++;
    result.textContent = "You Lose!!";
    computerScoreDisplay.textContent = computerScore;
    result.style.color = "red";
}

rock.addEventListener("click", () => {
    computerHand = game();
    if (computerHand === "Rock") {
        tie();
    } else if (computerHand === "Paper") {
        playerLose();
    } else {
        playerWin();
    }
    updateChoices("Rock");
});
paper.addEventListener("click", () => {
    computerHand = game();
    if (computerHand === "Rock") {
        playerWin();
    } else if (computerHand === "Paper") {
        tie();
    } else {
        playerLose();
    }
    updateChoices("Paper");
});
scissors.addEventListener("click", () => {
    computerHand = game();
    if (computerHand === "Rock") {
        playerLose();
    } else if (computerHand === "Paper") {
        playerWin();
    } else {
        tie();
    }
    updateChoices("Scissors");
});
