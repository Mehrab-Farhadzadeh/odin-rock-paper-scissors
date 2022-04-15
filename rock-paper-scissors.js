function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}

function whoWins(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Tie, Both are "${playerSelection}"`;
  }
  if (playerSelection === "Rock") {
    return computerSelection === "Paper"
      ? `You Lose! "${computerSelection}" beats "${playerSelection}".`
      : `You Win! "${playerSelection}" beats "${computerSelection}".`;
  }
  if (playerSelection === "Paper") {
    return computerSelection === "Scissors"
      ? `You Lose! "${computerSelection}" beats "${playerSelection}".`
      : `You Win! "${playerSelection}" beats "${computerSelection}".`;
  }
  if (playerSelection === "Scissors") {
    return computerSelection === "Rock"
      ? `You Lose! "${computerSelection}" beats "${playerSelection}".`
      : `You Win! "${playerSelection}" beats "${computerSelection}".`;
  }
}
