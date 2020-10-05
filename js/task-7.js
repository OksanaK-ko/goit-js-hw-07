const inputChange = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');
inputChange.addEventListener('input', onInputChange);
function onInputChange(event) {
  textChange.style.fontSize = event.currentTarget.value + 'px';
}
