const refs = {
  bodyEl: document.querySelector('body'),
  startButtonEl: document.querySelector('button[data-start]'),
  stopButtonEl: document.querySelector('button[data-stop]'),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
refs.stopButtonEl.setAttribute('disabled', 'disabled');
let timerId = null;

refs.startButtonEl.addEventListener('click', () => {
  refs.startButtonEl.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    const resGetRHC = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = resGetRHC;
    refs.startButtonEl.setAttribute('disabled', 'disabled');
    refs.stopButtonEl.removeAttribute('disabled');
  }, 1000);
});
refs.stopButtonEl.addEventListener('click', () => {
  refs.stopButtonEl.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
  refs.startButtonEl.removeAttribute('disabled');
});
