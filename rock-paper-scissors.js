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

let playerWins = 0;
let computerWins = 0;
const TOTAL_ROUNDS = 5;

function getCurrentClassOfResultNode() {
  let currentClass;
  if (playerWins > computerWins) {
    currentClass = "winner";
  } else {
    currentClass = "loser";
  }
  return currentClass;
}
function removeStyleClassFromResultNode() {
  const finalReportNode = document.querySelector("p.result");
  const resultsNode = document.querySelector(".results");
  let currentClass = getCurrentClassOfResultNode();
  resultsNode.classList.remove(currentClass);
  finalReportNode.classList.remove(currentClass);
}
function addStyleClassToResultNode() {
  const finalReportNode = document.querySelector("p.result");
  const resultsNode = document.querySelector(".results");
  let currentClass = getCurrentClassOfResultNode();
  resultsNode.classList.add(currentClass);
  finalReportNode.classList.add(currentClass);
}

function addScoresToDOM() {
  const playerScoreNode = document.querySelector(".player .score");
  const computerScoreNode = document.querySelector(".computer .score");
  playerScoreNode.textContent =
    "⭐".repeat(playerWins) + "⚝".repeat(TOTAL_ROUNDS - playerWins);
  computerScoreNode.textContent =
    "⭐".repeat(computerWins) + "⚝".repeat(TOTAL_ROUNDS - computerWins);
}
function addRoundReportToDOM(roundReport, resultEmoji = "") {
  const roundReportNode = document.querySelector("p.result");
  const resultsHeaderNode = document.querySelector(".results h2");
  roundReportNode.textContent = `${roundReport}`;
  resultsHeaderNode.textContent = `${resultEmoji}`;
  addScoresToDOM();
}
function addFinalReportToDOM(finalReport) {
  const finalReportNode = document.querySelector("p.result");
  const resultsNode = document.querySelector(".results");
  finalReportNode.textContent = `${finalReport}`;
  resultsNode.appendChild(finalReportNode);
  addStyleClassToResultNode();
}

function removeEventListenerFromGameButtons() {
  const buttons = document.querySelectorAll(".buttons button");
  for (const button of buttons) {
    button.removeEventListener("click", playRound);
  }
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

  if (playerWins >= TOTAL_ROUNDS || computerWins >= TOTAL_ROUNDS) {
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

function resetTheScores() {
  playerWins = 0;
  computerWins = 0;
}
function resetTheGame() {
  removeStyleClassFromResultNode();
  resetTheScores();
  changeStyleOfButton("");
  addRoundReportToDOM("Choose your weapon!", "Result");
  addEventListenerToGameButtons();
}
function addEventListenerToResetButtons() {
  const resetButton = document.querySelector("button.resetButton");
  resetButton.addEventListener("click", resetTheGame);
}

addEventListenerToGameButtons();
addEventListenerToResetButtons();
