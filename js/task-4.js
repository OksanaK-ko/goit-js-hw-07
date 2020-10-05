const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
function decrement() {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
}
function increment() {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
}
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
