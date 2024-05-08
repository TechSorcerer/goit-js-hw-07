const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(evt) {
  const input = evt.target.value.trim();
  spanEl.textContent = input || 'Anonymous';
}
