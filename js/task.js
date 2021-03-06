const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона
// body на случайное значение из массива используя инлайн - стиль.При нажатии на кнопку Stop,
//     изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.Сделай так,
//     чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
//     используй функцию randomIntegerFromInterval.

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyId = document.querySelector('body');

const color = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
    bodyId.style.backgroundColor = randomIntegerFromInterval;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
},
};
startBtn.addEventListener('click', () => {
  color.start();
});
stopBtn.addEventListener('click', () => {
  color.stop();
 });