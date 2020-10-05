const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('#ingredients');
const items = ingredients.map(el => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  return liEl;
});

console.log(items);

listEl.append(...items);
