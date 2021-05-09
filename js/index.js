const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const changeBtnClick = (remove, add) => {
    refs.start.disabled = add;
    refs.stop.disabled = remove;
};

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
};
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let random = null;
let setRandomColor = null;
refs.start.addEventListener("click", () => {
    changeBtnClick(false, true);

    setRandomColor = setInterval(() => {
            document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000);
})

refs.stop.addEventListener('click', () => {
    clearInterval(setRandomColor);
    changeBtnClick(true, false);
});
