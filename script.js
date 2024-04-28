// Declare variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resultDisplay = document.querySelector('.result');

// add event listenors for buttons
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));


function playRound(playerChoice) {
    // declare choices
    const choices = ['rock', 'paper', 'scissors'];
    // generate computers choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //tie
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "Tie, try again!";
    } else if (
        //player wins
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {      
      resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
      //player loses
    } else {
        resultDisplay.textContent = `You lose... ${computerChoice} beats ${playerChoice}`;
    }
}

