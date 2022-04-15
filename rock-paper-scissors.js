function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}
