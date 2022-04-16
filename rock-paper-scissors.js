function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}

function whoWins(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Tie, Both are "${playerSelection}"`;
  }
  if (playerSelection === "rock") {
    return computerSelection === "paper"
      ? `You Lose! "${computerSelection}" beats "${playerSelection}".`
      : `You Win! "${playerSelection}" beats "${computerSelection}".`;
  }
  if (playerSelection === "paper") {
    return computerSelection === "scissors"
      ? `You Lose! "${computerSelection}" beats "${playerSelection}".`
      : `You Win! "${playerSelection}" beats "${computerSelection}".`;
  }
  if (playerSelection === "scissors") {
    return computerSelection === "rock"
      ? `You Lose! "${computerSelection}" beats "${playerSelection}".`
      : `You Win! "${playerSelection}" beats "${computerSelection}".`;
  }
}

function playRound() {
  const playerSelection = window.prompt("Rock, Paper or Scissors?");
  const computerSelection = computerPlay();
  return whoWins(playerSelection, computerSelection);
}

function generateFinalReport(playerWins, computerWins) {
  let finalReport = `Your score: ${playerWins}\nComputer score: ${computerWins}\n`;

  if (playerWins === computerWins) {
    finalReport += "Tie!";
  } else {
    finalReport +=
      playerWins > computerWins ? "You win the game!" : "You lose the game!";
  }

  return finalReport;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    const roundReport = playRound();
    if (roundReport.search("Win") !== -1) {
      playerWins++;
    } else if (roundReport.search("Lose") !== -1) {
      computerWins++;
    }
    console.log(roundReport);
  }
  console.log(generateFinalReport(playerWins, computerWins));
}

game();
