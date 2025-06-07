let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorecalc = document.querySelector("#userScore");
let compscorecalc = document.querySelector("#compScore");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was graw");
  msg.innerText = "It's Draw, Play Again!";
   msg.style.backgroundColor = " #081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userscorecalc.innerText = userScore;

    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
  } else {
     compScore++;
    compscorecalc.innerText = compScore;

    msg.innerText = `You Lose! ${compChoice} beats  Your${userChoice}`
     msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice is", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice is", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
