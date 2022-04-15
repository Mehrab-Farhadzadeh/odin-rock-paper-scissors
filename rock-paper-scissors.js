function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
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
