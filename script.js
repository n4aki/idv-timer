// タイマーの変数
let timer = 0;
let interval = null;

// HTML要素を取得
const timerDisplay = document.getElementById("timer");
const teleportEvent = document.getElementById("teleport");
const excitementEvent = document.getElementById("excitement");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

// タイマーを更新する関数
function updateTimerDisplay() {
  const minutes = Math.floor(timer / 60).toString().padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

// イベントのチェック
function checkEvents() {
  if (timer === 60) {
    teleportEvent.classList.add("completed");
    teleportEvent.innerHTML = "瞬間移動利用可能: 利用可能!";
  }
  if (timer === 120) {
    excitementEvent.classList.add("completed");
    excitementEvent.innerHTML = "興奮利用可能: 利用可能!";
  }
}

// タイマーを開始する関数
function startTimer() {
  if (interval) return; // 二重スタート防止
  interval = setInterval(() => {
    timer++;
    updateTimerDisplay();
    checkEvents();
  }, 1000);
}

// タイマーをリセットする関数
function resetTimer() {
  clearInterval(interval);
  interval = null;
  timer = 0;
  updateTimerDisplay();
  resetEvents();
}

// イベントをリセットする関数
function resetEvents() {
  teleportEvent.classList.remove("completed");
  teleportEvent.innerHTML = "瞬間移動利用可能: <span class='time'>60秒後</span>";
  excitementEvent.classList.remove("completed");
  excitementEvent.innerHTML = "興奮利用可能: <span class='time'>120秒後</span>";
}

// ボタンのクリックイベントを設定
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
