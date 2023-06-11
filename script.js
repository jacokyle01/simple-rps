//constants
const NUM_ROUNDS = 5;
const buttons = document.querySelectorAll('input');
const h3 = document.querySelector('h3');
const h2 = document.querySelector('h2');
const h5 = document.querySelector('h5');
//ROCK: 0, PAPER: 1, SCISSORS: 2




function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function parsePlayerChoice(choiceString) {
  const choice = choiceString.toLowerCase();
  let result;
  switch (choice) {
    case "rock":
      result = 0;
      break;

    case "paper":
      result = 1;
      break;

    case "scissors":
      result = 2;
      break;
  }

  return result;
}

//TIE: 0, LOSS: 1, WIN: 2


let playerTotal = 0;
let computerTotal = 0;

function playRound(playerChoice, computerChoice) {
  let result = (computerChoice - playerChoice + 3) % 3;
  let message = "";
  switch (result) {
    case 0:
    message = "this round tied!";
    break;

    case 1:
    message = "you lost this round!";
    computerTotal++;
    break;

    case 2:
    message = ("you won this round!");
    playerTotal++;
    break;
  }

  h2.textContent = playerTotal + " - " + computerTotal;
  h3.textContent = message; 
  if (Math.max(playerTotal, computerTotal) >= 5) {
    calculateWinner();
  }
}



function calculateWinner() {
    const finalResult = playerTotal - computerTotal;
    let message = "";
    if (finalResult > 0) {
        message = "You win the game!"
    }

    else if (finalResult == 0) {
        message = "This game tied.";
    }

    else {
        message = "You lost this game.";
    }

    h3.textContent = message;
    h3.setAttribute('style', 'font-size: 40px');
    h5.textContent = "Refresh the page to play again.";
    disableButtons();
}




buttons.forEach(button => {
    button.addEventListener('click', function() {
        let playerChoice = button.id;
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
})

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
