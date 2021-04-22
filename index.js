document.querySelector('form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const secret = document.querySelector('#link-input');
  secret.value = `${window.location}#${encrypted}`;
  secret.select();

  input.value = '';
});
