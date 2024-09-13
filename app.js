let userseq = [];
let gameseq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let maxLevel = parseInt(localStorage.getItem("highestScore")) || 0;

const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const allBtns = document.querySelectorAll(".btn");

// Update highest score display
function updateHighestScore() {
  h3.innerText = `Highest Score: ${maxLevel}`;
}

// Setup event listeners and display highest score on page load
updateHighestScore();

for (let btn of allBtns) {
  btn.addEventListener("click", function () {
    if (started) {
      btnPress.call(this);
    }
  });
}

document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  const randColor = btns[Math.floor(Math.random() * btns.length)];
  gameseq.push(randColor);
  btnFlash(document.querySelector(`.${randColor}`));
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 250);
}

function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level - 1 > maxLevel) {
      maxLevel = level - 1;
      localStorage.setItem("highestScore", maxLevel);
      updateHighestScore();
    }
    h2.innerHTML = `Game Over! Your score was <b>${level - 1}</b> <br>Press any key to Restart.`;
    document.body.style.backgroundColor = "red";
    setTimeout(() => document.body.style.backgroundColor = "white", 150);
    reset();
  }
}

function btnPress() {
  const userColor = this.getAttribute("id");
  userseq.push(userColor);
  const btn = document.querySelector(`.${userColor}`);
  btn.classList.add("userFlash");
  setTimeout(() => btn.classList.remove("userFlash"), 250);
  checkAns(userseq.length - 1);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
