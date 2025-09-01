let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  const emojiMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
  };

  let result = "";
  if (userChoice === compChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;  
  } else {
    result = "Computer wins!";
    computerScore++;  
  }

  document.getElementById("user-box").innerText = emojiMap[userChoice];
  document.getElementById("machine-box").innerText = emojiMap[compChoice];
  document.getElementById("result").innerText =
    `You chose ${emojiMap[userChoice]}, computer chose ${emojiMap[compChoice]}. ${result}`;

  document.getElementById("score").innerText =
    `Player: ${playerScore} | Computer: ${computerScore}`;
}