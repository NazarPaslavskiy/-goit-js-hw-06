const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach( function (textContent) {
const itemRef = document.createElement('li');
itemRef.classList.add('item');
itemRef.textContent = ingredients;
console.log(itemRef)
});
