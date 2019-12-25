"use strict";

// Есть массив цветов в hex-формате и кнопки Start и Stop.

/* <button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button> */

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop,
// изменение цвета фона должно останавливаться.

// warning Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = arr => {
  return arr[randomIntegerFromInterval(0, arr.length - 1)];
};

let flag = false;
const startBodyBG = () => {
  if (flag) {
    return;
  }

  flag = true;

  const timerId = setInterval(
    () => (document.body.style.backgroundColor = randomColor(colors)),
    1000
  );

  const stopBodyBG = () => {
    if (!flag) {
      return;
    }

    clearInterval(timerId);
    flag = false;
  };

  stopBtn.addEventListener("click", stopBodyBG);
};

startBtn.addEventListener("click", startBodyBG);
