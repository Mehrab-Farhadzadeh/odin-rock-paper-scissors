function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}

function getEmojiOfSelection(selection) {
  if (selection === "rock") return "🪨";
  if (selection === "paper") return "📄";
  if (selection === "scissors") return "✂️";
}
function whoWins(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = `Tie!`;
  } else if (playerSelection === "rock") {
    result = computerSelection === "paper" ? `You Lose!` : `You Win!`;
  } else if (playerSelection === "paper") {
    result = computerSelection === "scissors" ? `You Lose!` : `You Win!`;
  } else if (playerSelection === "scissors") {
    result = computerSelection === "rock" ? `You Lose!` : `You Win!`;
  }
  result += ` Computer played ${getEmojiOfSelection(computerSelection)}`;
  return result;
}

function generateFinalReport(playerWins, computerWins) {
  let finalReport = "";

  if (playerWins === computerWins) {
    finalReport += "Tie!";
  } else {
    finalReport += playerWins > computerWins ? "You win!" : "You lose!";
  }
  return finalReport;
}

function resetTheGame() {
  const finalReportNode = document.querySelector("p.result");
  const resultsNode = document.querySelector(".results");
  let gameResult;
  if (playerWins > computerWins) {
    gameResult = "winner";
  } else {
    gameResult = "loser";
  }
  playerWins = 0;
  computerWins = 0;
  resultsNode.classList.remove(gameResult);
  finalReportNode.classList.remove(gameResult);
  addRoundReportToDOM("Choose your weapon!");
  addEventListenerToGameButtons();
  changeStyleOfButton("");
}

let playerWins = 0;
let computerWins = 0;
const TOTALROUNDS = 5;

function addScoresToDOM() {
  const playerScoreNode = document.querySelector(".player .score");
  const computerScoreNode = document.querySelector(".computer .score");
  playerScoreNode.textContent =
    "⭐".repeat(playerWins) + "⚝".repeat(TOTALROUNDS - playerWins);
  computerScoreNode.textContent =
    "⭐".repeat(computerWins) + "⚝".repeat(TOTALROUNDS - computerWins);
}
function addRoundReportToDOM(roundReport, resultEmoji = "") {
  const roundReportNode = document.querySelector("p.result");
  const resultsHeaderNode = document.querySelector(".results h2");
  roundReportNode.textContent = `${roundReport}`;
  resultsHeaderNode.textContent = `${resultEmoji} Result ${resultEmoji}`;
  addScoresToDOM();
}

function addFinalReportToDOM(finalReport) {
  const finalReportNode = document.querySelector("p.result");
  const resultsNode = document.querySelector(".results");
  finalReportNode.textContent = `${finalReport}`;
  let gameResult;
  if (playerWins > computerWins) {
    gameResult = "winner";
  } else {
    gameResult = "loser";
  }
  resultsNode.classList.add(gameResult);
  finalReportNode.classList.add(gameResult);
  resultsNode.appendChild(finalReportNode);
}

function game(roundReport) {
  let resultEmoji = "🤝";
  if (roundReport.search("Win") !== -1) {
    playerWins++;
    resultEmoji = "✅";
  } else if (roundReport.search("Lose") !== -1) {
    computerWins++;
    resultEmoji = "❌";
  }
  addRoundReportToDOM(roundReport, resultEmoji);

  if (playerWins >= 5 || computerWins >= 5) {
    addFinalReportToDOM(generateFinalReport(playerWins, computerWins));
    removeEventListenerFromGameButtons();
  }
}

function changeStyleOfButton(playerSelection) {
  const buttons = document.querySelectorAll(".buttons button");
  for (const button of buttons) {
    if (button.classList.value === playerSelection) {
      button.style.borderColor = "yellow";
    } else {
      button.style.borderColor = "#62b188";
    }
  }
}

function playRound(e) {
  const playerSelection = e.target.classList.value.split(" ")[0];
  const computerSelection = computerPlay();
  game(whoWins(playerSelection, computerSelection));
  changeStyleOfButton(playerSelection);
}

function addEventListenerToGameButtons() {
  const buttons = document.querySelectorAll(".buttons button");
  for (const button of buttons) {
    button.addEventListener("click", playRound);
  }
}

function removeEventListenerFromGameButtons() {
  const buttons = document.querySelectorAll(".buttons button");
  for (const button of buttons) {
    button.removeEventListener("click", playRound);
  }
}

function addEventListenerToResetButtons() {
  const resetButton = document.querySelector("button.resetButton");
  resetButton.addEventListener("click", resetTheGame);
}

addEventListenerToGameButtons();
addEventListenerToResetButtons();
