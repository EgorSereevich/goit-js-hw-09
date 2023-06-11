import Notiflix, { Loading } from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector(`form[name="daley]`),
  stepEl: document.querySelector(`form[name="step"]`),
  amountEl: document.querySelector(`form[name="amount"]`),
};

refs.formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  let delay = Number(refs.delayEl.value);
  let step = Number(refs.stepEl.value);
  let amount = Number(refs.amountEl.value);
  let position = 0;
  delay = delay - step;
  for (let i = 0; i < amount; i += 1) {
    position = i + 1;
    delay += step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    form.rest();
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, dalay });
      } else {
        rej({ position, dalay });
      }
    }, dalay);
  });
}
