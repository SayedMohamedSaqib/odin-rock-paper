console.log("Hello World!");

function getComputerChoice() {
  let choices = { 0: "rock", 1: "paper", 2: "scissor" };
  let play = Math.floor(Math.random() * 3);
  return choices[play];
}

function getHumanChoice(choice) {
  return choice;
}

function winner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";

  const rules = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
  };

  return rules[userChoice] === computerChoice ? 1 : 0;
}

let scores = { user: 0, computer: 0 };

function playGame(userChoice) {
  // stop game if already finished
  if (scores.user === 5 || scores.computer === 5) return;

  let computerChoice = getComputerChoice();

  let userDisplay = document.querySelector("#userChoice");
  let computerDisplay = document.querySelector("#computerChoice");
  let userScore = document.querySelector("#userScore");
  let computerScore = document.querySelector("#computerScore");
  let winnerMessage = document.querySelector("#winnerMessage");

  userDisplay.innerHTML = "User Choice: " + userChoice;
  computerDisplay.innerHTML = "Computer Choice: " + computerChoice;

  let result = winner(userChoice, computerChoice);

  if (result === "draw") {
    winnerMessage.innerHTML = "It's a draw!";
  } else if (result === 1) {
    scores.user++;
    userScore.innerHTML = "User Score: " + scores.user;
    winnerMessage.innerHTML = "You win this round!";
  } else {
    scores.computer++;
    computerScore.innerHTML = "Computer Score: " + scores.computer;
    winnerMessage.innerHTML = "Computer wins this round!";
  }

  // Check for game winner
  if (scores.user === 5) {
    winnerMessage.innerHTML = "🎉 You WON the game!";
  } else if (scores.computer === 5) {
    winnerMessage.innerHTML = "💻 Computer WON the game!";
  }
}

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
      case "btn-r":
        playGame("rock");
        break;

      case "btn-p":
        playGame("paper");
        break;

      case "btn-s":
        playGame("scissor");
        break;
    }
  });
});
