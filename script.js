let seconds = 60;
let minutes = 25;
let count;
let qtdPausa = 0;
let time = document.getElementById("time");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const pause = document.getElementById("pause");
const border = document.getElementById("border");
const imgCoffee = document.getElementById("coffee");
const msgPause = document.getElementById("msg-pause");

time.textContent = `${minutes < 10 ? "0" + minutes : minutes}:00`;

const resetTime = () => {
  clearInterval(count);
  minutes = 25;
  seconds = 60;
  time.textContent = `${minutes < 10 ? "0" + minutes : minutes}:00`;
  btnStart.disabled = false;
  btnPause.disabled = false;
  pause.textContent = "";
  imgCoffee.classList.add("show");
  imgCoffee.setAttribute("src", " ");
};

const timeCoffee = () => {
  minutes = 5;
  seconds = 60;
  qtdPausa++;
  time.textContent = `${minutes < 10 ? "0" + minutes : minutes}:00`;
  imgCoffee.classList.remove("show");
  imgCoffee.setAttribute("src", "./img/coffee-break.png");
  msgPause.textContent = `${qtdPausa}Pausa`;
  btnStart.disabled = false;
};

const startClock = () => {
  if (minutes === 25 || minutes === 5) {
    minutes -= 1;
  }
  count = setInterval(() => {
    seconds--;
    time.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (minutes === 0 && seconds === 0) {
      clearInterval(count);
      timeCoffee();
    } else if (seconds === 0) {
      minutes--;
      seconds = 60;
    } else if (minutes <= 5 && seconds % 2 !== 0) {
      border.classList.toggle("grow");
    }
  }, 1000);
};

btnStart.addEventListener("click", () => {
  startClock();
  btnStart.disabled = true;
  btnPause.disabled = false;
  pause.textContent = "";
});

btnPause.addEventListener("click", () => {
  clearInterval(count);
  btnStart.disabled = false;
  btnPause.disabled = true;
  pause.textContent = "Parado";
});

btnReset.addEventListener("click", () => {
  resetTime();
});
