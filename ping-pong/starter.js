//1. Acciones a los botones

let player1Score = 0;
let player2Score = 0;

const addPointToPlayer1 = document.getElementById("p1Button");
const addPointToPlayer2 = document.getElementById("p2Button");
const resetGame = document.getElementById("reset");
const maxValue = document.getElementById("playto");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");

//2. Botón verde asociado a jugador 1

addPointToPlayer1.addEventListener("click", () => {
  player1Score++;
  p1Display.textContent = player1Score;
  checkWinner();
});

//3. Botón rojo asociado a jugador 2

addPointToPlayer2.addEventListener("click", () => {
  player2Score++;
  p2Display.textContent = player2Score;
  checkWinner();
});

//4. Botón de reset

resetGame.addEventListener("click", reset);

//5. Select de cantidad de puntos a jugar

maxValue.addEventListener("change", reset);

//6. Lógica de juego

function reset() {
  player1Score = 0;
  player2Score = 0;
  p1Display.textContent = player1Score;
  p2Display.textContent = player2Score;
  toggleButtons(false);
  setColors("black", "black");
}

function checkWinner() {
  const winningScore = maxValue.value;
  if (player1Score >= winningScore) {
    toggleButtons(true);
    setColors("green", "red");
  }
  if (player2Score >= winningScore) {
    toggleButtons(true);
    setColors("red", "green");
  }
}

function toggleButtons(boolean) {
  addPointToPlayer1.disabled = boolean;
  addPointToPlayer2.disabled = boolean;
}

function setColors(p1Color, p2Color) {
  p1Display.style.color = p1Color;
  p2Display.style.color = p2Color;
}
