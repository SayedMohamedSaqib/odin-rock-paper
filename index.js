console.log("Hello World!");

function getComputerChoice() {
  let choices = { 0: "rock", 1: "paper", 2: "scissor" };
  let play = Math.floor(Math.random() * 3);
  return choices[play];
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, scissor): ");
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

function playGame() {
  const userChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  console.log("User:", userChoice);
  console.log("Computer:", computerChoice);
  const result = winner(userChoice, computerChoice);
  if (result === "draw") {
    console.log("It's a draw!");
  } else if (result === 1) {
    console.log("You win!");
    scores.user++;
  } else {
    console.log("Computer wins!");
    scores.computer++;
  }
  console.log("Score:", scores);
}
