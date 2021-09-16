const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');


const arr = ingredients.forEach(element => {
  const liEl = document.createElement('li');
  liEl.append(element);
  ulEl.append(liEl);
});
