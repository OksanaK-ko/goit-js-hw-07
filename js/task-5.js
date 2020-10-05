const inputForm = document.querySelector('#name-input');
const outputForm = document.querySelector('#name-output');

inputForm.addEventListener('input', onInput);
function onInput(event) {
  //   console.log(event.currentTarget.value);

  if (event.currentTarget.value.length !== 0) {
    outputForm.textContent = event.currentTarget.value;
  } else {
    outputForm.textContent = 'незнакомец';
  }
}
