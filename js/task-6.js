const inputValidation = document.querySelector('#validation-input');
inputValidation.addEventListener('focus', () => {
  inputValidation.classList = '';
});
inputValidation.addEventListener('blur', onInputValidation);

function onInputValidation() {
  if (inputValidation.value.length === Number(inputValidation.dataset.length)) {
    inputValidation.classList.add('valid');
  } else {
    inputValidation.classList.add('invalid');
  }
}
