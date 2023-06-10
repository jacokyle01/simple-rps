//constants
const NUM_ROUNDS = 5;

//ROCK: 0, PAPER: 1, SCISSORS: 2




function choiceToString(choice) {
  switch (choice) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
}

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
function playRound(playerChoice, computerChoice) {
  let diff = (computerChoice - playerChoice + 3) % 3;
  return diff;
}

function game() {
  let totalPlayerScore = 0;
  let totalComputerScore = 0;
  for (let i = 0; i < NUM_ROUNDS; ++i) {
    const computerChoice = getComputerChoice();
    const rawPlayerChoice = prompt("Enter your choice");
    const playerChoice = parsePlayerChoice(rawPlayerChoice);


    console.log("computer chose " + choiceToString(computerChoice));
    console.log("you chose " + choiceToString(playerChoice));
    let result = playRound(playerChoice, computerChoice);
    switch (result) {
        case 0:
        console.log("This round tied!");
        break;

        case 1:
        console.log("You lost this round!");
        totalComputerScore++;
        break;

        case 2:
        console.log("You won this round!");
        totalPlayerScore++;
        break;

    }
  }

  const finalResult = totalPlayerScore - totalComputerScore;
  if (finalResult > 0) {
    console.log("You win the game!");
  }

  else if (finalResult == 0) {
    console.log("This game was drawn.");
  }

  else {
    console.log("You lost the game.");
  }

  
}
