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
const body = document.querySelector('body');

const color = {
  colorID: null,
  isActive: false
};
startBtn.addEventListener('click', () => {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
});


// startBtn.addEventListener('click', () => {
//   const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
//   const timerId = setInterval(() => {
//         console.log('Start');
//     }, 1000);
// });
// stopBtn.addEventListener('click', () => {
//   console.log('Stop');
//   // clearInterval(timerId);
//  });

// function changeColor(colors) {
//   body.style.backgroundColor = selectColor;
//    const selectColor = colors.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
// };