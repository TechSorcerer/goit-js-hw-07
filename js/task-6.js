function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divCont = document.querySelector('#boxes');

btnCreate.addEventListener('click', handleCreate);
btnDestroy.addEventListener('click', handleDestroy);

function createBoxes(amount) {
  let size = 30;
  let markup = '';

  for (let i = 0; i < amount; i++) {
    markup += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  divCont.innerHTML = markup;
}

function destroyBoxes() {
  divCont.innerHTML = '';
}

function handleCreate() {
  divCont.innerHTML = '';
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function handleDestroy() {
  destroyBoxes();
}
