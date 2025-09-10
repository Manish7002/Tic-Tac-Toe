let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let winnerPopup = document.getElementById("winnerPopup");
let winnerMsg = document.getElementById("winnerMsg");
let playAgainBtn = document.getElementById("playAgainBtn");

let turnX = true;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX === true) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
};

function showWinner(winner) {
  winnerMsg.innerText =
    winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins! 🎉`;
  winnerPopup.classList.remove("d-none");
  boxes.forEach((box) => (box.disabled = true));
}

playAgainBtn.addEventListener("click", () => {
  winnerPopup.classList.add("d-none");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnX = true;
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnX = true;
});
