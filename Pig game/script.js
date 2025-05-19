let score = [0, 0]; //Global score
let roundScore = 0; //round score
let current = 0; //current player  (0 or 1)
let dice;
let gameRunning = true;
let animation = 0;

document.querySelector(".score-0").textContent = "0";
document.querySelector(".score-1").textContent = "0";
document.querySelector(".current-0").textContent = "0";
document.querySelector(".current-1").textContent = "0";

document.getElementById("rotate").onclick = function () {
  //roll the dice
  dice = Math.floor(Math.random() * 6 + 1);

  if (gameRunning) {
    //get value of dice
    document.querySelector("#dice-img").src = "assets/dice-" + dice + ".JPG";

    //This is just for cool effects
    if (animation === 0) {
      document.querySelector("#dice-img").classList.add("tada");
      document.querySelector("#dice-img").classList.remove("shake");
      animation = 1;
    } else {
      document.querySelector("#dice-img").classList.remove("tada");
      document.querySelector("#dice-img").classList.add("shake");
      animation = 0;
    }

    //YOUR CODE HERE

    if (dice === 1) {
      resetRound();
      return;
    }

    roundScore += dice;

    document.querySelector(".current-" + current).textContent = roundScore;
    if (roundScore + score[current] >= 100) {
      score[current] += roundScore;
      document.querySelector(".score-" + current).textContent = score[current];
      document.querySelector(".current-" + current).textContent = "0";
      alert(`El jugador ${current + 1} gano!`);
      document.getElementById("hold").disabled = true;
      document.getElementById("rotate").disabled = true;
      gameRunning = false;
    }
  }
};

document.getElementById("hold").onclick = function () {
  if (gameRunning) {
    score[current] += roundScore;
    document.querySelector(".score-" + current).textContent = score[current];
    resetRound();
  }
};

function resetRound() {
  roundScore = 0;
  document.querySelector(".player-0").classList.toggle("active");
  document.querySelector(".player-1").classList.toggle("active");
  document.querySelector(".current-" + current).textContent = "0";
  current = 1 - current;
}

document.querySelector("#new").addEventListener("click", game);

function game() {
  score = [0, 0];
  roundScore = 0;
  current = 0;
  gameRunning = true;

  document.getElementById("hold").disabled = false;
  document.getElementById("rotate").disabled = false;

  document.querySelector(".score-0").textContent = "0";
  document.querySelector(".score-1").textContent = "0";
  document.querySelector(".current-0").textContent = "0";
  document.querySelector(".current-1").textContent = "0";
  document.querySelector("#pl-0").innerHTML =
    "<h2 id='pl-0'>PLAYER 1 " + "<i class='fas fa-cicle'>" + "</i></h2>";
  document.querySelector("#pl-1").innerHTML =
    "<h2 id='pl-1'>PLAYER 2 " + "<i class='fas fa-cicle'>" + "</i></h2>";
}
