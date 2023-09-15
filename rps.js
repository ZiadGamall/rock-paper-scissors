let playerScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');

function getComputerSelection () {
    let choices =['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

choices.forEach(choice => {
    choice.addEventListener('click', function () {
        playRound(choice.innerText)
    })
})

function playRound (playerSelection) {

    const container = document.getElementById('container')
    let computerSelection =  getComputerSelection();
    let result = '';

        if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore += 1;
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.' + '<br><br> Player Score: ' + playerScore + '<br> Computer Score: ' + computerScore;

            if (playerScore == 5) {
                result += '<br><br> You win the game! refresh the page to play again.'
                disableButtons();
            }
        }else if (playerSelection == computerSelection) {
            result = "it's a tie!" + '<br><br> Player Score: ' + playerScore + '<br> Computer Score: ' + computerScore;
        }else {
            computerScore += 1;
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.' + '<br><br> Player Score: ' + playerScore + '<br> Computer Score: ' + computerScore;

            if (computerScore == 5) {
                result += '<br><br> You lose the game! Refresh the page to play again.';
                disableButtons();
            }
        }

    container.innerHTML = result;
}

function disableButtons() {
    choices.forEach(choice => {choice.disabled = true})
}
