const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = [];

for (const ingredient of ingredients) {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  ingredientsList.push(liItem);
}

const ulList = document.querySelector("#ingredients");
ulList.append(...ingredientsList);
