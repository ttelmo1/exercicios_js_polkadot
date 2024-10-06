const timer = document.querySelector(".summary__timer-value");
const startButton = document.querySelector(".form__button");
const cards = document.querySelectorAll(".main__content--right__details");
let interval;

const tempoRestante = () => {
  let contador = document.querySelector(".summary__transactions-value");
  const tempo = timer.innerHTML;
  const tempoArray = tempo.split(":");
  let minutos = parseInt(tempoArray[0]);
  let segundos = parseInt(tempoArray[1]);

  if (segundos > 0) {
    segundos--;
  } else if (minutos > 0) {
    minutos--;
    segundos = 10;
  } else {
    clearInterval(interval);
    cards.forEach(card => card.remove());
    timer.innerHTML = "01:00";
    contador.textContent = 0;
    return;
  }

  segundos = segundos < 10 ? "0" + segundos : segundos;
  minutos = minutos < 10 ? "0" + minutos : minutos;

  return timer.innerHTML = `${minutos}:${segundos}`;
};

const startTimer = () => {
  clearInterval(interval);
  interval = setInterval(tempoRestante, 1000);
};

const initTimer = () => {
  startButton.addEventListener("click", startTimer);
};

//tentar entender  o pq se eu ficar clicando muitas vezes no botão ele faz o tempo travar

export {initTimer}