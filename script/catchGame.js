const catchBtn = document.querySelector("#catch-btn");
const overlay = document.querySelector("#catch-game-overlay");
const closeBtn = document.querySelector("#catch-close");
const catchArea = document.querySelector("#catch-area");
const timerDisplay = document.querySelector("#catch-timer");
const scoreDisplay = document.querySelector("#catch-score");

const GAME_TIME = 10;      
const SPAWN_INTERVAL = 700; 
const FALL_SPEED = 5;      
const IMAGE_SRC = "../media/하치.png"; 

let score = 0;
let timeLeft = GAME_TIME;
let spawnTimer = null;
let countdownTimer = null;
let fallingItems = [];
let animationId = null;

// 게임 시작 버튼
catchBtn.addEventListener("click", startGame);
closeBtn.addEventListener("click", endGame);

function startGame() {
  overlay.style.display = "flex";
  score = 0;
  timeLeft = GAME_TIME;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  catchArea.innerHTML = "";
  fallingItems = [];

  // 이미지 생성 반복
  spawnTimer = setInterval(spawnItem, SPAWN_INTERVAL);

  // 카운트다운
  countdownTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  // 떨어지는 애니메이션 시작
  animationId = requestAnimationFrame(updatePositions);
}

function spawnItem() {
  const item = document.createElement("img");
  item.src = IMAGE_SRC;
  item.className = "falling-item";

  const areaWidth = catchArea.clientWidth;
  const startX = Math.random() * (areaWidth - 50);

  item.style.left = startX + "px";
  item.style.top = "-50px";

  // 클릭하면 점수 증가 + 이미지 제거
  item.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    removeItem(item);
  });

  catchArea.appendChild(item);
  fallingItems.push(item);
}

function updatePositions() {
  fallingItems.forEach((item) => {
    const currentTop = parseFloat(item.style.top);
    const newTop = currentTop + FALL_SPEED;
    item.style.top = newTop + "px";

    // 바닥에 닿으면 제거 (점수 안 됨)
    if (newTop > catchArea.clientHeight) {
      removeItem(item);
    }
  });

  animationId = requestAnimationFrame(updatePositions);
}

function removeItem(item) {
  item.remove();
  fallingItems = fallingItems.filter((el) => el !== item);
}

function endGame() {
  clearInterval(spawnTimer);
  clearInterval(countdownTimer);
  cancelAnimationFrame(animationId);
  fallingItems.forEach((item) => item.remove());
  fallingItems = [];

  if (timeLeft <= 0) {
    alert(`게임 종료! 최종 점수: ${score}점`);
  }
  overlay.style.display = "none";
}