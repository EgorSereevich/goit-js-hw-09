import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startButtonEl: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
  timeAllEl: document.querySelector('.timer'),
  timeEl: document.querySelectorAll('.field'),
};
refs.startButtonEl.setAttribute('disabled', 'disabled');
refs.timeAllEl.style.display = 'flex';
console.log(refs.timeEl);

refs.timeEl[0].style.flexDirection = 'column';
refs.timeEl[0].style.display = 'flex';
refs.timeEl[1].style.flexDirection = 'column';
refs.timeEl[1].style.display = 'flex';
refs.timeEl[2].style.flexDirection = 'column';
refs.timeEl[2].style.display = 'flex';
refs.timeEl[3].style.flexDirection = 'column';
refs.timeEl[3].style.display = 'flex';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startButton = document.querySelector('button[data-start]');
    if (selectedDates[0].getTime() < options.defaultDate) {
      startButton.setAttribute('disabled', 'disabled');
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
};
const fp = flatpickr(refs.inputEl, options);

refs.startButtonEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    const date = new Date();
    const ms = fp.selectedDates[0].getTime() - date.getTime();
    convertMs(ms);
  }, 1000);
});

function convertMs(ms) {
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
    clearTimeout(timerId);
  }
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
  return { days, hours, minutes, seconds };
}
