var input = document.querySelector("input");
var random = Math.floor(Math.random() * 100);
var guess = document.querySelector(".guess");
var chancesspan = document.querySelector(".chances");
var btn = document.querySelector("button");
var chances = 8;

function playGame() {
  chances--;
  if (input.value < 0 || input.value > 100) {
    alert("please enter a number between 0 and 100");
    chances++;
  }
  if (input.value > random) {
    guess.textContent = "your number is high";
    guess.style.color = "red";
    chancesspan.textContent = chances;
  } else if (input.value < random) {
    guess.textContent = "your number is low";
    guess.style.color = "red";
    chancesspan.textContent = chances;
  } else if (input.value == random) {
    guess.textContent = "you won the game";
    guess.style.color = "green";
    chancesspan.textContent = chances;
  }
  if (chances == 0) {
    btn.textContent = "Replay";
    guess.textContent = "you lost the game";
  }
  if (chances < 0) {
    location.reload();
  }
}
