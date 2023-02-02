//----------part1 (1-st variant)----------//
const arrayOfCategories = document.querySelectorAll(".js-item");
let message = `Number of categories: ${arrayOfCategories.length}`;
console.log(message);

//----------part1 (2-nd variant)----------//
const listOfCategories = document.querySelector("#categories");
message = `Number of categories: ${listOfCategories.children.length}`;
console.log(message);

//------------------part2----------------//
arrayOfCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
