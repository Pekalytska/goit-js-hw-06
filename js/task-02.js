const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("js-item");
  return item;
});

const listOfIngredients = document.querySelector("#ingredients");
listOfIngredients.append(...arrayOfItems);
