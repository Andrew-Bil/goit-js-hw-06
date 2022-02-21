

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map((ingredient) => {
  const itemLi = document.createElement('li');
  itemLi.textContent = ingredient;
  itemLi.classList.add('item');
  console.log(itemLi);
  return itemLi;

});

ulElem.append(...listOfIngredients)
console.log(listOfIngredients);


