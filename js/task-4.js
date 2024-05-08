const formEl = document.querySelector('.js-login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email;
  const password = evt.currentTarget.elements.password;

  if (!email.value.trim() || !password.value.trim())
    return alert('All form fields must be filled in');

  const userData = { Email: email.value, password: password.value };
  console.log(userData);
  evt.currentTarget.reset();
}
