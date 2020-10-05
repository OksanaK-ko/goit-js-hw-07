const numCategoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${numCategoriesEl.length} категории`);

numCategoriesEl.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}`,
    `Количество элементов: ${element.lastElementChild.children.length}`,
  ),
);
