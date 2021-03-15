const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

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
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    startBtn.disabled = true;
    function changeColor(color) {
      bodyId.style.backgroundColor = color;
    };

    this.intervalId = setInterval(randomInx => {
      randomInx = randomIntegerFromInterval(0, 5);
      changeColor(colors[randomInx]);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    startBtn.disabled = false;
  },
};
startBtn.addEventListener('click', () => {
  color.start();
});
stopBtn.addEventListener('click', () => {
  color.stop();
});