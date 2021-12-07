let userScore = 0;
let computerScore = 0;
let chances = 0;
let userInput = document.getElementById("inputer");
let userInput2 = document.getElementById("result");
let computer_score = document.querySelector("#computerscore");
let user_score = document.querySelector("#userscore");
let userChances = document.getElementById("user_chances");
let btn = document.querySelector("#clicker");

btn.addEventListener("click", playGame);

function playGame() {
  let computerGuess = Math.floor(Math.random() * 10);

  if (userInput.value == computerGuess) {
    user_score.innerHTML = userScore++;
    userChances.innerHTML = chances++;
    userInput2.innerHTML = "You are correct!";
  } else if (userInput.value > 9 && userInput.value < 0) {
    userInput2.innerHTML = "Please enter a number between 0 and 9";
  } else {
    computer_score.innerHTML = computerScore++;
    userChances.innerHTML = chances++;
    userInput2.innerHTML = "You are wrong!";
  }

  if(chances == 20){
    userInput.style.display = "none";
    userInput2.innerHTML = "Game Over!";
    userChances.innerHTML = "";
  }
}
