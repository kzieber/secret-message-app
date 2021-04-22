document.querySelector('form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  const input = document.querySelector('#message-input');
  const messageForm = document.querySelector('#message-form');
  const encrypted = btoa(input.value);

  const secret = document.querySelector('#link-input');
  secret.value = `${window.location}#${encrypted}`;

  const link = document.querySelector('#message-link');
  messageForm.classList.add('hide');
  link.classList.remove('hide');

  secret.select();
  input.value = '';
});
