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

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Rock, Paper or Scissors?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}